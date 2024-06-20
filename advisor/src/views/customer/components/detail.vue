<template>
  <div class="overflow-auto" style="height: 800px;">
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

import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCfgStore } from '@/stores/modules/cfg';
import type { DetailContextConfig } from 'CFG';
import Api from '@/api/';

import JsonFormat from '@/components/basic/JsonFormat/index.vue';
import { reactive } from 'vue';
import parseAccessRights from '@/utils/parse-access-rights'

const { getCustomer } = Api.customer
const { getCustomerMeta } = Api.bpameta

const cfgStore = useCfgStore();
const route = useRoute();

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
    self: this,
    main: customer
  }
  const right = parseAccessRights(currentAccessGroupConfig, mappingObj)
  // 保持用到base的地方不报错，cfgdata调整后再处理改行
  console.log("🚀 ~ accessGroupConfig ~ right:", right)
  right.base = { editable: false, visible: true }
  return right
})
console.log("🚀 ~ accessGroupConfig ~ accessGroupConfig:", accessGroupConfig.value)
// cfgStore.accessGroupConfig[`${currentDetailContextConfig.value.module}`]
// cfgStore.accessGroupConfig[`${currentDetailContextConfig.value.module}.overview`]

  onMounted(() => {

    if (props.isEdit && !props.pkey) {
      console.error('编辑customer信息时必须提供pkey。', props.isEdit, props.pkey)
    }

    // if (!props.isEdit && !props.wizard.bpaMetaPkey) {
    //   console.error('创建customer时必须提供模版。')
    // }
  });



// props.isEdit
console.log("🚀 ~ props.isEdit:", props.isEdit)
console.log("🚀 ~ props.pkey:", props.pkey)

</script>