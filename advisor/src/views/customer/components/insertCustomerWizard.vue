<template>
  <WsWizardForm
    :fields="showFields"
    :rules="rules"
    :initial-data="initialData"
    @handle-ok="handleOk"
  />
</template>

<script setup lang="ts">
// TODO 添加必要字段：客户名称，客户编号，等
import { computed, onMounted, reactive, ref } from 'vue';
import { message, type SelectProps } from 'ant-design-vue';
import { useRoute, useRouter, type RouteRecordRaw } from 'vue-router';

import { useCfgStore } from "@/stores/modules/cfg";
import { extractRules } from '@/utils/extractRules'
import { WsWizardForm } from '@/components/business/ws-wizard-form'
import getCurrentProfile from '@/utils/get-profile';

// 初始化值，从filed的配置中获取初始化值（initialValue）
import Api from '@/api/';
import type { DetailContextConfig, WizardConfig } from 'CFG';

const { getCustomerMetaList } = Api.bpameta
const { createCustomer } = Api.customer

const router = useRouter();
const route = useRoute();
const cfgStore = useCfgStore();

const currentDetailContextConfig = computed(() => {
  const { meta: { detailContext }} = route
  const detailContextConfig = cfgStore.detailContextConfig as DetailContextConfig
  return detailContextConfig[detailContext as string]
})

const initialData = reactive<Record<string, any>>({})
const wizardConfig = reactive<WizardConfig>(cfgStore.getPageWizardConfig(currentDetailContextConfig.value.module,currentDetailContextConfig.value.wizardName!))

const templateList = ref<SelectProps['options']>([]);


onMounted(async() => {
  const { rows: templateMetaList } = await getCustomerMetaList({ active: true })
  templateMetaList.forEach((element: any) => {
    element.label = element.description
    element.value = element.pkey
  });
  templateList.value = templateMetaList
})

const showFields = computed(() => {
  // 根据visible控制是否load数据, 此处一定要使用 item.visible !== false ，因为 item.visible 是 undefined的时候需要显示
  const itemBpaMetaPkey = wizardConfig.wizard.fields.find((item) => item.name === 'bpaMetaPkey' && item.visible !== false)
  itemBpaMetaPkey && (itemBpaMetaPkey.optionsList = templateList)

  return wizardConfig.wizard.fields
})

// 根据传入的配置提取rules，供form验证
// const rules: Record<string, Rule[]> = extractRules(wizardConfig.wizard.fields)
const rules = computed(() => extractRules(wizardConfig.wizard.fields))

const handleOk = async (state: Record<string, any>) => {
  // 已经验证成功，传入值为用户输入的已经经过验证的值
  // 接下来根据传入的值进行数据处理即可，如保存，创建其他实体等
  console.log('数据验证成功，可以继续处理了。。。。', state)
  const { bpaMetaPkey } = state

  // 对于有wizard的直接创建成功，然后跳转到edit页面
  const customerObj = {
    bpaMetaPkey,
    active: true,
    closed: false,
    bpaType: 'C',
    id: 'mycustomer' + Math.floor(Math.random() * 1000),
    bpaState: '010',
    name: 'name1-' + Math.floor(Math.random() * 1000),
    name2: 'name2-' + Math.floor(Math.random() * 1000),
  }

  const pkey = await createCustomer(customerObj)

  router.push({
      name: 'customer-edit',
      params: { pkey },
      query: { __f_: route.fullPath }
  })
  }

</script>
