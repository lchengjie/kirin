# advisor

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


# 怎么使用字体或icon，四种方式
## 怎么load svg的resource，从assets/icons目录下
0. 使用插件 vite-plugin-svg-icons，参考：https://github.com/vbenjs/vite-plugin-svg-icons
1. 安装插件
2. 配置 vite.config.ts
3. 引入 import 'virtual:svg-icons-register'

## 使用IconFont
0. 前提：在public文件夹下有文件 iconfont.js
1. 引用 import { IconFont } from '@/components/basic/icon';
2. 使用如下语句：<IconFont class="mr-2" type="icon-wangpankongjian" />
  type为对应的id的名字

## 使用Icon
1. 引用： import { Icon } from '@/components/basic/icon';
2. 使用 <Icon icon="ant-design:lock-outlined" size="30" />

## 使用antd的图标
1. 引用 import { MessageOutlined, FastBackwardOutlined } from '@ant-design/icons-vue';
2. 使用 <MessageOutlined />

# 引用unocss
1. 安装 unocss
2. 在vite.config中引用 import UnoCSS from 'unocss/vite'
3. 在vite.config中配置 plugin
4. 在main.ts中引用 import 'virtual:uno.css'
5. 即可使用 m-1, p-2之类的css class，也可以在 uno.config.ts中配置自定义的class

# 主题色的改变
1. 通过layoutSetting 保存设置信息
2. layoutSetting里的setColorPrimary 方法用于改变主题色
3. 需增加setting页面，允许用户选择主题色，并赋值给一个变量
4. watch该变量，当改变时调用setColorPrimary 方法改变主题色
5. 主题色保存在localStorage变量 ws-storage-theme-primary-color 里，刷新时重新获取该值
6. 使用 toggleTheme 切换主题，即切换算法，dark，light，realDark
7. theme 保存在变量 ws-nav-theme 里

# 路由和权限，和TPM vue2版本相同
1. 该模版为通用模版，可以为TPM几个模块功能的分开的基础，包括路由和权限可以通用
2. 功能路由通过在meta里配置roles属性，配置表从文件里来 @/router/menuRoleSettings
3. TPM分为几个模块：
  * 客户初始化工具，仅用于初始化一个新客户。TPM-Init
    * 客户申请
    * 客户初始化
    * client、salesorg、division、salesarea管理
  * 客户系统配置运维，TPM-Advisor
    * 基本设置
    * 模版管理
    * CFG配置
    * 工作流管理
    * Application管理
  * 定时服务监控和配置工具，TPM-Schedule
    * Cron管理和监控
    * 服务模块管理
    * Control Script管理
  * TPM Web端，TPM-Client
    * 主数据管理
    * 账簿管理、资金管理、交易管理
    * 促销活动管理
    * 促销活动分配管理
    * 费用申请管理
    * 报表
    * 审批流程
      * 促销活动
      * 资金
      * 交易
      * 1GR
      * 付款申请
    * 审批额度管理
  * TPM移动端，TPM-Mobile
    * 促销活动审批
    * 付款申请审批
    * 。。。


* 使用 CFG

```ts
  // 引用 cfg
  import { useCfgStore } from '@/stores/modules/cfg';

  // 初始化cfg store
  const bbb = useCfgStore()
  // 获取所有config
  const uuuuu = bbb.globalConfig
  // 获取Grid Config，包括overview的和表格的
  const proo = bbb.getGridConfig('promotion')
  // 获取界面上用于显示的列的配置信息
  const mycolumn = bbb.getMyColumn('promotion', 'promotion', 'overview')
  // 获取rules config，表单验证规则
  const rules = bbb.getRulesConfig('promotion')
  // 获取detail页面的信息，即tab上的foldingcard配置
  const detailConfig = bbb.getPageDetailConfig('promotion', 'defaultDetail')
  // 获取Wizard信息，如创建promotion的wizard表单信息
  const wizardConfig = bbb.getPageWizardConfig('promotion', 'defaultWizard')
  // 获取overview的filter配置信息
  const overviewGridfilterConfig = bbb.getOverviewGridFilterConfig('promotion', 'PromotionOverview')
```


# TODO
1. 权限管理需要解决用户登录后的状态 Done
2. Overview
  * Overview 列表数据load和展示 Done
  * 列宽度可支持用户调整 Done
  * 行选择 
  * 前端Local分页 
  * 远程分页查询 
  * 点 description 列打开详细信息页面 查看或编辑
  * 选中一行或多行，可点击一些批量处理的操作，如审批、删除、提交 等，需根据选中数据和权限控制是否可以点击
  * 
3. Detail页面的公共控件
  * detail tab, form folding card group etc.
  * editable table
  * 
4. 