// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

// params: API.NetDiskManageListParams,

/** 获取当前用户有权限的Promotion的Orgunit Anchor列表 GET /api/orgunit/cbkOrgList */
export async function getOrgunitAnchorList(params: any, options?: RequestOptions) {
  return request('/api/orgunit/cbkOrgList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
