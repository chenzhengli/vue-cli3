
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
    //部署应用包时的基本 URL
    baseUrl:'/',
    //项目打包后的文件夹的路径；
    outputDir:'build',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir:'assets',
    //指定生成的 index.html的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath:'index.html',
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    filenameHashing:true,
    //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    lintOnSave:false,
    runtimeCompiler:true,
    
    //webpack的简单配置的方式
     configureWebpack: {
        plugins: [
          //new MyAwesomeWebpackPlugin()
        ],
        module:{
            rules:[
                    {                  
                        test: /(\.jsx|\.js)$/,
                        use: {
                            loader: "babel-loader"
                        },
                        exclude: /node_modules/
                    }, 
                    {
                        test: /\.css$/,
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [{
                                loader: "css-loader",
                                options: {
                                    modules: true,
                                    localIdentName: '[name]__[local]--[hash:base64:5]'
                                }
                            }, {
                                loader: "postcss-loader"
                            }],
                        })
                    } 
            ]
        }
      },
    //链式操作（高级的）
    chainWebpack: config => {
        //这是加载器的链式
        // config.module
        // .use('eslint')
        // .loader('eslint-loader')
        // .options({
        //     rules: {
        //         semi: 'off'
        //     }
        // });

        //这是使用插件拓展插件的    
        // config
        //     .plugin('clean')
        //       .use(CleanPlugin, [['dist'], { root: '/dir' }]);    
      },

    //以下是devservr的配置
    devServer:{
        open:true,//运行时自动打开浏览器
        port:10086,
        host:'localhost',
        https:false,//这里配置是否适宜https的方式请求
        // lazy:true,//是否是懒加载，true的时候webpack将不会观察文件的改动导致不会呈现相应的变化
        // noInfo:true,

        openPage:'login.html',//这个是配置指定在打开浏览器时导航到的页面。
        //代理的配置
        proxy:{
            '/mockdata': {
                target: 'https://m.tuniu.com/mapi/home/getUniqueData',
                pathRewrite: {'^/mockdata' : ''}
              }
        },
    },
    //下面是多页面的配置
    pages:{
        index: {
          // page 的入口
          entry: 'src/pages/index/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          //title: 'Index Page',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login:{
            entry:'src/pages/login/login.js',
            template:'public/login.html',
            filename:'login.html',
        },
    },
}