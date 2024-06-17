import { reactive, computed, watchPostEffect } from 'vue';
import { defineStore } from 'pinia';
import { theme as antdTheme } from 'ant-design-vue';
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { themeColor, type ThemeColor } from '@/layout/header/components/setting/constant';

/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * contentWidth - 内容区布局： 流式 |  固定
 */

export type LayoutSetting = {
  navTheme: ThemeColor; // theme for nav menu
  colorPrimary: string; // '#F5222D', // primary color of ant design
  layout: 'sidemenu' | 'topmenu'; // nav menu position: `sidemenu` or `topmenu`
  contentWidth: 'Fluid' | 'Fixed'; // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
  fixedHeader: false; // sticky header
  fixSiderbar: false; // sticky siderbar
  colorWeak: false;
  menu: {
    locale: true;
  };
  title: string;
  pwa: false;
  iconfontUrl: string;
  /** 是否缓存标签页 */
  cacheTabs: boolean;
  // production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true'
};

// const themePrimaryColor = JSON.parse(localStorage.getItem("ws-storage-theme-primary-color") as string);
// const navTheme = JSON.parse(localStorage.getItem("ws-nav-theme") as string);

export const defaultSetting: LayoutSetting = {
  navTheme: 'dark', // navTheme?.navTheme || 'dark', // theme for nav menu
  colorPrimary: '#1677FF', // themePrimaryColor?.color || '#1677FF', // '#F5222D', // primary color of ant design
  layout: 'sidemenu', // nav menu position: `sidemenu` or `topmenu`
  contentWidth: 'Fluid', // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
  fixedHeader: false, // sticky header
  fixSiderbar: false, // sticky siderbar
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'tpm-adivsor',
  pwa: false,
  iconfontUrl: '',
  cacheTabs: false,
  // production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
};
export interface ILayoutSettingStore {
  layoutSetting: LayoutSetting,
  themeConfig: ThemeConfig,
  getNavTheme: ThemeColor,
  toggleTheme(navTheme: ThemeColor): void,
  setColorPrimary(color: string): void,
  updateLayoutSetting(settings: Partial<LayoutSetting>): void
}
export const useLayoutSettingStore = defineStore(
  'layout-setting',
  (): ILayoutSettingStore => {
    const layoutSetting = reactive({ ...defaultSetting });
    // 从保存中获取 colorPrimary， navTheme

    const themeConfig = reactive<ThemeConfig>({
      algorithm: themeColor[layoutSetting.navTheme!] || antdTheme.defaultAlgorithm,
      token: {
        colorPrimary: layoutSetting.colorPrimary,
      },
    });

    const getNavTheme = computed(() => {
      return layoutSetting.navTheme;
    });
    // const setNavTheme = (value) => {
    //   layoutSetting.navTheme = value
    // }

    watchPostEffect(() => {
      if (layoutSetting.navTheme) {
        toggleTheme(layoutSetting.navTheme);
      }
      if (layoutSetting.colorPrimary) {
        setColorPrimary(layoutSetting.colorPrimary);
      }
    });

    // 切换主题
    const toggleTheme = (navTheme: ThemeColor) => {
      if (navTheme === 'realDark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      themeConfig.algorithm = themeColor[navTheme];
      // localStorage.setItem("ws-nav-theme", JSON.stringify({ navTheme }));
    };

    /** 设置主题色 */
    const setColorPrimary = (color: string) => {
      themeConfig.token!.colorPrimary = color;
      // localStorage.setItem("ws-storage-theme-primary-color", JSON.stringify({ color }));
    };

    const updateLayoutSetting = (settings: Partial<LayoutSetting>) => {
      Object.assign(layoutSetting, settings);
    };

    return {
      layoutSetting,
      themeConfig,
      getNavTheme: getNavTheme.value,
      toggleTheme,
      setColorPrimary,
      updateLayoutSetting
    };
  },
  {
    persist: true,
  },
);
