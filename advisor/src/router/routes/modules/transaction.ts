import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';
import { roleSettings } from '@/router/menuRoleSettings'

const moduleName = 'transaction';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/ta',
    name: moduleName,
    redirect: { name: `${moduleName}-all` },
    meta: {
      title: t('routes.transaction.transactionmanagement'),
      icon: 'ant-design:desktop-outlined',
      roles: [...roleSettings.TransactionRoles],
    },
    children: [
      {
        path: 'all',
        name: `${moduleName}-all`,
        meta: {
          title: t('routes.transaction.transaction'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          detailContext: 'transactionDetailContext',
          profile: 'TransactionIdentificationProfile'
        },
        component: () => import('@/views/transaction/index.vue'),
      },
      {
        path: 'forapproval',
        name: `${moduleName}-forapproval`,
        meta: {
          title: t('routes.transaction.forapproval'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          detailContext: 'transactionDetailContext',
          profile: 'TransactionIdentificationProfile'
        },
        component: () => import('@/views/transaction/forapproval.vue'),
      },
      {
        path: 'create',
        name: `${moduleName}-create`,
        meta: {
          title: t('routes.transaction.create'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'transactionDetailContext',
        },
        component: () => import('@/views/transaction/create.vue'),
      },
      {
        path: 'edit',
        name: `${moduleName}-edit`,
        meta: {
          title: t('routes.transaction.edit'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'transactionDetailContext',
        },
        component: () => import('@/views/transaction/edit.vue'),
      },
    ],
  },
];

export default routes;
