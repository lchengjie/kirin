<template>
  <Layout class="layout">
    <Layout.Sider
      v-model:collapsed="collapsed"
      :width="asiderWidth"
      :trigger="null"
      collapsible
      :theme="getTheme"
      class="layout-sider"
    >
      <Logo :collapsed="collapsed" />
      <AsideMenu :collapsed="collapsed" :theme="getTheme" />
    </Layout.Sider>
    <Layout>
      <PageHeader v-model:collapsed="collapsed" :theme="getTheme">
        <template v-if="layoutSetting.layout === 'topmenu'" #left>
          <Logo :collapsed="collapsed" />
        </template>
        <template v-if="layoutSetting.layout === 'topmenu'" #menu>
          <AsideMenu :collapsed="collapsed" :theme="getTheme" />
        </template>
      </PageHeader>
      <Layout.Content class="layout-content overflow-hidden">
        <TabsView />
        <!-- <Suspense>
          <router-view />
        </Suspense> -->
      </Layout.Content>
      <PageFooter />
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { Layout } from 'ant-design-vue';
  import Logo from './logo/index.vue';
  import AsideMenu from './menu/menu.vue';
  import { TabsView } from './tabs';

  import PageHeader from './header/index.vue';
  import PageFooter from './footer';

  import { useLayoutSettingStore } from '@/stores/modules/layoutSetting';

  const layoutSettingStore = useLayoutSettingStore();
  const { layoutSetting } = storeToRefs(layoutSettingStore);
  const collapsed = ref<boolean>(false);
  // 自定义侧边栏菜单收缩和展开时的宽度
  const asiderWidth = computed(() => (collapsed.value ? 80 : 220));
  const getTheme = computed(() => (layoutSetting.value.navTheme !== 'light' ? 'light' : 'dark'));
</script>
