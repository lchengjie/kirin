import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLockscreenStore } from './lockscreen';
// import { useSSEStore } from './sse';
import type { RouteRecordRaw } from 'vue-router';
import { store } from '@/stores';
import Api from '@/api/index';
import { resetRouter } from '@/router';
// import { generateDynamicRoutes } from '@/router/helper/routeHelper';
import { generateDynamicRoutesv2 } from '@/router/helper/routeHelper';

import { useCfgStore } from '@/stores/modules/cfg';
import { MASK } from './user/constant';

export const useUserStore = defineStore(
  'user',
  () => {
    // const sseStore = useSSEStore();
    const lockscreenStore = useLockscreenStore();
    const token = ref<string>();
    const perms = ref<string[]>([]);
    const menus = ref<RouteRecordRaw[]>([]);
    const userInfo = ref<Partial<API.UserEntity>>({});

    const sortMenus = (menus: RouteRecordRaw[] = []) => {
      return menus
        .filter((n) => {
          const flag = !n.meta?.hideInMenu;
          if (flag && n.children?.length) {
            n.children = sortMenus(n.children);
          }
          return flag;
        })
        .sort((a, b) => ~~Number(a.meta?.orderNo) - ~~Number(b.meta?.orderNo));
    };

    /** 清空登录态(token、userInfo...) */
    const clearLoginStatus = () => {
      token.value = '';
      perms.value = [];
      menus.value = [];
      userInfo.value = {};
      resetRouter();
      setTimeout(() => {
        localStorage.clear();
      });
    };
    /** 登录成功保存token */
    const setToken = (_token: string) => {
      token.value = _token;
    };
    /** 登录 */
    const login = async (params: API.LoginDto) => {
      try {
        const data = await Api.auth.authLogin(params);
        setToken(data.token);
        // Load User info, roles, permission etc.
        await afterLogin(params.username);
        // Load CFG
        const { client, salesorg, division, language } = params
        await loadCfg({ client, salesorg, division, language });

        lockscreenStore.setLock(false);
        lockscreenStore.saveLoginPwd(params.password);
      } catch (error) {
        return Promise.reject(error);
      }
    };
    
    /** 登录成功之后, 获取 CFG 数据 */
    const loadCfg = async (params: any) => {
      try {
        // 初始化cfg
        const cfgStore = useCfgStore()
        await cfgStore.initConfig(params)
      } catch (error) {
        return Promise.reject(error);
      }
    };

    /** 登录成功之后, 获取用户信息以及生成权限路由 */
    const afterLogin = async (username?: string) => {
      try {
        const { userAccountProfile } = Api.account;
        // const wsStore = useWsStore();
        const userInfoData = await userAccountProfile({ username });

        userInfo.value = userInfoData;
        console.log("🚀 ~ afterLogin ~ userInfoData:", userInfoData)
        // 上面接口已经完成了获取权限和菜单的相关属性，即可认为登录完成
        await fetchPermsAndMenus();
        // sseStore.initServerMsgListener();
      } catch (error) {
        return Promise.reject(error);
        // return logout();
      }
    };
    
    /** 获取权限及菜单 */
    const fetchPermsAndMenus = async () => {
      // 根据当前用户导入role获取路由菜单
      // userInfo.value.roles
      // 获取所有async的路由

      const result = generateDynamicRoutesv2(userInfo.value.roles || []);
      console.log("🚀 ~ fetchPermsAndMenus ~ result:", result)

      // const { accountPermissions, accountMenu } = Api.account;
      // // const wsStore = useWsStore();
      // const [menusData, permsData] = await Promise.all([accountMenu(), accountPermissions()]);
      // perms.value = permsData;
      // // TODO
      // const result: RouteRecordRaw[] = []
      // // const result = generateDynamicRoutes(menusData as unknown as RouteRecordRaw[]);
      menus.value = sortMenus(result);
    };
    /** 登出 */
    const logout = async () => {
      await Api.account.accountLogout();
      // sseStore.closeEventSource();
      clearLoginStatus();
    };

    // Read	Write	Submit	Create  Download/Export 	Cancel	Delete	Share	   Assign	   Mask
    //  1     2     4        8    16         32768  65536   262144  524288

    // role, mask
    // get current user assigned role list
    // hide/show router by role list
    // for can see router, the user has
    //    | all masks
    //
    // 权限
    const canRead = (app: string) => userInfo.value?.mask ? (userInfo.value.mask[app] & MASK.Read) === MASK.Read : false
    const canWrite = (app: string) => userInfo.value?.mask ? (userInfo.value.mask[app] & MASK.Write) === MASK.Write : false
    const canCreate = (app: string) => userInfo.value?.mask ? (userInfo.value.mask[app] & MASK.Create) === MASK.Create : false
    const canDownload = (app: string) => userInfo.value?.mask ? (userInfo.value.mask[app] & MASK.Download) === MASK.Download : false
    const canDelete = (app: string) => userInfo.value?.mask ? (userInfo.value.mask[app] & MASK.Delete) === MASK.Delete : false
    const canSubmit = (app: string) => userInfo.value?.mask ? (userInfo.value.mask[app] & MASK.Submit) === MASK.Submit : false
    const canShare = (app: string) => userInfo.value?.mask ? (userInfo.value.mask[app] & MASK.Share) === MASK.Share : false
    const canAssign = (app: string) => userInfo.value?.mask ? (userInfo.value.mask[app] & MASK.Assign) === MASK.Assign : false
    const canCancel = (app: string) => userInfo.value?.mask ? (userInfo.value.mask[app] & MASK.Cancel) === MASK.Cancel : false

    return {
      canRead,
      canWrite,
      canCreate,
      canDownload,
      canDelete,
      canSubmit,
      canShare,
      canAssign,
      canCancel,
      token,
      perms,
      menus,
      userInfo,
      login,
      afterLogin,
      logout,
      clearLoginStatus,
      fetchPermsAndMenus,
    };
  },
  {
    persist: {
      paths: ['token'],
    },
  },
);

// 在组件setup函数外使用
export function useUserStoreWithOut() {
  return useUserStore(store);
}
