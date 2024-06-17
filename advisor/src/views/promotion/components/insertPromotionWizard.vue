<template>
  <WsWizardForm
    :fields="showFields"
    :rules="rules"
    :initial-data="initialData"
    @handle-ok="handleOk"
    @change="handleChange"
  />
</template>

<script setup lang="ts">

import { computed, onMounted, reactive, ref } from 'vue';
import { Dayjs } from 'dayjs';
import { message, type SelectProps } from 'ant-design-vue';

import { useCfgStore } from "@/stores/modules/cfg";
import { extractRules } from '@/utils/extractRules'
import { WsWizardForm } from '@/components/business/ws-wizard-form'
// 初始化值，从filed的配置中获取初始化值（initialValue）
import Api from '@/api/';
import type { WizardConfig } from 'CFG';

const { getMyPromotionMetaList } = Api.promotion
const { getCustomerAnchorList } = Api.customer
const { getOrgunitAnchorList } = Api.orgunit
const { getPeriodList } = Api.period

const cfgStore = useCfgStore();
const initialData = reactive<Record<string, any>>({})
const wizardConfig = reactive<WizardConfig>(cfgStore.getPageWizardConfig("promotion", "defaultWizard"));

const customerAnchorList = ref<SelectProps['options']>([]);
const orgunitAnchorList = ref<SelectProps['options']>([]);
const periodList = ref<SelectProps['options']>([]);
const periodType = ref<string>('Segment')
const templateList = ref<SelectProps['options']>([]);
const durationTypeList = ref<SelectProps['options']>([
  { label: 'Days', value: 'days' },
  { label: 'Weeks', value: 'weeks' },
  { label: 'Months', value: 'months' },
  { label: 'Years', value: 'years', disabled: true, }
]);

onMounted(async() => {
  const templateMetaList = await getMyPromotionMetaList({ active: true })
  templateMetaList.forEach((element: any) => {
    element.id = element.value
    element.value = element.pkey
  });
  templateList.value = templateMetaList
})

const showFields = computed(() => {
  // 根据visible控制是否load数据, 此处一定要使用 item.visible !== false ，因为 item.visible 是 undefined的时候需要显示
  const itemDurationType = wizardConfig.wizard.fields.find((item) => item.name === 'durationType' && item.visible !== false)
  itemDurationType && (itemDurationType.optionsList = durationTypeList.value)

  const itemPrmMetaPkey = wizardConfig.wizard.fields.find((item) => item.name === 'prmMetaPkey' && item.visible !== false)
  itemPrmMetaPkey && (itemPrmMetaPkey.optionsList = templateList)
  
  const itemBpaMainPkey = wizardConfig.wizard.fields.find((item) => item.name === 'bpaMainPkey' && item.visible !== false)
  itemBpaMainPkey && (itemBpaMainPkey.optionsList = customerAnchorList.value)
  
  const itemOrgMainPkey = wizardConfig.wizard.fields.find((item) => item.name === 'orgMainPkey' && item.visible !== false)
  itemOrgMainPkey && (itemOrgMainPkey.optionsList = orgunitAnchorList.value)
  
  const itemPeriodPkey = wizardConfig.wizard.fields.find((item) => item.name === 'periodPkey' && item.visible !== false)
  itemPeriodPkey && (itemPeriodPkey.optionsList = periodList.value)

  return wizardConfig.wizard.fields
})

// 根据传入的配置提取rules，供form验证
// const rules: Record<string, Rule[]> = extractRules(wizardConfig.wizard.fields)
const rules = computed(() => extractRules(wizardConfig.wizard.fields))

