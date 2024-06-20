import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';
import { roleSettings } from '@/router/menuRoleSettings'

const moduleName = 'customer';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/bpa',
    name: moduleName,
    redirect: { name: `${moduleName}-all` },
    meta: {
      title: t('routes.customer.customermanagement'),
      icon: 'ant-design:desktop-outlined',
      roles: [...roleSettings.CheckbookRoles],
    },
    children: [
      {
        path: 'all',
        name: `${moduleName}-all`,
        meta: {
          title: t('routes.customer.customer'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          detailContext: 'customerDetailContext',
          profile: 'CustomerIdentificationProfile'
        },
        component: () => import('@/views/customer/index.vue'),
      },
      {
        path: 'create',
        name: `${moduleName}-create`,
        meta: {
          title: t('routes.customer.create'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'customerDetailContext'
        },
        component: () => import('@/views/customer/create.vue'),
      },
      {
        path: 'edit/:pkey',
        name: `${moduleName}-edit`,
        meta: {
          title: t('routes.customer.edit'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'customerDetailContext'
        },
        component: () => import('@/views/customer/edit.vue'),
      },
    ],
  },
];

export default routes;
