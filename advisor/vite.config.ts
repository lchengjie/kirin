import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path';

import { defineConfig } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite';
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// import Components from "unplugin-vue-components/vite";
// import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

const CWD = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  console.log('mode:', mode)
  console.log('root:', root)
  return {
    plugins: [
      // vue(),
      vue({
        include: [/\.vue$/, /\.md$/],
        template: {
          compilerOptions: {
            isCustomElement: (tag) => {
              let isCustom = tag.startsWith('ws-')
              isCustom = isCustom || ['LockScreen', 'ProConfigProvider'].includes(tag)

              return isCustom
            },
          }
        }
      }),
      vueJsx(),
      eslintPlugin(),
      UnoCSS(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [resolve(CWD, 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'svg-icon-[dir]-[name]',
      }),
      // Components({
      //   resolvers: [AntDesignVueResolver({ importStyle: "less" })],
      // })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url)),
      },
      // alias: {
      //   '@': fileURLToPath(new URL('./src', import.meta.url))
      // }
    },
    esbuild: {
      // 移除日志打印及debugger
      drop: [], // VITE_DROP_CONSOLE ? ['console', 'debugger'] : [],
      supported: {
        'top-level-await': true //browsers can handle top-level-await features
      },
    },
    // 处理ant-design-vue 样式文件
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
        },
      },
    },
    // 依赖优化 - 预构建
    optimizeDeps: {
      include: ['vue', 'pinia', 'vue-router', 'ant-design-vue/es', '@vueuse/core'],
    },
  }
})
