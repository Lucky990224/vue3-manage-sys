import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [  // 配置所需要的插件列表
    vue()
  ],  
  base: './',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,  // 自动打开默认浏览器
    proxy:{}    // 代理服务器
  },
  // 需要将axios绑定在vue上
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:9999', // Tornado 应用程序的地址和端口
  //     changeOrigin: false,
  //     pathRewrite: {
  //       '^/api': '', // 将请求中的 '/api' 前缀重写为空字符串
  //     },
  //   },
  // }
})
