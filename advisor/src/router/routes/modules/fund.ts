import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';
import { roleSettings } from '@/router/menuRoleSettings'

const moduleName = 'fund';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/fnd',
    name: moduleName,
    redirect: { name: `${moduleName}-all` },
    meta: {
      title: t('routes.fund.fundmanagement'),
      icon: 'ant-design:desktop-outlined',
      roles: [...roleSettings.FundRoles],
    },
    children: [
      {
        path: 'all',
        name: `${moduleName}-all`,
        meta: {
          title: t('routes.fund.fund'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          detailContext: 'fundDetailContext',
          profile: 'FundIdentificationProfile'
        },
        component: () => import('@/views/fund/index.vue'),
      },
      {
        path: 'forapproval',
        name: `${moduleName}-forapproval`,
        meta: {
          title: t('routes.fund.forapproval'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          detailContext: 'fundDetailContext',
          profile: 'FundIdentificationProfile'
        },
        component: () => import('@/views/fund/forapproval.vue'),
      },
      {
        path: 'create',
        name: `${moduleName}-create`,
        meta: {
          title: t('routes.fund.create'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'fundDetailContext'
        },
        component: () => import('@/views/fund/create.vue'),
      },
      {
        path: 'edit',
        name: `${moduleName}-edit`,
        meta: {
          title: t('routes.fund.edit'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'fundDetailContext'
        },
        component: () => import('@/views/fund/edit.vue'),
      },
    ],
  },
];

export default routes;
