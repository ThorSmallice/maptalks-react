import { defineConfig } from 'dumi'
import { resolve } from 'path'
export default defineConfig({
    outputPath: 'docs-dist',
    // apiParser: {},
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
        // entryFile: './src/apientry.tsx',
    },
    themeConfig: {
        name: 'maptalks-react',
        editLink: false,
        lastUpdated: false,
        footer: false,
        socialLinks: {
            github: 'https://github.com/ThorSmallice/maptalks-react',
        },
    },
    alias: {
        'maptalks-react': resolve('dist/maptalks-react.es.js'),
        '@context': resolve(__dirname, 'src/context'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@comps': resolve(__dirname, 'src/components'),
    },
})
