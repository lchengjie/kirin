import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';
import { roleSettings } from '@/router/menuRoleSettings'

const moduleName = 'checkbook';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/cbk',
    name: moduleName,
    redirect: { name: `${moduleName}-all` },
    meta: {
      title: t('routes.checkbook.checkbookmanagement'),
      icon: 'ant-design:desktop-outlined',
      roles: [...roleSettings.CheckbookRoles],
    },
    children: [
      {
        path: 'all',
        name: `${moduleName}-all`,
        meta: {
          title: t('routes.checkbook.checkbook'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          detailContext: 'checkbookDetailContext',
          profile: 'CheckbookIdentificationProfile'
        },
        component: () => import('@/views/checkbook/index.vue'),
      },
      {
        path: 'create',
        name: `${moduleName}-create`,
        meta: {
          title: t('routes.checkbook.create'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'checkbookDetailContext'
        },
        component: () => import('@/views/checkbook/create.vue'),
      },
      {
        path: 'edit',
        name: `${moduleName}-edit`,
        meta: {
          title: t('routes.checkbook.edit'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'checkbookDetailContext'
        },
        component: () => import('@/views/checkbook/edit.vue'),
      },
    ],
  },
];

export default routes;
