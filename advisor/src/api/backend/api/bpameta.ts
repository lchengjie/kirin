// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

// params: API.NetDiskManageListParams,

/** 获取当前用户有权限的Promotion的Customer Anchor列表 GET /api/bpameta */
export async function getCustomerMetaList(params: any, options?: RequestOptions) {
  return request('/api/bpame', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}



/** 获取的Customer Meta Info GET /api/bpame/:pkey */
export async function getCustomerMeta(pkey: string, params: any, options?: RequestOptions) {
  return request(`/api/bpame/${pkey}`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
