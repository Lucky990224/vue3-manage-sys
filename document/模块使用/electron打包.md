# Vue项目打包

## 方案：
* Vue引入Electron项目常用的两种方案分别是 *Vue CLI Plugin Electron Builder* 和 *electron-vue*
* Vue CLI Plugin Electron Builder的下载量是electron-vue三倍左右，使用更加广泛

## 安装Vue CLI Plugin Electron Builder
* 创建vue项目
* 安装打包插件：[安装选最新版本]
    `vue add electron-builder`

## electron插件介绍
* 插件入口文件
    /src/background.js

* Vue项目架构分析
项目由两个渲染进程：对应两个页面（main和remind）background.js会load两次，采用多页面打包方式

vue-cli构建的包默认是单页面打包，所以，我们在vue.config.js中进行改造：