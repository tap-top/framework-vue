#### 全局安装 vue-cli 
    npm install --global vue-cli
#### 创建一个基于 webpack 模板的新项目
    vue init webpack framework-vue
#### 安装依赖，走你
    cd framework-vue
    npm install
    npm run dev
    
------
1.跑起来既然需要手动到浏览器中输入地址，怎么整？
  >项目文件夹config -> index.js -> 找到 autoOpenBrowser -> 值改为true。这下浏览器会直接打开地址了

##项目使用的框架如下
- vue
- vuex 状态管理
- vue-router 路由管理
- iview 中后台框架
- axios 接口
- nprogress 加载动画
- 组件的依赖


######安装组件通过
    npm install 组件名 --save

######删除组件通过
    npm unstall 组件名

###### css的预处理的不能忘了
    npm install --save-dev sass-loader
    //因为sass-loader依赖于node-sass，所以还要安装node-sass
    npm install --save-dev node-sass
    
####代码处理一下准备第一个build版本
  >找到config文件夹下面的index.js文件,找到assetsPublicPath
 
    assetsPublicPath: '/tww/', // 这样编译完的地址就多了一个tww啦
####编译的命令是
    npm run build  

  > *注意* 编译成功的文件在项目根目录下的dist文件夹
