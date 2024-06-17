<template>
  <div>Promotion Overview Page</div>
  <div>
    <div v-for="item in proo.grids" :key="item.name" class="mb-2 border-red">
      <span class="mx-2 b-red b-solid b-3">{{ item.name }}</span>
      <span class="mx-2 b-dashed b-1 b-green">{{ item.type }}</span>
      
      <div v-for="column in item.columns" :key="column.key" class="pl-2 border-1">
        <span class="m-2">{{ column.key }}</span>
        <span class="m-2">{{ column.label }}</span>
      </div>
    </div>
    <!-- {{ proo.grids }} -->
  </div>
</template>

<script setup lang="ts">
  // 当前路由的路由信息
  // detailContext
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const { meta: { detailContext, profile }} = router.currentRoute.value
  console.log("🚀 ~ detailContext, profile:", detailContext, profile)
  
  // 引用 cfg
  import { useCfgStore } from '@/stores/modules/cfg';

  // 初始化cfg store
  const bbb = useCfgStore()
  // 获取所有config
  const uuuuu = bbb.globalConfig
  // 获取Grid Config，包括overview的和表格的
  const proo = bbb.getGridConfig('promotion')
  // 获取界面上用于显示的列的配置信息
  const mycolumn = bbb.getMyColumn('promotion', 'promotion', 'overview')
  // 获取rules config，表单验证规则
  const rules = bbb.getRulesConfig('promotion')
  // 获取detail页面的信息，即tab上的foldingcard配置
  const detailConfig = bbb.getPageDetailConfig('promotion', 'defaultDetail')
  // 获取Wizard信息，如创建promotion的wizard表单信息
  const wizardConfig = bbb.getPageWizardConfig('promotion', 'defaultWizard')
  // 获取overview的filter配置信息
  const overviewGridfilterConfig = bbb.getOverviewGridFilterConfig('promotion', 'PromotionOverview')
  
  // bbb.accessGroupConfig
  // bbb.accessGroupConfig['promotion']
  // bbb.detailContextConfig
  // bbb.profileConfig
  console.log("🚀 ~ bbb.profileConfig:", bbb.profileConfig)
  console.log("🚀 ~ bbb.detailContextConfig:", bbb.detailContextConfig)
  console.log("🚀 ~ bbb.accessGroupConfig:", Object.keys(bbb.accessGroupConfig))
  
  console.log("🚀 ~ mycolumn:", mycolumn)
  console.log("🚀 ~ overviewGridfilterConfig:", overviewGridfilterConfig)

  console.log("🚀 ~ wizardConfig:", wizardConfig)
  console.log("🚀 ~ detailConfig:", detailConfig)
  console.log("🚀 ~ rules:", rules)
  console.log("🚀 ~ uuuuu111:", uuuuu, proo)

</script>