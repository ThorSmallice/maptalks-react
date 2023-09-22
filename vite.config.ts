import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { compression } from 'vite-plugin-compression2'

import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import writeRoutes from './script/write-route'
import writeComps from './script/write-exports'
writeComps()
writeRoutes()
export default defineConfig({
    plugins: [
        react(),
        dts({
            outDir: 'dist',
            staticImport: true,
            insertTypesEntry: true,
        }),
        compression(),
        cssInjectedByJsPlugin({
            topExecutionPriority: true,
        }),
    ],
    build: {
        // sourcemap: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'maptalks-react',

            fileName: (format) => `maptalks-react.${format}.js`,
        },
        rollupOptions: {
            plugins: [],
            external: ['react', 'react-dom'],

            output: {
                globals: {
                    react: 'React',
                    'lodash-es': '_',
                    'react-dom': 'ReactDom',
                },
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 13800,
    },
    resolve: {
        alias: {
            'maptalks-react': resolve(__dirname, './src/index'),
            '@comps': resolve(__dirname, './src/components'),
            '@hooks': resolve(__dirname, './src/hooks'),
            '@context': resolve(__dirname, './src/context'),
        },
    },
})
