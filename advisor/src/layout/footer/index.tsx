import { defineComponent } from 'vue';

import { GithubOutlined, CopyrightOutlined } from '@ant-design/icons-vue';
import { Layout } from 'ant-design-vue';
import styles from './index.module.scss';

const { Footer: ALayoutFooter } = Layout;

export default defineComponent({
  name: 'PageFooter',
  components: { ALayoutFooter },
  setup() {
    return () => (
      <>
        <a-layout-footer class={styles.page_footer}>
          <div class={styles.page_footer_link}>
            <a href="https://v-admin" target="_blank">
              在线预览
            </a>
            <a href="https://admin" target="_blank">
              <GithubOutlined />
            </a>
            <a href="https://docs/" target="_blank">
              在线文档
            </a>
          </div>
          <div class={styles.copyright}>
            Copyright <CopyrightOutlined /> 2024 tpm advisor
          </div>
        </a-layout-footer>
      </>
    );
  },
});
