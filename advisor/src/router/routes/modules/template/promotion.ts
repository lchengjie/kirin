import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';

const mainModuleName = 'mtn';
const subModuleName = 'template';
const moduleName = 'promotion';

const basePath = `/${mainModuleName}/${subModuleName}/${moduleName}`
const baseName = `${mainModuleName}-${subModuleName}-${moduleName}`
// /mtn/template/promotion
const routes: Array<RouteRecordRaw> = [
  {
    path: basePath,
    name: baseName,
    meta: {
      title: t('routes.mtn.promotiontemplate'),
      icon: 'ant-design:desktop-outlined',
    },
    // const defaultLocal = await import(`./lang/${locale}.ts`);

    // component: () => import(`@/views/template/promotion/index.vue`),
    component: () => import(`@/views/${subModuleName}/${moduleName}/index.vue`),
    // component: () => import(indexFile),
  },
  {
    path: `${basePath}/create`,
    name: `${baseName}-create`,
    meta: {
      title: t('routes.mtn.create'),
      icon: 'ant-design:desktop-outlined',
      keepAlive: false,
      hideInMenu: true,
    },
    component: () => import(`@/views/${subModuleName}/${moduleName}/create.vue`),
  },
  {
    path: `${basePath}/edit/:pkey`,
    name: `${baseName}-edit`,
    meta: {
      title: t('routes.mtn.edit'),
      icon: 'ant-design:desktop-outlined',
      keepAlive: false,
      hideInMenu: true,
    },
    component: () => import(`@/views/${subModuleName}/${moduleName}/edit.vue`),
  },
];

export default routes;
