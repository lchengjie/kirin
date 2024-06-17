import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';
import { roleSettings } from '@/router/menuRoleSettings'

const moduleName = 'promotion';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/prm',
    name: moduleName,
    redirect: { name: `${moduleName}-prm` },
    meta: {
      title: t('routes.promotion.promotionmanagement'),
      icon: 'ant-design:desktop-outlined',
      // roles: [...roleSettings.PromotionRoles, ...roleSettings.PromotionApprovalRoles, ...roleSettings.EventRoles, ...roleSettings.TacticRoles, ...roleSettings.ProgramRoles, ...roleSettings.LTARoles],
    },
    children: [
      {
        path: 'prm',
        name: `${moduleName}-prm`,
        meta: {
          title: t('routes.promotion.promotion'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          // roles: [...roleSettings.PromotionRoles],
          detailContext: 'promotionDetailContext',
          profile: 'PromotionIdentificationProfile'
        },
        component: () => import('@/views/promotion/promotion.vue'),
      },
      {
        path: 'forapproval',
        name: `${moduleName}-forapproval`,
        meta: {
          title: t('routes.promotion.forapproval'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          // roles: [...roleSettings.PromotionApprovalRoles],
          detailContext: 'promotionDetailContext',
          profile: 'PromotionIdentificationProfile'
        },
        component: () => import('@/views/promotion/forapproval.vue'),
      },
      {
        path: 'event',
        name: `${moduleName}-event`,
        meta: {
          title: t('routes.promotion.event'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          roles: [...roleSettings.EventRoles],
          detailContext: 'eventDetailContext',
          profile: 'EventIdentificationProfile'
        },
        component: () => import('@/views/promotion/event.vue'),
      },
      {
        path: 'lta',
        name: `${moduleName}-lta`,
        meta: {
          title: t('routes.promotion.lta'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          roles: [...roleSettings.LTARoles],
          detailContext: 'ltaDetailContext',
          profile: 'LtaIdentificationProfile'
        },
        component: () => import('@/views/promotion/lta.vue'),
      },
      {
        path: 'prg',
        name: `${moduleName}-prg`,
        meta: {
          title: t('routes.promotion.program'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          roles: [...roleSettings.ProgramRoles],
          detailContext: 'programDetailContext',
          profile: 'ProgramIdentificationProfile'
        },
        component: () => import('@/views/promotion/program.vue'),
      },
      {
        path: 'create',
        name: `${moduleName}-create`,
        meta: {
          title: t('routes.promotion.create'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'promotionDetailContext'
        },
        component: () => import('@/views/promotion/create.vue'),
      },
      {
        path: 'edit',
        name: `${moduleName}-edit`,
        meta: {
          title: t('routes.promotion.edit'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'promotionDetailContext'
        },
        component: () => import('@/views/promotion/edit.vue'),
      },
      {
        path: 'event/create',
        name: `${moduleName}-event-create`,
        meta: {
          title: t('routes.promotion.create'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'eventDetailContext'
        },
        component: () => import('@/views/promotion/event/create.vue'),
      },
      {
        path: 'event/edit',
        name: `${moduleName}-event-edit`,
        meta: {
          title: t('routes.promotion.edit'),
          icon: 'ant-design:desktop-outlined',
          keepAlive: false,
          hideInMenu: true,
          detailContext: 'eventDetailContext'
        },
        component: () => import('@/views/promotion/event/edit.vue'),
      },
    ],
  },
];

export default routes;
