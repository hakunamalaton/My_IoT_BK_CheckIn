// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const WebpackBar = require('webpackbar');
const CracoLessPlugin = require('craco-less');
// const path = require('path');
const { version } = require('./package.json');
const ASSET_PATH = process.env.REACT_APP_ASSET_PATH;
const IS_PRODUCTION = process.env.REACT_APP_ENV === 'production';
const suffix = IS_PRODUCTION ? '' : 'dev/';

module.exports = {
    plugins: [
        { plugin: CracoLessPlugin },
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    if (IS_PRODUCTION) {
                        const index = webpackConfig.plugins
                            .map(i => i.constructor.name)
                            .findIndex(i => i === 'MiniCssExtractPlugin');

                        webpackConfig.plugins[
                            index
                        ].options.filename = `static/${suffix}css/${version}/main.[hash:8].css`;
                        webpackConfig.plugins[
                            index
                        ].options.chunkFilename = `static/${suffix}css/${version}/[name].[contenthash:8].css`;
                        webpackConfig.plugins.push(new AntdDayjsWebpackPlugin());
                        // webpackConfig.plugins.push(new BundleAnalyzerPlugin());
                    }
                    return webpackConfig;
                },
            },
            options: {},
        },
    ],

    babel: {
        loaderOptions: babelLoaderOptions => {
            if (IS_PRODUCTION) {
                babelLoaderOptions.plugins = [
                    ...(babelLoaderOptions.plugins || []),
                    ['transform-remove-console', { exclude: ['error', 'warn'] }],
                ];
            }
            return babelLoaderOptions;
        },
    },
    webpack: {
        plugins: [new WebpackBar({ profile: true })],
        configure: {
            devtool: IS_PRODUCTION ? false : undefined,
            output: {
                filename: `static/${suffix}js/${version}/main.[hash:8].js`,
                chunkFilename: `static/${suffix}js/${version}/[name].[contenthash:8].js`,
                publicPath: ASSET_PATH,
            },
            optimization: {
                runtimeChunk: false,
                splitChunks: {
                    cacheGroups: {
                        default: false,
                    },
                },
            },
        },
    },
};
