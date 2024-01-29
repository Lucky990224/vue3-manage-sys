# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## 自定义配置

### 如果使用Nginx等web服务器，需要把 public/settings.json 设置成类似这样

```json
{
    "auth_base_url": "",
    "business_base_url": "",
    "websocket_base_url": "127.0.0.1:80"
}
```

其中，"websocket_base_url" 是web服务器入库，其他设置由于有Nginx等自己的代理配置，所以设置为空。

### 如果使用Electron桌面端， 需要把 public/settings.json 设置成这样

```json
{
    "auth_base_url": "http://127.0.0.1:59999",
    "business_base_url": "http://127.0.0.1:60000",
    "websocket_base_url": "127.0.0.1:60000"
}
```

其中的各项配置，都是指向后台服务端的端口。
