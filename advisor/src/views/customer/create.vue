<template>
  <Detail :is-edit="false" :wizard="wizard"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Detail from './components/detail.vue'

import { GENERAL_ERROR_PAGE_NAME } from '@/router/constant';

const wizard = ref({})

const route = useRoute()
const router = useRouter()

const bpaMetaPkey = route.query.bpaMetaPkey as string;
console.log("🚀 ~ onMounted ~ bpaMetaPkey route.query:", route)
if (!bpaMetaPkey) {
  // 转404
  router.push({ name: GENERAL_ERROR_PAGE_NAME })
}
wizard.value = {
  bpaMetaPkey,
  active: true,
  closed: false,
  bpaType: 'C'
}

// 在组件挂载后打印路由参数
onMounted(() => {
  // 假设我们要获取名为 'id' 的路由参数
  // const bpaMetaPkey = route.query.bpaMetaPkey as string;
  // console.log("🚀 ~ onMounted ~ bpaMetaPkey route.query:", route)
  // wizard.value = {
  //   bpaMetaPkey,
  //   active: true,
  //   closed: false,
  //   bpaType: 'C'
  // }
});

</script>