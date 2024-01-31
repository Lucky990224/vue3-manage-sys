# Vue3 vite config配置

## vue3 vite项目配置解析【vite.config.js】

### 项目配置文件使用
打开vite.config.js文件
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],  // 配置所需要的插件列表
  base: './',
  resolve: {      
    alias: {
      '@': '/src'     // 使用@表示根路径
    }
  },
  server: {
    host: '0.0.0.0', 
    port: 8888,
    open: true,  // 自动打开默认浏览器
    proxy:{}    // 代理服务器
  }
})
```

### defineConfig 解析


#### 1、plugins【配置所需要的插件列表，如`@vites/plugin-vue`等】


#### 2、root【指定项目的根目录，默认单曲工作目录】


#### 3、base【指定应用部署的基础路径，默认`/`】


#### 4、server【配置开发服务器的选项，如`port`、`host`等】  
* port：指定开发服务器的端口号，默认为3000。
* host：指定开发服务器的主机地址，默认为localhost。
* https：配置是否启用HTTPS，默认为false。可以设置为一个对象来启用HTTPS，并提供自定义的SSL证书和密钥。
* proxy：配置开发服务器的代理选项，用于解决跨域问题。可以设置为一个对象，其中每个键值对表示一个代理规则。
* cors：配置是否启用跨域资源共享，默认为false。可以设置为一个布尔值或一个对象，用于自定义CORS选项。
* strictPort：配置是否启用严格的端口检查，默认为false。设置为true时，如果指定的端口号已被占用，Vite将会抛出错误并终止启动。
* open: bool或字符串，自动打开默认浏览器

### 5、bulid【构建选项，如`outDir`、`assetsDir`等】

### 6、resolve【配置模块解析的规则】
* alias：配置别名，可以通过别名来引用模块。例如，{ '@': '/src' } 可以将 @ 作为 /src 的别名。
* extensions：配置模块的扩展名，当引用模块时可以省略扩展名。例如，['.js', '.jsx', '.json'] 可以配置支持这些扩展名的模块。
* mainFields：配置模块的入口字段，当引用模块时可以省略入口字段。例如，['module', 'jsnext', 'main'] 可以配置按照这个顺序查找模块的入口字段。
* modules：配置自定义模块解析规则。例如，[{ name: 'module-name', resolve: '/path/to/module' }] 可以将 module-name 解析为 /path/to/module。