# Vue3 UI 组件库

## ElementPlus

* Element Plus 一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库
* 官方网站：https://element-plus.org
* 数量： Element Plus目前已有近70个组件

### 安装和使用
* 安装
> `npm install element-plus`

* 使用
main.js
```
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(...)
app.use(ElementPlus)
app.mount('#app')
```
vue文件中使用
```
<template>
  <div>
    <el-button :type="type">{{ text }}</el-button>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus';
import { defineProps } from 'vue';

// 定义props
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  text: {
    type: String,
    default: 'Button'
  }
});
</script>


```



## Ant Design Vue

* ant-design-vue 是 Ant Design 的 Vue 实现，组件的风格与 Ant Design 保持同步，组件的 html 结构和 css 样式也保持一致，真正做到了样式 0 修改，组件 API 也尽量保持了一致

* 数量：目前已有60+个组件
* 官方网站：https://www.antdv.com/
* 特点：Vue3包体积更小，更快，并且支持 SSR