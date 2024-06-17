<template>
  <div>Detail Customer</div>
  <div>Is Edit: {{ props.isEdit }}</div>
  <div>Pkey: {{ props.pkey }}</div>
  <div>Wizard: {{ props.wizard }}</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = withDefaults(defineProps<{ isEdit: boolean, pkey?: string,
  wizard?: {
    bpaMetaPkey: string,
    active: boolean,
    closed: boolean,
    bpaType: string
  }
  }>(), {
    isEdit: false,
    pkey: '',
    wizard: () => ({ bpaMetaPkey: '', active: true, closed: false, bpaType: 'C' })
  });
  console.log('111111,111', props.isEdit)
  console.log('111111,222', props.pkey)
  console.log('111111,333', props.wizard.bpaMetaPkey)

  onMounted(() => {

    if (props.isEdit && !props.pkey) {
      console.error('编辑customer信息时必须提供pkey。', props.isEdit, props.pkey)
    }
    if (!props.isEdit && !props.wizard.bpaMetaPkey) {
      console.error('创建customer时必须提供模版。')
    }
  });



// props.isEdit
console.log("🚀 ~ props.isEdit:", props.isEdit)
console.log("🚀 ~ props.wizard:", props.wizard)
console.log("🚀 ~ props.pkey:", props.pkey)

</script>