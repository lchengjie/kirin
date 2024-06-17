// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

// params: API.NetDiskManageListParams,

/** 获取菜单列表 GET /api/cfg */
export async function getPromotionList(params: any, options?: RequestOptions) {
  return request('/api/promotion', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 获取当前用户有权限的promotion模版列表
 * @param params 查询数据参数
 * @param options 
 * @returns 返回promotion模版列表
 */
export async function getMyPromotionMetaList(params: any, options?: RequestOptions) {
  return request('/api/prmme/mytemplate', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
