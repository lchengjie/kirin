import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';

const mainModuleName = 'mtn';
const subModuleName = 'util';
const moduleName = 'regional';

const basePath = `/${mainModuleName}/${subModuleName}/${moduleName}`
const baseName = `${mainModuleName}-${subModuleName}-${moduleName}`

// /mtn/util/regional
const routes: Array<RouteRecordRaw> = [
  {
    path: basePath,
    name: baseName,
    meta: {
      title: t('routes.mtn.regional'),
      icon: 'ant-design:desktop-outlined',
    },
    component: () => import(`@/views/${subModuleName}/${moduleName}/index.vue`),
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
