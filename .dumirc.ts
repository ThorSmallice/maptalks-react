import { defineConfig } from 'dumi'
import { resolve } from 'path'
export default defineConfig({
    outputPath: 'docs-dist',
    chainWebpack: (config: any) => {
        config.module
            .rule('pcss')
            .test(/\.pcss$/)
            .use('style-loader')
            .loader('style-loader')
            .end()
            .use('css-loader')
            .loader('css-loader')
            .end()
            .use('postcss-loader')
            .loader('postcss-loader')
            .options({
                ident: 'postcss',
                plugins: () => [require('autoprefixer')],
            })
            .end()
        // .use('pcss-loader')
        // .loader('pcss-loader')
        // .end()

        return config
    },
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
        'maptalks-react': resolve('src'),
        '@context': resolve(__dirname, 'src/context'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@comps': resolve(__dirname, 'src/components'),
    },
})
