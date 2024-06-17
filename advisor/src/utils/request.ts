import axios, { CanceledError } from 'axios';
import { isString } from 'lodash-es';
import qs from 'qs';
import { message as $message, Modal } from 'ant-design-vue';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResultEnum } from '@/enums/httpEnum';
import { sha1 } from 'js-sha1';

import { useUserStore } from '@/stores/modules/user';
// import { useSSEStore } from '@/store/modules/sse';

export interface RequestOptions extends AxiosRequestConfig {
  /** 是否直接将数据从响应中提取出，例如直接返回 res.data，而忽略 res.code 等信息 */
  isReturnResult?: boolean;
  /** 请求成功是提示信息 */
  successMsg?: string;
  /** 请求失败是提示信息 */
  errorMsg?: string;
  /** 成功时，是否显示后端返回的成功信息 */
  showSuccessMsg?: boolean;
  /** 失败时，是否显示后端返回的失败信息 */
  showErrorMsg?: boolean;
  requestType?: 'json' | 'form';
}

const UNKNOWN_ERROR = '未知错误，请重试';

/** 真实请求的路径前缀 */
export const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
console.log("🚀 ~ baseApiUrl:", baseApiUrl)
const WX_SIGN_SALT_KEY = 'qow9&562pdlw21984016&^18'

/** mock请求路径前缀 */
// const baseMockUrl = import.meta.env.VITE_MOCK_API;

const controller = new AbortController();
const service = axios.create({
  baseURL: baseApiUrl,
  timeout: 10000,
  signal: controller.signal,
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  },
});

service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const token = userStore.token;
    if (token && config.headers) {
      // 请求头token信息，请根据实际情况进行修改
      config.headers['Authorization'] = `Bearer ${token}`;
      config.headers['Language'] = 'en' //store.getters.language


      const { __superadmin } = { __superadmin: false } // store.getters
      // const { client, salesorg, division, __superadmin } = store.getters

      // config.headers['W-Auth'] = `${client}|${salesorg}|${division}`
      // 对client，salsorg，division，以及分页和排序参数不传入
      if (config.params) {
        const { page, pageSize, sort } = config.params
        if (page && pageSize) {
          config.headers['W-Page'] = `${page}|${pageSize}`
        }
        if (sort) {
          config.headers['W-Sort'] = `${sort}`
        }
        if (!__superadmin) {
          delete config.params.client
          delete config.params.salesorg
          delete config.params.division
          delete config.params.language
          delete config.params.page
          delete config.params.pageSize
          delete config.params.sort
        }
      }
      config.headers['Response-Type'] = config?.responseType || ''
    }


    if (['post', 'patch'].includes(config.method || '')) {
      // patch, post
      // config.method
      // config.url, config.data
      // config.headers['Content-Type']
      // multipart/form-data
      console.log(config, 'config')
      if (config.headers['Content-Type'] !== 'multipart/form-data' && config?.headers['Response-Type'] !== 'blob') {
        if (config.url) {
          const apiUrl = config.url.replace(config.baseURL || '', '').toLowerCase()
          const payload = JSON.stringify(config.data).toLowerCase()
          const saltKey = WX_SIGN_SALT_KEY
          // /api/customer/e0e65790-5c05-4ccc-be91-fa151f9b23fb
          const signKey = sha1([apiUrl, payload, saltKey].sort().join(''))
          console.log("🚀 ~ signKey:", signKey)
          config.headers['W-Sign'] = signKey
        }
      }
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse<BaseResponse>) => {
    const res = response.data;

    // if the custom code is not 200, it is judged as an error.
    if (res.code !== ResultEnum.SUCCESS) {
      $message.error(res.message || UNKNOWN_ERROR);
      // Illegal token
      if ([1101, 1105].includes(res.code)) {
        // to re-login
        Modal.confirm({
          title: '警告',
          content: res.message || '账号异常，您可以取消停留在该页上，或重新登录',
          okText: '重新登录',
          cancelText: '取消',
          onOk: () => {
            localStorage.clear();
            window.location.reload();
          },
        });
      }

      // throw other
      const error = new Error(res.message || UNKNOWN_ERROR) as Error & { code: any };
      error.code = res.code;
      return Promise.reject(error);
    } else {
      // const sseStore = useSSEStore();
      // sseStore.setServerConnectStatus(true);
      return response;
    }
  },
  (error) => {
    if (!(error instanceof CanceledError)) {
      // 处理 422 或者 500 的错误异常提示
      const errMsg = error?.response?.data?.message ?? UNKNOWN_ERROR;
      $message.error({ content: errMsg, key: errMsg });
      error.message = errMsg;
    }
    return Promise.reject(error);
  },
);

type BaseResponse<T = any> = Omit<API.ResOp, 'data'> & {
  data: T;
};

export function request<T = any>(
  url: string,
  config: { isReturnResult: false } & RequestOptions,
): Promise<BaseResponse<T>>;
export function request<T = any>(
  url: string,
  config: RequestOptions,
): Promise<BaseResponse<T>['data']>;
export function request<T = any>(
  config: { isReturnResult: false } & RequestOptions,
): Promise<BaseResponse<T>>;
export function request<T = any>(config: RequestOptions): Promise<BaseResponse<T>['data']>;
/**
 *
 * @param url - request url
 * @param config - AxiosRequestConfig
 */
export async function request(_url: string | RequestOptions, _config: RequestOptions = {}) {
  const url = isString(_url) ? _url : _url.url;
  const config = isString(_url) ? _config : _url;
  try {
    // 兼容 from data 文件上传的情况
    const { requestType, isReturnResult = true, ...rest } = config;

    const response = (await service.request({
      url,
      ...rest,
      headers: {
        ...rest.headers,
        ...(requestType === 'form' ? { 'Content-Type': 'multipart/form-data' } : {}),
      },
    })) as AxiosResponse<BaseResponse>;
    const { data } = response;
    const { code, message } = data || {};

    const hasSuccess = data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;

    if (hasSuccess) {
      const { successMsg, showSuccessMsg } = config;
      if (successMsg) {
        $message.success(successMsg);
      } else if (showSuccessMsg && message) {
        $message.success(message);
      }
    }

    // 页面代码需要获取 code，data，message 等信息时，需要将 isReturnResult 设置为 false
    if (!isReturnResult) {
      return data;
    } else {
      return data.data;
    }
  } catch (error: any) {
    return Promise.reject(error);
  }
}
