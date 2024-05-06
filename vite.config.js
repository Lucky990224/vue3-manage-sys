import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {    // 项目构建到 dist 目录并使用 Vue 插件
    outDir: 'dist',
    rollupOptions: {
      input: './src/main.js'
    },
    sourcemap: true
  },
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
    https: false,
    proxy: {    // 代理服务器
      '/api': {
        target: 'http://localhost:9999', // Tornado 应用程序的地址和端口
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api', // 将请求中的 '/api' 前缀重写为空字符串
        },
      },
    }
  },
})
