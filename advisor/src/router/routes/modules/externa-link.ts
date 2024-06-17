import { RouterView, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'https://',
    name: 'https://',
    component: RouterView,
    meta: {
      title: '后台代码仓库',
      icon: 'ant-design:link-outlined',
      isExt: true,
      extOpenMode: 1,
    },
  },
];

export default routes;
