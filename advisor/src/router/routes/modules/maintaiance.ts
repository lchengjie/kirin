import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';
import { roleSettings } from '@/router/menuRoleSettings'

// 引入模版
import promotion from './template/promotion';
import payment from './template/payment';
import allocationmap from './template/allocationmap';
import checkbook from './template/checkbook';
import condition from './template/condition';
import customer from './template/customer';
import fund from './template/fund';
import pap from './template/pap';
import prdassortment from './template/prdassortment';
import pex from './template/pex';
import product from './template/product';
import stc from './template/stc';
import transaction from './template/transaction';
import user from './template/user';

// 引入sys
import client from './enterprise/client';
import salesorg from './enterprise/salesorg';
import division from './enterprise/division';
import salesarea from './enterprise/salesarea';

// 引入util
import calendar from './util/calendar';
import currency from './util/currency';
import number from './util/number';
import period from './util/period';
import regional from './util/regional';
import settings from './util/settings';
import toggle from './util/toggle';

// 引入workflow
import workflow from './workflow/workflow';

// 引入cfg
import cfg from './cfg/cfg';

// 引入upload
import upload from './upload/upload';

// 引入 sys
import cron from './sys/cron';
import sysmodule from './sys/sysmodule';
import controlscript from './sys/controlscript';

import appl from './appl/appl';
import initial from './initial/initial';


const mainModuleName = 'mtn';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/mtn',
    name: `${mainModuleName}`,
    meta: {
      title: t('routes.mtn.mtnmanagement'),
      icon: 'ant-design:desktop-outlined',
      roles: [
        ...roleSettings.MaintenanceRoles,
        ...roleSettings.EnterpriseRoles,
        ...roleSettings.SystemRoles,
        ...roleSettings.ApplicationRoles,
        ...roleSettings.InitialRoles
      ],
    },
    children: [
      {
        path: 'enterprise',
        name: `${mainModuleName}-enterprise`,
        meta: {
          title: t('routes.mtn.enterprisemanagement'),
          icon: 'ant-design:desktop-outlined',
          roles: [...roleSettings.EnterpriseRoles],
        },
        children: [
          ...client,
          ...salesorg,
          ...division,
          ...salesarea,
        ]
      },
      {
        path: 'template',
        name: `${mainModuleName}-template`,
        meta: {
          title: t('routes.mtn.templatemanagement'),
          icon: 'ant-design:desktop-outlined',
          roles: [...roleSettings.MaintenanceRoles],
        },
        children: [
          ...promotion,
          ...payment,
          ...allocationmap,
          ...checkbook,
          ...condition,
          ...customer,
          ...fund,
          ...pap,
          ...prdassortment,
          ...pex,
          ...product,
          ...stc,
          ...transaction,
          ...user,
        ]
      },
      {
        path: 'util',
        name: `${mainModuleName}-util`,
        meta: {
          title: t('routes.mtn.utilmanagement'),
          icon: 'ant-design:desktop-outlined',
          roles: [...roleSettings.MaintenanceRoles],
        },
        children: [
          ...calendar,
          ...currency,
          ...number,
          ...period,
          ...regional,
          ...settings,
          ...toggle,
        ]
      },
      {
        path: 'workflow',
        name: `${mainModuleName}-workflow`,
        meta: {
          title: t('routes.mtn.workflowmanagement'),
          icon: 'ant-design:desktop-outlined',
          roles: [...roleSettings.MaintenanceRoles],
        },
        children: [
          ...workflow,
        ]
      },
      {
        path: 'cfg',
        name: `${mainModuleName}-cfg`,
        meta: {
          title: t('routes.mtn.cfgmanagement'),
          icon: 'ant-design:desktop-outlined',
          roles: [...roleSettings.MaintenanceRoles],
        },
        children: [
          ...cfg,
        ]
      },
      {
        path: 'upload',
        name: `${mainModuleName}-upload`,
        meta: {
          title: t('routes.mtn.uploadmanagement'),
          icon: 'ant-design:desktop-outlined',
          roles: [...roleSettings.UploaddataRoles],
        },
        children: [
          ...upload,
        ]
      },
      {
        path: 'sys',
        name: `${mainModuleName}-sys`,
        meta: {
          title: t('routes.mtn.systemmanagement'),
          icon: 'ant-design:desktop-outlined',
          roles: [...roleSettings.SystemRoles],
        },
        children: [
          ...cron,
          ...sysmodule,
          ...controlscript,
        ]
      },
      {
        path: 'appl',
        name: `${mainModuleName}-appl`,
        meta: {
          title: t('routes.mtn.applmanagement'),
          icon: 'ant-design:desktop-outlined',
          roles: [...roleSettings.ApplicationRoles],
        },
        children: [
          ...appl,
        ]
      },
      {
        path: 'initial',
        name: `${mainModuleName}-initial`,
        meta: {
          title: t('routes.mtn.initialmanagement'),
          icon: 'ant-design:desktop-outlined',
          roles: [...roleSettings.InitialRoles],
        },
        children: [
          ...initial,
        ]
      },
    ],
  },
];

export default routes;