const handleChange = (fieldName: string, value: any, selectedOption: any) => {
  console.log(`selected in wizard. ${fieldName}, ${value}, ${selectedOption}`);
  // 对于有字段间交互的，可用来更新其他field的配置信息，看看是否能够刷新页面显示？？？？
  if (fieldName === 'prmMetaPkey' && selectedOption) {
    // 1. 通过用户选择模版的anchorType的值控制显示Bpa还是Org
    const { anchorType } = selectedOption
    periodType.value = selectedOption.periodType || 'Segment'
    console.log('anchorType: ', anchorType)
    const itemBpa = wizardConfig.wizard.fields.find((item) => item.name === 'bpaMainPkey')
    const itemOrg = wizardConfig.wizard.fields.find((item) => item.name === 'orgMainPkey')

    if (itemBpa && itemOrg && (anchorType === 'BusinessPartner' || anchorType === 'OrgUnit')) {
      // 数据变更怎么引起UI变化？？？？, 使用reactive即可
      // 通过visible控制控件是否显示，控制rules是否启用，以及dropdown数据是否load等
      itemBpa.visible = anchorType === 'BusinessPartner'
      itemOrg.visible = anchorType === 'OrgUnit'
  
      if(itemBpa.visible) {
        // customerAnchorList
        getCustomerAnchorList({
          active: true,
          category: 'promotion',
          type: 'create'
        })
          .then((data: any[]) => {
            
            data.forEach((element: any) => {
              element.id = element.value
              element.value = element.pkey
            });
            customerAnchorList.value = data
          })
      }
      if(itemOrg.visible) {
        // TODO 返回数据待验证
        getOrgunitAnchorList({
          active: true,
          orgStateType: 'PRM',
          type: 'create'
        })
          .then((data: any[]) => {
            data.forEach((element: any) => {
              element.id = element.value
              element.value = element.pkey
            });
            orgunitAnchorList.value = data
          })
      }
    }
  }

  // 2. 根据startDate的值load period的值，start Date决定所在的Period，并且periodType.value已经有值的情况下
  if (fieldName === 'startDate') {
    console.log(`deal with field in wizard. ${fieldName}, ${value}`);
    const startDate  = value as Dayjs
    getPeriodList({
      periodType: periodType.value,
      dateFrom: startDate.format('YYYY-MM-DD')
    })
      .then((data) => {
        const vvvv: Record<string, any>[] = []
        data.rows.forEach((element: any) => {
          const { description: label, pkey: value } = element
          vvvv.push({ value, label })
        });
        periodList.value = vvvv

        // 这里最多找到一个period，所以如果有值就取第一个赋给periodPkey
        initialData.periodPkey = vvvv[0]?.value
      })
  }
  // 3. startDate，duration，durationType，endDate之间的相互依赖计算
  //   如当前改变的是startDate，duration或durationType，则当 startDate，duration和durationType均有值时，计算endDate，否则不计算
  //   如当前改变的是endDate，当startDate，endDate且durationType都有值时更新duration，否则不计算
  if (['duration', 'durationType', 'startDate'].includes(fieldName)) {
    const { duration, durationType, startDate } = initialData
    if (duration && durationType && startDate) {
      if (+duration <= 0) {
        throw new Error('duration必须是大于0的整数')
      }
      const startDateObj = startDate as Dayjs
      // 包含当前，所以此处需要 -1 days
      const newEndDate = startDateObj.add(+duration, durationType).add(-1, 'days')
      initialData.endDate = newEndDate
    }
  }
  if (['endDate'].includes(fieldName)) {
    const { endDate, durationType, startDate } = initialData
    if (endDate && durationType && startDate) {
      const startDateObj = startDate as Dayjs
      const endDateObj = endDate as Dayjs
      // bbbb 必须大于0，否则就是enddate早于startdate
      // 因为要包含startDate和endDate，所以结果需要加上1
      const durationDiff = endDateObj.diff(startDateObj, durationType) + 1
      if (durationDiff < 1) {
        message.error('endDate必须晚于startDate');
        initialData.duration = undefined
        return
        // throw new Error('endDate必须晚于startDate')
      }
      initialData.duration = durationDiff
    }
  }
};

const handleOk = (state: Record<string, any>) => {
  // 已经验证成功，传入值为用户输入的已经经过验证的值
  // 接下来根据传入的值进行数据处理即可，如保存，创建其他实体等
  console.log('数据验证成功，可以继续处理了。。。。', state)
}

</script>
