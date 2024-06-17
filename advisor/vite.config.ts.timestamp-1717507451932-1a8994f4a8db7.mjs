// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "file:///Users/charlie.chengjie.li/Projects/TPM/ws/kirin/advisor/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///Users/charlie.chengjie.li/Projects/TPM/ws/kirin/advisor/node_modules/unocss/dist/vite.mjs";
import vue from "file:///Users/charlie.chengjie.li/Projects/TPM/ws/kirin/advisor/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/charlie.chengjie.li/Projects/TPM/ws/kirin/advisor/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslintPlugin from "file:///Users/charlie.chengjie.li/Projects/TPM/ws/kirin/advisor/node_modules/@nabla/vite-plugin-eslint/src/index.mjs";
import { createSvgIconsPlugin } from "file:///Users/charlie.chengjie.li/Projects/TPM/ws/kirin/advisor/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/charlie.chengjie.li/Projects/TPM/ws/kirin/advisor/vite.config.ts";
var CWD = process.cwd();
var vite_config_default = defineConfig(({ mode }) => {
  const root = process.cwd();
  console.log("mode:", mode);
  console.log("root:", root);
  return {
    plugins: [
      // vue(),
      vue({ include: [/\.vue$/, /\.md$/] }),
      vueJsx(),
      eslintPlugin(),
      UnoCSS(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [resolve(CWD, "src/assets/icons")],
        // Specify symbolId format
        symbolId: "svg-icon-[dir]-[name]"
      })
      // Components({
      //   resolvers: [AntDesignVueResolver({ importStyle: "less" })],
      // })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
        "#": fileURLToPath(new URL("./types", __vite_injected_original_import_meta_url))
      }
      // alias: {
      //   '@': fileURLToPath(new URL('./src', import.meta.url))
      // }
    },
    esbuild: {
      // 移除日志打印及debugger
      drop: []
      // VITE_DROP_CONSOLE ? ['console', 'debugger'] : [],
    },
    // 处理ant-design-vue 样式文件
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true
        }
      }
    },
    // 依赖优化 - 预构建
    optimizeDeps: {
      include: ["vue", "pinia", "vue-router", "ant-design-vue/es", "@vueuse/core"]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hhcmxpZS5jaGVuZ2ppZS5saS9Qcm9qZWN0cy9UUE0vd3Mva2lyaW4vYWR2aXNvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoYXJsaWUuY2hlbmdqaWUubGkvUHJvamVjdHMvVFBNL3dzL2tpcmluL2Fkdmlzb3Ivdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoYXJsaWUuY2hlbmdqaWUubGkvUHJvamVjdHMvVFBNL3dzL2tpcmluL2Fkdmlzb3Ivdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnLCBDb25maWdFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAnQG5hYmxhL3ZpdGUtcGx1Z2luLWVzbGludCdcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJztcblxuLy8gaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbi8vIGltcG9ydCB7IEFudERlc2lnblZ1ZVJlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiO1xuXG5jb25zdCBDV0QgPSBwcm9jZXNzLmN3ZCgpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG4gIGNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpO1xuXG4gIGNvbnNvbGUubG9nKCdtb2RlOicsIG1vZGUpXG4gIGNvbnNvbGUubG9nKCdyb290OicsIHJvb3QpXG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgLy8gdnVlKCksXG4gICAgICB2dWUoeyBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10gfSksXG4gICAgICB2dWVKc3goKSxcbiAgICAgIGVzbGludFBsdWdpbigpLFxuICAgICAgVW5vQ1NTKCksXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIC8vIFNwZWNpZnkgdGhlIGljb24gZm9sZGVyIHRvIGJlIGNhY2hlZFxuICAgICAgICBpY29uRGlyczogW3Jlc29sdmUoQ1dELCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcbiAgICAgICAgLy8gU3BlY2lmeSBzeW1ib2xJZCBmb3JtYXRcbiAgICAgICAgc3ltYm9sSWQ6ICdzdmctaWNvbi1bZGlyXS1bbmFtZV0nLFxuICAgICAgfSksXG4gICAgICAvLyBDb21wb25lbnRzKHtcbiAgICAgIC8vICAgcmVzb2x2ZXJzOiBbQW50RGVzaWduVnVlUmVzb2x2ZXIoeyBpbXBvcnRTdHlsZTogXCJsZXNzXCIgfSldLFxuICAgICAgLy8gfSlcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAnIyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi90eXBlcycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgfSxcbiAgICAgIC8vIGFsaWFzOiB7XG4gICAgICAvLyAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICAvLyB9XG4gICAgfSxcbiAgICBlc2J1aWxkOiB7XG4gICAgICAvLyBcdTc5RkJcdTk2NjRcdTY1RTVcdTVGRDdcdTYyNTNcdTUzNzBcdTUzQ0FkZWJ1Z2dlclxuICAgICAgZHJvcDogW10gLy8gVklURV9EUk9QX0NPTlNPTEUgPyBbJ2NvbnNvbGUnLCAnZGVidWdnZXInXSA6IFtdLFxuICAgIH0sXG4gICAgLy8gXHU1OTA0XHU3NDA2YW50LWRlc2lnbi12dWUgXHU2ODM3XHU1RjBGXHU2NTg3XHU0RUY2XG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBcdTRGOURcdThENTZcdTRGMThcdTUzMTYgLSBcdTk4ODRcdTY3ODRcdTVFRkFcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGluY2x1ZGU6IFsndnVlJywgJ3BpbmlhJywgJ3Z1ZS1yb3V0ZXInLCAnYW50LWRlc2lnbi12dWUvZXMnLCAnQHZ1ZXVzZS9jb3JlJ10sXG4gICAgfSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFYsU0FBUyxlQUFlLFdBQVc7QUFDN1gsU0FBUyxlQUFlO0FBRXhCLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sa0JBQWtCO0FBQ3pCLFNBQVMsNEJBQTRCO0FBVG1MLElBQU0sMkNBQTJDO0FBY3pRLElBQU0sTUFBTSxRQUFRLElBQUk7QUFHeEIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQTZCO0FBQy9ELFFBQU0sT0FBTyxRQUFRLElBQUk7QUFFekIsVUFBUSxJQUFJLFNBQVMsSUFBSTtBQUN6QixVQUFRLElBQUksU0FBUyxJQUFJO0FBQ3pCLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQTtBQUFBLE1BRVAsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDcEMsT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AscUJBQXFCO0FBQUE7QUFBQSxRQUVuQixVQUFVLENBQUMsUUFBUSxLQUFLLGtCQUFrQixDQUFDO0FBQUE7QUFBQSxRQUUzQyxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJSDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxRQUNwRCxLQUFLLGNBQWMsSUFBSSxJQUFJLFdBQVcsd0NBQWUsQ0FBQztBQUFBLE1BQ3hEO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJRjtBQUFBLElBQ0EsU0FBUztBQUFBO0FBQUEsTUFFUCxNQUFNLENBQUM7QUFBQTtBQUFBLElBQ1Q7QUFBQTtBQUFBLElBRUEsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osbUJBQW1CO0FBQUEsUUFDckI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsT0FBTyxTQUFTLGNBQWMscUJBQXFCLGNBQWM7QUFBQSxJQUM3RTtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
