<!--
 * @Author: yalo yalo.wang@flatek.com
 * @Date: 2024-01-25 14:21:19
 * @LastEditors: yalo yalo.wang@flatek.com
 * @LastEditTime: 2024-01-25 17:04:07
 * @FilePath: \ops-data-center-v3e:\code\demo\vue3\vue3项目创建流程.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# vue3两种创建方式
* cli
* vite   

|          | Vue CLI                                     | Vite                                        |
| -------- | ------------------------------------------- | ------------------------------------------- |
| 构建工具 | webpack                                     | esbuild                                     |
| 构建速度 | 相对较慢                                   | 极快                                        |
| 依赖安装 | 使用npm或yarn进行依赖安装                   | 使用npm或yarn进行依赖安装                   |
| 项目配置 | 使用vue.config.js进行项目配置               | 使用vite.config.js进行项目配置              |
| 热重载   | 支持                                        | 支持                                        |
| 插件系统 | 丰富的插件系统，支持自定义插件                | 目前插件系统相对较少，但可直接使用npm包      |
| 开发体验 | 适合中大型项目，提供完整的开发环境和工具链     | 适合小型项目，提供快速的开发环境和工具链     |
| 生态系统 | 成熟的生态系统，有大量的社区和第三方插件支持   | 相对较新的生态系统，插件和社区支持相对较少   |
| 兼容性   | 支持所有现代浏览器                          | 支持所有现代浏览器                           |
  
## cli：命令行创建vue3 

### 1、安装node.js 
进入node.js的官网下载安装包进行安装  
Node.js 历史版本下载地址：https://nodejs.org/dist/

### 2、安装vue-cli  
> ` npm install -g @vue/cl `

### 3、创建vue项目
3.1 使用名称创建项目  
> ` vue create 项目名称 `  

3.2 上下键选择对应版本【默认vue3】
> $ vue create cl-test1  
? Please pick a preset: (Use arrow keys)  
\> Default ([Vue 3] babel, eslint)  
  Default ([Vue 2] babel, eslint)  
  Manually select features

### 4、运行项目
> `cd 项目名称`  
> `npm run serve`


## vite：命令行创建vue3

### 1、安装node.js
进入node.js的官网下载安装包进行安装  
Node.js 历史版本下载地址：https://nodejs.org/dist/  

### 2、安装vite，使用vite创建vue3  

输入安装命令  
> `npm install vite -D` 局部安装  
`npm install vite -g` 全局安装   

创建vue3项目
> `npm create vite@latest`  

输入项目名称  

> ? Project name: » 项目名称

选择一个框架

> √ Project name: ... vite-project  
? Select a framework: » - Use arrow-keys. Return to submit.  
>   Vanilla  
    Vue  
    React  
    Preact  
    Lit  
    Svelte  
    Solid  
    Qwik  
    Others  

选择一个模板  

> √ Project name: ... vite-project   
√ Select a framework: » Vue  
? Select a variant: » - Use arrow-keys. Return to submit.  
>   TypeScript  
    JavaScript  
    Customize with create-vue ↗  
    Nuxt ↗  

### 3、安装npm运行项目
> `cd vite-project`  
  `npm install`   
  `npm run dev`  