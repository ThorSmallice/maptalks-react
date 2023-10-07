import { defineConfig } from 'dumi'
import { resolve } from 'path'
export default defineConfig({
    outputPath: 'docs-dist',
    resolve: {
        atomDirs: [
            {
                type: 'component',
                dir: 'src/components',
            },
            {
                type: 'hooks',
                dir: 'src/hooks',
            },
        ],
    },
    themeConfig: {
        name: 'maptalks-react',
    },
    alias: {
        'maptalks-react': resolve('dist/maptalks-react.es.js'),
        '@context': resolve(__dirname, 'dist/context'),
        '@hooks': resolve(__dirname, 'dist/hooks'),
        '@comps': resolve(__dirname, 'dist/components'),
    },
})
