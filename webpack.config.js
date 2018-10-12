var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin') // 删除插件
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

function assetsPath (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}


var config = {
    //入口文件配置
    entry: {
        app: './index.js'
    },
    //文件导出的配置
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "vue-imgs.js",
        libraryTarget: 'umd',//将你的 library 暴露为所有的模块定义下都可运行的方式
        library: 'VuePreview'
    },
    //模块配置
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                }
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('dist', 'fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('img/[name].[hash:7].[ext]')
                }
            },
        ]
    },
    resolve: {
        //默认后缀
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // 不打包的文件
    externals: {
        vue: 'Vue',
    },
    //插件配置
    plugins: [
        new CleanWebpackPlugin('dist', {
            verbose: true,
            dry: false
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
}

module.exports = config;
