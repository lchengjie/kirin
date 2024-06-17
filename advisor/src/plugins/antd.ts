import type { App } from 'vue';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
// import { AButton } from '@/components/basic/button/';

export function setupAntd(app: App<Element>) {
  // app.component('AButton', AButton);
  app.use(Antd)
}
