import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';

const moduleName = 'dashboard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: moduleName,
    redirect: '/dashboard/home',
    meta: {
      title: t('routes.dashboard.dashboard'),
      icon: 'ant-design:dashboard-outlined',
    },
    children: [
      {
        path: 'home',
        name: `${moduleName}-home`,
        meta: {
          title: t('routes.dashboard.workbench'),
          icon: 'ant-design:home-filled',
        },
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path: 'admin',
        name: `${moduleName}-admin`,
        meta: {
          title: t('routes.dashboard.workbench'),
          icon: 'ant-design:home-filled',
        },
        component: () => import('@/views/dashboard/admin/index.vue'),
      },
    ],
  },
];

export default routes;
