// vite.config.ts
import { defineConfig } from "file:///E:/Project/maptalks-react/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.9/node_modules/vite/dist/node/index.js";
import react from "file:///E:/Project/maptalks-react/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-react-swc@3.3.2_vite@4.4.9/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve as resolve3 } from "path";
import { compression } from "file:///E:/Project/maptalks-react/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-compression2@0.10.5/node_modules/vite-plugin-compression2/dist/index.mjs";
import dts from "file:///E:/Project/maptalks-react/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-dts@3.5.4_typescript@5.2.2_vite@4.4.9/node_modules/vite-plugin-dts/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///E:/Project/maptalks-react/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-css-injected-by-js@3.3.0_vite@4.4.9/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";

// script/write-route.ts
import { resolve } from "path";
import { closeSync, openSync, readdirSync, writeSync } from "fs";
import { camelCase, replace, upperFirst } from "file:///E:/Project/maptalks-react/node_modules/.pnpm/registry.npmmirror.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
var __vite_injected_original_dirname = "E:\\Project\\maptalks-react\\script";
var writeRoutes = () => {
  const filesName = readdirSync(resolve(__vite_injected_original_dirname, "../src/examples/components"));
  const comps = filesName == null ? void 0 : filesName.map((component) => ({
    componentName: upperFirst(camelCase(replace(component, ".tsx", ""))),
    pathName: replace(component, ".tsx", "")
  }));
  let importCompsStr = "";
  comps == null ? void 0 : comps.forEach(({ componentName, pathName }) => {
    importCompsStr += `
            const ${componentName} = lazy(() => import("../components/${pathName}"));
        `;
  });
  const content = `
        import { lazy } from 'react';
        import { createBrowserRouter } from 'react-router-dom';
        import App from '../App'; 
        ${importCompsStr}



        const routers: any = createBrowserRouter([
            {
                path: '/',
                element: <App />,
                errorElement: <>\u51FA\u9519\u5566\uFF01</>,
                children: [${comps == null ? void 0 : comps.map(({ componentName, pathName }) => {
    return `
                        {
                            path: "${pathName}",
                            element: <${componentName}></${componentName}>
                        }
                    `;
  })}] 
            },
        ]);

        export default routers  
    `;
  const routerFile = openSync(resolve(__vite_injected_original_dirname, "../src/examples/router/index.tsx"), "w");
  writeSync(routerFile, content);
  closeSync(routerFile);
};
var write_route_default = writeRoutes;

// script/write-exports.ts
import { closeSync as closeSync2, openSync as openSync2, readdirSync as readdirSync2, writeSync as writeSync2 } from "fs";
import { camelCase as camelCase2, replace as replace2, upperFirst as upperFirst2 } from "file:///E:/Project/maptalks-react/node_modules/.pnpm/registry.npmmirror.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import { resolve as resolve2 } from "path";
var __vite_injected_original_dirname2 = "E:\\Project\\maptalks-react\\script";
var writeExports = () => {
  var _a;
  const filesName = readdirSync2(resolve2(__vite_injected_original_dirname2, "../src/components"));
  let content = `
        import './styles/reset.pcss';  
    `;
  filesName == null ? void 0 : filesName.forEach((comp) => {
    content += `
            export { default as ${upperFirst2(
      camelCase2(replace2(comp, ".tsx", ""))
    )} } from '@comps/${replace2(comp, ".tsx", "")}';
        `;
  });
  const hooks = (_a = readdirSync2(resolve2(__vite_injected_original_dirname2, "../src/hooks"))) == null ? void 0 : _a.filter(
    (item) => item == null ? void 0 : item.startsWith("use")
  );
  hooks == null ? void 0 : hooks.forEach((hook) => {
    content += `
            export { default as ${camelCase2(replace2(hook, ".tsx", ""))} } from '@hooks/${replace2(
      hook,
      ".tsx",
      ""
    )}'; 
        `;
  });
  const file = openSync2(resolve2(__vite_injected_original_dirname2, "../src/index.ts"), "w");
  writeSync2(file, content);
  closeSync2(file);
};
var write_exports_default = writeExports;

