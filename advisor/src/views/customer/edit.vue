<template>
  <Detail is-edit :pkey="pkey"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Detail from './components/detail.vue'

const pkey = ref('');
const __f_ = ref('');

const route = useRoute()

// 假设我们要获取名为 'pkey' 的路由参数
// 定义在path的params必须要传入，否则会转入Path Not Found的404页面
pkey.value = route.params.pkey as string;
__f_.value = route.query.__f_ as string ?? '/'

// 在组件挂载后打印路由参数
onMounted(() => {
  // // 假设我们要获取名为 'pkey' 的路由参数
  // // 定义在path的params必须要传入，否则会转入Path Not Found的404页面
  // pkey.value = route.params.pkey as string;
  // __f_.value = route.query.__f_ as string ?? '/'
  // console.log(' mounted in edit page')

});

</script>