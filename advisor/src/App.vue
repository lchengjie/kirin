<!-- <script setup lang="ts">
import { useLayoutSettingStore } from '@/stores/modules/layoutSetting';
import { LockScreen } from '@/components/basic/lockscreen';

import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ProConfigProvider from '@/components/basic/pro-config-provider/index.vue'

import { MessageOutlined, FastBackwardOutlined } from '@ant-design/icons-vue';
import { theme } from 'ant-design-vue';

import '@/assets/icons/realDark.svg'
import { SvgIcon } from '@/components/basic/icon';

import { IconFont } from '@/components/basic/icon';

import { Icon } from '@/components/basic/icon';
// import { Icon } from '@iconify/vue';

import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

// console.log(setCustomTheme)
import { ref, watch, computed } from "vue";
/**
 * "color" 和 "@setCustomTheme" 在ts中缺少模块声明，自行添加即可，如 ./taypes.d.ts
 */
// import Color from "color";
// "@setCustomTheme" 是 @zougt/vite-plugin-theme-preprocessor 提供的模块，setCustomTheme的参数必须提供Color模块
// import setCustomTheme from "@setCustomTheme";
import { reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
const formState: UnwrapRef<FormState> = reactive({
  name: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
const onSubmit = () => {
  console.log('submit!', toRaw(formState));
};
const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
import { type ThemeColor } from '@/layout/header/components/setting/constant';
const layoutSetting = useLayoutSettingStore();
// layoutSetting.getNavTheme
const defaultPrimaryColor = layoutSetting.layoutSetting.colorPrimary // "#CB38CE";
const defautNavTheme = layoutSetting.layoutSetting.navTheme as ThemeColor
console.log("🚀 ~ defautNavTheme:", defautNavTheme)
// const defaultRadius = 4;
// // 对应less变量 @alert-success-bg-color 的值，让它单独切换，不跟随主题色
// const alertSuccessBgReplacerKey = "#F7D06B";
// interface ThemeOpt {
//   primaryColor: string;
//   targetValueReplacer?: object;
//   gradientReplacer?: {
//     [alertSuccessBgReplacerKey]: string;
//   };
// }
// // 从浏览器获取存储的 setCustomTheme 的参数
// const storageOpt = localStorage.getItem("storage-theme-color");
// let defaultThemeOpt: ThemeOpt = { primaryColor: defaultPrimaryColor };
// try {
//   if (storageOpt) {
//     defaultThemeOpt = JSON.parse(storageOpt);
//   }
// } catch (e) {}

// // 分析 targetValueReplacer 得到一组值是可以通过 "6px" 替换的
// const targetValueReplacer = {
//   "6px 6px 0 0": "6px 6px 0 0",
//   "6px": "6px",
//   "0 0 6px 6px": "0 0 6px 6px",
//   "6px 0 0 0": "6px 0 0 0",
//   "0 6px 0 0": "0 6px 0 0",
//   "6px 0 0 6px": "6px 0 0 6px",
//   "0 6px 6px 0": "0 6px 6px 0",
// };
// // 组件加载时展示默认主题
// const roadOpt = {
//   Color,
//   ...defaultThemeOpt,
// };
// if (!defaultThemeOpt.targetValueReplacer) {
//   defaultThemeOpt.targetValueReplacer = Object.keys(targetValueReplacer).reduce(
//     (tol, key) => {
//       return { ...tol, [key]: key.replace(/6px/g, `${defaultRadius}px`) };
//     },
//     {}
//   );
// }
// setCustomTheme(roadOpt);
// 颜色板--切换主题色
const primaryColor = ref(defaultPrimaryColor);
const themeValue = ref(defautNavTheme);
console.log("🚀 ~ themeValue:", themeValue.value)
// // 圆角值
// const radius = ref(defaultRadius);
// // 颜色板--切换一个非主题色
// const oneOtherColor = ref(
//   (defaultThemeOpt.gradientReplacer || {})[alertSuccessBgReplacerKey] ||
//     alertSuccessBgReplacerKey
// );

const handleThemeChange = () => {
  layoutSetting.toggleTheme(themeValue.value)
  };
// const themeOptions = computed(() => {
//   /**
//    * @param {string} primaryColor
//    * // 可以终端命令 npx z-theme ins gradientReplacer 查看可用属性，targetValueReplacer同理
//    * @param {object} [gradientReplacer]
//    * @param {object} [targetValueReplacer]
//    */
//   return {
//     // 主色切换
//     primaryColor: primaryColor.value,

//     // 在src/theme/theme-vars.less文件中有n种不同的颜色值， gradientReplacer 就有n个可用属性
//     gradientReplacer: {
//       // 对应less变量 @alert-success-bg-color 的值，让它单独切换，不跟随主题色
//       [alertSuccessBgReplacerKey]: oneOtherColor.value,
//     },
//     targetValueReplacer: Object.keys(targetValueReplacer).reduce((tol, key) => {
//       // 分析 targetValueReplacer 得到 "6px" 是一组值的相同部分，用新的radius值替换过去
//       return { ...tol, [key]: key.replace(/6px/g, `${radius.value}px`) };
//     }, {}),
//   };
// });
// // 参数改变切换主题
// watch(themeOptions, (themeOptions) => {
//   setCustomTheme({
//     Color,
//     ...themeOptions,
//   });
//   localStorage.setItem("storage-theme-color", JSON.stringify(themeOptions));
// });
watch(primaryColor, (primaryColor) => {
  layoutSetting.setColorPrimary(primaryColor)
});

</script> -->

<template>
  <!-- <header style="display: none;">
    <a-radio-group v-model:value="themeValue" button-style="solid" @change="handleThemeChange">
      <a-radio-button value="dark">Dark</a-radio-button>
      <a-radio-button value="light">Light</a-radio-button>
      <a-radio-button value="realDark">realDark</a-radio-button>
    </a-radio-group>

    <Icon icon="ant-design:delete-outlined" />
    <Icon icon="ant-design:lock-outlined" size="50"/>
    11快乐
    <IconFont class="mr-2" type="icon-wangpan" />
    <IconFont class="mr-2" type="icon-wangpankongjian" />

    <svg style="display: none;">
      <symbol id="codrops" viewBox="0 0 23 30">
          <path class="back" fill="#aaa" d="M22.63,18.261c-0.398-3.044-2.608-6.61-4.072-9.359c-1.74-3.271-3.492-5.994-5.089-8.62l0,0   c-1.599,2.623-3.75,6.117-5.487,9.385c0.391,0.718,0.495,1.011,0.889,1.816c0.143,0.294,0.535,1.111,0.696,1.43   c0.062-0.114,0.582-1.052,0.643-1.162c0.278-0.506,0.54-0.981,0.791-1.451c0.823-1.547,1.649-2.971,2.469-4.33   c0.817,1.359,1.646,2.783,2.468,4.33c0.249,0.47,0.513,0.946,0.791,1.453c1.203,2.187,2.698,4.906,2.96,6.895   c0.292,2.237-0.259,4.312-1.556,5.839c-1.171,1.376-2.824,2.179-4.663,2.263c-1.841-0.084-3.493-0.887-4.665-2.263   c-0.16-0.192-0.311-0.391-0.448-0.599c-0.543,0.221-1.127,0.346-1.735,0.365c-0.56-0.019-1.095-0.127-1.599-0.313   c1.448,3.406,4.667,5.66,8.447,5.78C19.086,29.537,23.469,24.645,22.63,18.261z"/>
          <path class="front" fill="#ddd" d="M6.177,11.659c0.212,0.367,0.424,0.747,0.635,1.136c0.164,0.303,0.333,0.606,0.512,0.927   c0.683,1.225,1.618,2.898,1.755,3.937c0.144,1.073-0.111,2.056-0.716,2.769c-0.543,0.641-1.315,1.014-2.186,1.067   c-0.87-0.054-1.643-0.43-2.186-1.067c-0.604-0.713-0.858-1.695-0.715-2.771c0.137-1.036,1.072-2.712,1.755-3.936   c0.18-0.32,0.349-0.623,0.513-0.927C5.752,12.404,5.964,12.026,6.177,11.659 M6.177,5.966L6.177,5.966   c-1.02,1.649-2.138,3.363-3.247,5.419c-0.932,1.728-2.344,3.967-2.598,5.88c-0.535,4.014,2.261,7.09,5.846,7.203   c3.583-0.113,6.379-3.189,5.845-7.203c-0.255-1.912-1.666-4.152-2.598-5.88C8.314,9.329,7.196,7.617,6.177,5.966L6.177,5.966z"/>
      </symbol>
      </svg>
      <svg height="90px" width="69px">
        <use xlink:href="#codrops" class="codrops-1"/>
      </svg>
      <svg height="90px" width="69px">
        <use xlink:href="#codrops" class="codrops-2"/>
      </svg>
      <svg height="90px" width="69px">
        <use xlink:href="#codrops" class="codrops-3"/>
      </svg>
      
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="m-2 p-3">
        mmj-1 block
      </div>
      <HelloWorld msg="You did it!" />

      <SvgIcon name="realDark" size="50" />
      <SvgIcon name="file-type-txt" size="30" />

      <FastBackwardOutlined />
      <MessageOutlined />
      <a-space wrap>
        <a-button type="primary"><FastBackwardOutlined />Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
      </a-space>


      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <div class="m-2 p-2" style="display: none;">
    <a-config-provider
    :theme="{
      token: {
        colorPrimary: primaryColor
      },
      components: {
        Radio: {
          colorPrimary: '#00b96b',
        },
      },
    }"
  >
    <a-button />
  </a-config-provider>

  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Activity name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="Instant delivery">
      <a-switch v-model:checked="formState.delivery" />
    </a-form-item>
    <a-form-item label="Activity type">
      <a-checkbox-group v-model:value="formState.type">
        <a-checkbox value="1" name="type">Online</a-checkbox>
        <a-checkbox value="2" name="type">Promotion</a-checkbox>
        <a-checkbox value="3" name="type">Offline</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources">
      <a-radio-group v-model:value="formState.resource">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form">
      <a-textarea v-model:value="formState.desc" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>

  <a-radio>Radio</a-radio>
    <a-checkbox>Checkbox</a-checkbox>
  <a-space direction="vertical" style="width: 100%">
    <a-alert message="Success Text" type="success" show-icon />
    <a-alert message="Info Text" type="info" show-icon />
    <a-alert message="Warning Text" type="warning" show-icon />
    <a-alert message="Error Text" type="error" show-icon />
  </a-space>
    <h1 style="text-align: center">vite + ant-design-vue 动态主题切换示例</h1>
    <div style="text-align: center">
      <span>当前主题色：</span>
      <color-picker v-model:pureColor="primaryColor" />
    </div>
    <a-row :gutter="30">
      <a-col :span="24">
        <a-typography-title>Buttons</a-typography-title>
        <a-tooltip title="search">
          <a-button type="primary" shape="circle" />
        </a-tooltip>
        <a-button type="primary">Primary Button</a-button>
        <a-button type="ghost">ghost Button</a-button>
        <a-button type="dashed">dashed Button</a-button>
        <a-button type="link">link Button</a-button>
        <a-button type="text">text Button</a-button>
        <a-button type="default">default Button</a-button>
        <a-button type="primary" danger>Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="dashed" danger>Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
        <a-divider />
        <a-typography-title>Alert</a-typography-title>
        <a-alert
          style="margin-bottom: 10px"
          message="哈！主人给了我独立切换颜色的机会"
          type="success" />
        <a-alert
          style="margin-bottom: 10px"
          message="alert中只有我是由主题色演变的"
          type="info" />
        <a-alert
          style="margin-bottom: 10px"
          message="我不会跟随主题色变化"
          type="warning" />
        <a-alert message="好可惜，我也不会" type="error" />
        <a-divider />
        <a-divider />
        <a-typography-title>Progress</a-typography-title>
        <a-progress :percent="30" :strokeColor="primaryColor" />
        <a-progress :percent="50" :strokeColor="primaryColor" status="active" />
        <div>
          <a-progress type="circle" :strokeColor="primaryColor" :percent="75" />
          <a-progress type="circle" :percent="70" status="exception" />
          <a-progress type="circle" :percent="100" />
        </div>

        <a-divider
      /></a-col>
    </a-row>
  </div> -->

  <ProConfigProvider>
    <RouterView #="{ Component }">
      <component :is="Component" />
    </RouterView>
    <LockScreen />
  </ProConfigProvider>
</template>

<!-- 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
