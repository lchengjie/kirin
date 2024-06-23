<template>
  <div class="overflow-auto" style="height: 800px;">
    <InsertCustomerWizard v-model:open="createCustomerWizardModal.visible" :id="createCustomerWizardModal.id" :title="createCustomerWizardModal.title" />

    <a-page-header
      class="b-solid b-1 p-2 mb-1"
      style="border-color: rgb(235, 237, 240)"
      :title="customer.name"
      :sub-title="customer.id"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <a-button
          v-for="btn in mainButtons" :key="btn.command"
          :icon="h(iconKeyMapping[btn.iconClass])"
          :disabled="!btn.editable"
          @click="handleButtonClick(btn.command)"
        >
        <!-- QuestionOutlined -->
          {{ btn.text && t(`toolbar.${btn.text}`) }}
        </a-button>
        <!-- <Menu.Item v-for="item in localeList" :key="item.lang">
          <a href="javascript:;">{{ item.icon }} {{ item.label }}</a>
        </Menu.Item> -->
        <!-- <a-tooltip title="Create">
          <a-button shape="circle" :icon="h(PlusOutlined)" @click="handleCreateCustomer" />
        </a-tooltip> -->
        <!-- <a-tooltip title="Filter">
          <a-button shape="circle" :icon="h(FilterOutlined)" />
        </a-tooltip> -->
        <!-- <a-button key="3"><FilterOutlined /></a-button>
        <a-button key="2">Operation</a-button>
        <a-button key="1" type="primary">Primary</a-button> -->
      </template>
    </a-page-header>

    <div>Detail Customer, Is Edit: {{ props.isEdit }}, Pkey: {{ props.pkey }}</div>
    <!-- <div>CurrentDetailContextConfig: {{ currentDetailContextConfig }}</div> -->
    <div>currentDetailContextConfig</div>
    <JsonFormat :json-data="currentDetailContextConfig" style="display: block; height: 200px;" class="border-1 border-solid m-2 p-2" />
    <div>currentUiGroupConfig</div>
    <JsonFormat :json-data="currentUiGroupConfig" style="display: block; height: 200px;"  class="border-1 border-solid m-2 p-2" />
    <div>accessGroupConfig</div>
    <JsonFormat :json-data="accessGroupConfig" style="display: block; height: 200px;"  class="border-1 border-solid m-2 p-2" />
  </div>
</template>

<script setup lang="ts">
import { computed, h, onMounted, ref } from 'vue';

import { useRoute } from 'vue-router';
import { useCfgStore } from '@/stores/modules/cfg';
import type { DetailContextConfig } from 'CFG';
import Api from '@/api/';
import { FilterOutlined, PlusOutlined, SaveOutlined, CloseOutlined, DeleteOutlined, UploadOutlined, QuestionOutlined } from '@ant-design/icons-vue';

import { useI18n } from '@/hooks/useI18n';
const { t } = useI18n();
import InsertCustomerWizard from './insertCustomerWizard.vue'

import JsonFormat from '@/components/basic/JsonFormat/index.vue';
import { reactive } from 'vue';
import parseAccessRights from '@/utils/parse-access-rights'
import { useUserStore } from '@/stores/modules/user';
import { getCurrentInstance } from 'vue';

const { getCustomer } = Api.customer
const { getCustomerMeta } = Api.bpameta

const cfgStore = useCfgStore();
const userStore = useUserStore();
const route = useRoute();

const currentInstance = ref()

const canWrite = computed(() => {
  return userStore.canWrite
})

const createCustomerWizardModal = ref({
  visible: false,
  id: 'create-promotionwizard-modal',
  title: t('wizard.promotion'),
  okTitle: t('global.girdoktitle'),
  content: ''
})

const iconKeyMapping: Recordable = ref({
  'r-help': QuestionOutlined,
  'r-upload': UploadOutlined,
  'r-save': SaveOutlined,
  'r-saveback': SaveOutlined,
  'r-cancel': CloseOutlined,
  'r-new': PlusOutlined,
  'r-add': PlusOutlined,
  'r-delete': DeleteOutlined,
})

