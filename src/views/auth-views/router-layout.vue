<script setup>
import { Auths } from '@/store/auth';

const auths = Auths();
auths.$reset()            // 重置所有块、按钮显示状态
console.log('111111')


</script>

<template>
  <div class="auth-main-area">
    <RouterView></RouterView>
  </div>
</template>
<style scoped>
* {
    box-sizing: border-box; /* 元素的盒模型的计算方式 */
    position: absolute;     /* 设置了元素的定位方式 */
}

.auth-main-area {
    background-color: rgb(201, 227, 233);
    width: 100%;
    height: 100%;
    /* max-width: 100%;	 */
}

</style>