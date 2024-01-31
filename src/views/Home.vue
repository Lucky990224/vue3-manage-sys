<script setup>
import { ElButton } from 'element-plus';// 定义props

const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  text: {
    type: String,
    default: 'Go Login'
  }
});
</script>

<template>
  <div class="backdrop">
    <h1 style="color: aliceblue;">Hello World</h1>
    <el-button :type="type"><router-link to="/auth/login">{{ text }}</router-link></el-button>
    
  </div>
</template>
<style>

.backdrop {
  position: relative;	
  margin: 0;
  padding: 0;
  /* width:100%;			 */
  height:100%;		
  top: 200px;

  /* background-image: url("@/assets/L1.jpg"); */
  /* background-size: 100%;
  background-position: 0 0;
  background-repeat: no-repeat; */
}

</style>