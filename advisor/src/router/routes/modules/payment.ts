import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';
import { roleSettings } from '@/router/menuRoleSettings'

const moduleName = 'payment';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/payment',
    name: moduleName,
    redirect: { name: `${moduleName}-all` },
    meta: {
      title: t('routes.payment.paymentmanagement'),
      icon: 'ant-design:desktop-outlined',
      roles: [...roleSettings.PaymentRoles],
    },
    children: [
      {
        path: 'all',
        name: `${moduleName}-all`,
        meta: {
          title: t('routes.payment.payment'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          detailContext: 'paymentDetailContext',
          profile: 'PaymentIdentificationProfile'
        },
        component: () => import('@/views/payment/index.vue'),
      },
      {
        path: 'forapproval',
        name: `${moduleName}-forapproval`,
        meta: {
          title: t('routes.payment.forapproval'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          detailContext: 'paymentDetailContext',
          profile: 'PaymentIdentificationProfile'
        },
        component: () => import('@/views/payment/forapproval.vue'),
      },
      {
        path: 'create',
        name: `${moduleName}-create`,
        meta: {
          title: t('routes.payment.create'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'paymentDetailContext',
        },
        component: () => import('@/views/payment/create.vue'),
      },
      {
        path: 'edit',
        name: `${moduleName}-edit`,
        meta: {
          title: t('routes.payment.edit'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'paymentDetailContext',
        },
        component: () => import('@/views/payment/edit.vue'),
      },
    ],
  },
];

export default routes;