// vite.config.ts
var __vite_injected_original_dirname3 = "E:\\Project\\maptalks-react";
write_exports_default();
write_route_default();
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "dist",
      staticImport: true,
      insertTypesEntry: true
    }),
    compression(),
    cssInjectedByJsPlugin({
      topExecutionPriority: true
    })
  ],
  build: {
    // sourcemap: true,
    lib: {
      entry: resolve3(__vite_injected_original_dirname3, "src/index.ts"),
      name: "maptalks-react",
      fileName: (format) => `maptalks-react.${format}.js`
    },
    rollupOptions: {
      plugins: [],
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "lodash-es": "_",
          "react-dom": "ReactDom"
        }
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 13800
  },
  resolve: {
    alias: {
      "maptalks-react": resolve3(__vite_injected_original_dirname3, "dist/maptalks-react.es.js"),
      "@comps": resolve3(__vite_injected_original_dirname3, "./src/components"),
      "@hooks": resolve3(__vite_injected_original_dirname3, "./src/hooks"),
      "@context": resolve3(__vite_injected_original_dirname3, "./src/context")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0L3dyaXRlLXJvdXRlLnRzIiwgInNjcmlwdC93cml0ZS1leHBvcnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcUHJvamVjdFxcXFxtYXB0YWxrcy1yZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUHJvamVjdFxcXFxtYXB0YWxrcy1yZWFjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUHJvamVjdC9tYXB0YWxrcy1yZWFjdC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBjb21wcmVzc2lvbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uMidcblxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWNzcy1pbmplY3RlZC1ieS1qcydcbmltcG9ydCB3cml0ZVJvdXRlcyBmcm9tICcuL3NjcmlwdC93cml0ZS1yb3V0ZSdcbmltcG9ydCB3cml0ZUNvbXBzIGZyb20gJy4vc2NyaXB0L3dyaXRlLWV4cG9ydHMnXG53cml0ZUNvbXBzKClcbndyaXRlUm91dGVzKClcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICByZWFjdCgpLFxuICAgICAgICBkdHMoe1xuICAgICAgICAgICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgICAgICAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXG4gICAgICAgICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgY29tcHJlc3Npb24oKSxcbiAgICAgICAgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKHtcbiAgICAgICAgICAgIHRvcEV4ZWN1dGlvblByaW9yaXR5OiB0cnVlLFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIC8vIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgICAgICAgIG5hbWU6ICdtYXB0YWxrcy1yZWFjdCcsXG5cbiAgICAgICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgbWFwdGFsa3MtcmVhY3QuJHtmb3JtYXR9LmpzYCxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgcGx1Z2luczogW10sXG4gICAgICAgICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcblxuICAgICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2xvZGFzaC1lcyc6ICdfJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERvbScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgICBwb3J0OiAxMzgwMCxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICdtYXB0YWxrcy1yZWFjdCc6IHJlc29sdmUoX19kaXJuYW1lLCAnZGlzdC9tYXB0YWxrcy1yZWFjdC5lcy5qcycpLFxuICAgICAgICAgICAgJ0Bjb21wcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxuICAgICAgICAgICAgJ0Bob29rcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaG9va3MnKSxcbiAgICAgICAgICAgICdAY29udGV4dCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29udGV4dCcpLFxuICAgICAgICB9LFxuICAgIH0sXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcm9qZWN0XFxcXG1hcHRhbGtzLXJlYWN0XFxcXHNjcmlwdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUHJvamVjdFxcXFxtYXB0YWxrcy1yZWFjdFxcXFxzY3JpcHRcXFxcd3JpdGUtcm91dGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1Byb2plY3QvbWFwdGFsa3MtcmVhY3Qvc2NyaXB0L3dyaXRlLXJvdXRlLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGNsb3NlU3luYywgb3BlblN5bmMsIHJlYWRkaXJTeW5jLCB3cml0ZVN5bmMgfSBmcm9tICdmcydcclxuaW1wb3J0IHsgY2FtZWxDYXNlLCByZXBsYWNlLCB1cHBlckZpcnN0IH0gZnJvbSAnbG9kYXNoLWVzJ1xyXG5cclxuY29uc3Qgd3JpdGVSb3V0ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlc05hbWUgPSByZWFkZGlyU3luYyhyZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9leGFtcGxlcy9jb21wb25lbnRzJykpXHJcbiAgICBjb25zdCBjb21wcyA9IGZpbGVzTmFtZT8ubWFwKChjb21wb25lbnQpID0+ICh7XHJcbiAgICAgICAgY29tcG9uZW50TmFtZTogdXBwZXJGaXJzdChjYW1lbENhc2UocmVwbGFjZShjb21wb25lbnQsICcudHN4JywgJycpKSksXHJcbiAgICAgICAgcGF0aE5hbWU6IHJlcGxhY2UoY29tcG9uZW50LCAnLnRzeCcsICcnKSxcclxuICAgIH0pKVxyXG5cclxuICAgIGxldCBpbXBvcnRDb21wc1N0cjogc3RyaW5nID0gJydcclxuICAgIGNvbXBzPy5mb3JFYWNoKCh7IGNvbXBvbmVudE5hbWUsIHBhdGhOYW1lIH0pID0+IHtcclxuICAgICAgICBpbXBvcnRDb21wc1N0ciArPSBgXHJcbiAgICAgICAgICAgIGNvbnN0ICR7Y29tcG9uZW50TmFtZX0gPSBsYXp5KCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvJHtwYXRoTmFtZX1cIikpO1xyXG4gICAgICAgIGBcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGBcclxuICAgICAgICBpbXBvcnQgeyBsYXp5IH0gZnJvbSAncmVhY3QnO1xyXG4gICAgICAgIGltcG9ydCB7IGNyZWF0ZUJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4uL0FwcCc7IFxyXG4gICAgICAgICR7aW1wb3J0Q29tcHNTdHJ9XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3Qgcm91dGVyczogYW55ID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IDxBcHAgLz4sXHJcbiAgICAgICAgICAgICAgICBlcnJvckVsZW1lbnQ6IDw+XHU1MUZBXHU5NTE5XHU1NTY2XHVGRjAxPC8+LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFske2NvbXBzPy5tYXAoKHsgY29tcG9uZW50TmFtZSwgcGF0aE5hbWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiJHtwYXRoTmFtZX1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IDwke2NvbXBvbmVudE5hbWV9PjwvJHtjb21wb25lbnROYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH0pfV0gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IHJvdXRlcnMgIFxyXG4gICAgYFxyXG4gICAgY29uc3Qgcm91dGVyRmlsZSA9IG9wZW5TeW5jKHJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2V4YW1wbGVzL3JvdXRlci9pbmRleC50c3gnKSwgJ3cnKVxyXG4gICAgd3JpdGVTeW5jKHJvdXRlckZpbGUsIGNvbnRlbnQpXHJcbiAgICBjbG9zZVN5bmMocm91dGVyRmlsZSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JpdGVSb3V0ZXNcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcm9qZWN0XFxcXG1hcHRhbGtzLXJlYWN0XFxcXHNjcmlwdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUHJvamVjdFxcXFxtYXB0YWxrcy1yZWFjdFxcXFxzY3JpcHRcXFxcd3JpdGUtZXhwb3J0cy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUHJvamVjdC9tYXB0YWxrcy1yZWFjdC9zY3JpcHQvd3JpdGUtZXhwb3J0cy50c1wiO2ltcG9ydCB7IGNsb3NlU3luYywgb3BlblN5bmMsIHJlYWRkaXJTeW5jLCB3cml0ZVN5bmMgfSBmcm9tICdmcydcclxuaW1wb3J0IHsgY2FtZWxDYXNlLCByZXBsYWNlLCB1cHBlckZpcnN0IH0gZnJvbSAnbG9kYXNoLWVzJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuXHJcbmNvbnN0IHdyaXRlRXhwb3J0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZpbGVzTmFtZSA9IHJlYWRkaXJTeW5jKHJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2NvbXBvbmVudHMnKSlcclxuXHJcbiAgICBsZXQgY29udGVudCA9IGBcclxuICAgICAgICBpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LnBjc3MnOyAgXHJcbiAgICBgXHJcblxyXG4gICAgZmlsZXNOYW1lPy5mb3JFYWNoKChjb21wKSA9PiB7XHJcbiAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgICAgIGV4cG9ydCB7IGRlZmF1bHQgYXMgJHt1cHBlckZpcnN0KFxyXG4gICAgICAgICAgICAgICAgY2FtZWxDYXNlKHJlcGxhY2UoY29tcCwgJy50c3gnLCAnJykpXHJcbiAgICAgICAgICAgICl9IH0gZnJvbSAnQGNvbXBzLyR7cmVwbGFjZShjb21wLCAnLnRzeCcsICcnKX0nO1xyXG4gICAgICAgIGBcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgaG9va3MgPSByZWFkZGlyU3luYyhyZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9ob29rcycpKT8uZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtPy5zdGFydHNXaXRoKCd1c2UnKVxyXG4gICAgKVxyXG5cclxuICAgIGhvb2tzPy5mb3JFYWNoKChob29rKSA9PiB7XHJcbiAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgICAgIGV4cG9ydCB7IGRlZmF1bHQgYXMgJHtjYW1lbENhc2UocmVwbGFjZShob29rLCAnLnRzeCcsICcnKSl9IH0gZnJvbSAnQGhvb2tzLyR7cmVwbGFjZShcclxuICAgICAgICAgICAgICAgIGhvb2ssXHJcbiAgICAgICAgICAgICAgICAnLnRzeCcsXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICApfSc7IFxyXG4gICAgICAgIGBcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZmlsZSA9IG9wZW5TeW5jKHJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2luZGV4LnRzJyksICd3JylcclxuICAgIHdyaXRlU3luYyhmaWxlLCBjb250ZW50KVxyXG4gICAgY2xvc2VTeW5jKGZpbGUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyaXRlRXhwb3J0c1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1RLFNBQVMsb0JBQW9CO0FBQ2hTLE9BQU8sV0FBVztBQUNsQixTQUFTLFdBQUFBLGdCQUFlO0FBQ3hCLFNBQVMsbUJBQW1CO0FBRTVCLE9BQU8sU0FBUztBQUNoQixPQUFPLDJCQUEyQjs7O0FDTndQLFNBQVMsZUFBZTtBQUNsVCxTQUFTLFdBQVcsVUFBVSxhQUFhLGlCQUFpQjtBQUM1RCxTQUFTLFdBQVcsU0FBUyxrQkFBa0I7QUFGL0MsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTSxjQUFjLE1BQU07QUFDdEIsUUFBTSxZQUFZLFlBQVksUUFBUSxrQ0FBVyw0QkFBNEIsQ0FBQztBQUM5RSxRQUFNLFFBQVEsdUNBQVcsSUFBSSxDQUFDLGVBQWU7QUFBQSxJQUN6QyxlQUFlLFdBQVcsVUFBVSxRQUFRLFdBQVcsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUFBLElBQ25FLFVBQVUsUUFBUSxXQUFXLFFBQVEsRUFBRTtBQUFBLEVBQzNDO0FBRUEsTUFBSSxpQkFBeUI7QUFDN0IsaUNBQU8sUUFBUSxDQUFDLEVBQUUsZUFBZSxTQUFTLE1BQU07QUFDNUMsc0JBQWtCO0FBQUEsb0JBQ04sYUFBYSx1Q0FBdUMsUUFBUTtBQUFBO0FBQUEsRUFFNUU7QUFFQSxRQUFNLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlWLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFBQSxNQUMxQyxZQUFZRCxTQUFRQyxtQ0FBVyxlQUFlO0FBQUEsSUFDbEQ7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFsicmVzb2x2ZSIsICJjbG9zZVN5bmMiLCAib3BlblN5bmMiLCAicmVhZGRpclN5bmMiLCAid3JpdGVTeW5jIiwgImNhbWVsQ2FzZSIsICJyZXBsYWNlIiwgInVwcGVyRmlyc3QiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJyZWFkZGlyU3luYyIsICJyZXNvbHZlIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInVwcGVyRmlyc3QiLCAiY2FtZWxDYXNlIiwgInJlcGxhY2UiLCAib3BlblN5bmMiLCAid3JpdGVTeW5jIiwgImNsb3NlU3luYyIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJyZXNvbHZlIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIl0KfQo=