const currentDetailContextConfig = computed(() => {
  const { meta: { detailContext }} = route
  const detailContextConfig = cfgStore.detailContextConfig as DetailContextConfig
  return detailContextConfig[detailContext as string]
})

// accessGroupConfig Parse成最终的
// uiGroupConfig 需要根据template获取

// 必须提供pkey,此页面仅支持修改数据
const props = withDefaults(defineProps<{ isEdit: boolean, pkey: string }>(), {
    isEdit: false,
    pkey: '',
  });
  console.log('111111,111', props.isEdit)
  console.log('111111,222', props.pkey)

// 当前pkey获取数据信息信息
const customer = reactive(await getCustomer(props.pkey, {}))
console.log("🚀 ~ customer:", customer)

// 获取模版信息
const myTemplate = reactive(await getCustomerMeta(customer.bpaMetaPkey, {}))
console.log("🚀 ~ myTemplate:", myTemplate)

// 获得当前ui配置的需要显示的元素
// const currentUiGroupConfig = cfgStore.uiGroupConfig[currentDetailContextConfig.value.module][myTemplate.uiGroup || 'default']
const currentUiGroupConfig = computed(() => {
  if (myTemplate) {
    return cfgStore.uiGroupConfig[currentDetailContextConfig.value.module][myTemplate.uiGroup || 'default']
  }
  return undefined
})
console.log("🚀 ~ currentUiGroupConfig ~ currentUiGroupConfig:", currentUiGroupConfig.value)


const accessGroupConfig = computed(() => {
  const accessGroupConfigKey = `${currentDetailContextConfig.value.module}`
  const currentAccessGroupConfig = cfgStore.accessGroupConfig[accessGroupConfigKey]
  console.log("🚀 ~ accessGroupConfig ~ currentAccessGroupConfig:", currentAccessGroupConfig)
  
  // 传入计算时需要用到的对象
  const mappingObj = {
    meta: myTemplate,
    self: currentInstance,
    main: customer
  }
  const right = parseAccessRights(currentAccessGroupConfig, mappingObj)
  // 保持用到base的地方不报错，cfgdata调整后再处理改行
  console.log("🚀 ~ accessGroupConfig ~ right:", right)
  // right.base = { editable: false, visible: true }
  return right
})
console.log("🚀 ~ accessGroupConfig ~ accessGroupConfig:", accessGroupConfig.value)
// cfgStore.accessGroupConfig[`${currentDetailContextConfig.value.module}`]
// cfgStore.accessGroupConfig[`${currentDetailContextConfig.value.module}.overview`]

const mainButtons = computed(() => {
  const visibleButtons = currentDetailContextConfig.value.buttons?.main
    .filter((o) => o.visible)
    .sort((a, b) => ~~Number(a.order) - ~~Number(b.order))
  return visibleButtons
  // return currentDetailContextConfig.value.buttons?.main
  // const { meta: { detailContext }} = route
  // const detailContextConfig = cfgStore.detailContextConfig as DetailContextConfig
  // return detailContextConfig[detailContext as string]
})


  onMounted(() => {

    if (props.isEdit && !props.pkey) {
      console.error('编辑customer信息时必须提供pkey。', props.isEdit, props.pkey)
    }

    // if (!props.isEdit && !props.wizard.bpaMetaPkey) {
    //   console.error('创建customer时必须提供模版。')
    // }
    currentInstance.value = getCurrentInstance()
  });

  // const handleCreateCustomer =async () => {
  //   // 设置open为true则显示对话框
  //   createCustomerWizardModal.value.visible = true
  // }
  const handleButtonClick =async (command: string) => {
    console.log("🚀 ~ handleButtonClick ~ command:", command)
    // 设置open为true则显示对话框
    // createCustomerWizardModal.value.visible = true
    switch (command) {
      case 'new':
        createCustomerWizardModal.value.visible = true
        break;
    
      default:
        break;
    }
  }


// props.isEdit
console.log("🚀 ~ props.isEdit:", props.isEdit)
console.log("🚀 ~ props.pkey:", props.pkey)

</script>