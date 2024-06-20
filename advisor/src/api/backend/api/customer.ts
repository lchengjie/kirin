// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

// params: API.NetDiskManageListParams,

/** 获取当前用户有权限的Promotion的Customer Anchor列表 GET /api/customer/anchorOptions */
export async function getCustomerList(params: any, options?: RequestOptions) {
  return request<{ count: number, rows: API.CustomerInfo[]}>('/api/customer', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建客户 POST /api/customer */
export async function createCustomer(body: API.CustomerCreateDto, options?: RequestOptions) {
  return request<any>('/api/customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户有权限的Promotion的Customer Anchor列表 GET /api/customer/anchorOptions */
export async function getCustomerAnchorList(params: any, options?: RequestOptions) {
  return request('/api/customer/anchorOptions', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取的Customer Info GET /api/customer/:pkey */
export async function getCustomer(pkey: string, params: any, options?: RequestOptions) {
  return request(`/api/customer/${pkey}`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
