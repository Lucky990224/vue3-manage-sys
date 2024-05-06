<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink, useRouter } from 'vue-router';

const router = useRouter();
console.log('111111')

const isCollapse = ref(true)


function handleOpen(key, keyPath){
  console.log('22222222222222')
  console.log(key, keyPath)
}

function handleClose(key, keyPath){
  console.log('33333333333333333')
  console.log(key, keyPath)
}

</script>

<template>
  
  <div class="top">
    <!-- <h1> 00 </h1> -->
  </div>

  <div class="left">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
      class="nav-menu" 
      mode="vertical" 
      default-active="1"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      :show-timeout="200" 
      background-color="#e2efFF" 
      text-color="black"
    >
      <router-link class="router-link" :to="{path: router.path, query: {is_click: true}}" v-for="router in menu_router" :key="router.key">
        <el-menu-item :index="router.key">
            <SvgIcon :icon="router.icon" style="width: 20px;height: 72px;"></SvgIcon>
            <span>{{ router.label }}</span>
        </el-menu-item>
     </router-link>
    </el-menu>
  </div>


  <div class="right">
    <div class="windows">
      <RouterView />
    </div>
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


.top {
  height: 50px;
  width: 100%;
  top: 0;  
  left: 0;
  position: fixed;  
  background-color: rgb(201, 227, 233);
}


/* *******************************************左侧菜单******************************************** */

.left {
  width: 220px;
  height: 100%;
  position: fixed;  
  top: 80px;  
  left: 0;
  background-color: rgb(201, 227, 233);
}


.nav-menu {
    height: calc(100% - 50px);
    text-align: left;
    padding-top: 15px;
    overflow: auto;
}

.router-link {
    margin-left: 5%;
    width: 90%;
    height: 72px;
    display: block;
    text-decoration: none;
    text-align: left;
}
.router-link .is-active {
    background-color: #2557ba;
    color: white;
    transition: all 3s ease;
}
.router-link .el-menu-item {
    border-radius: 5px;
    height: 90%;
}
.router-link .el-menu-item:hover {
    background-color: #668cff;
    transition: all 0.5s ease;
}

.router-link span {
    font-size: 18px;
    word-spacing: 2px;
    padding-left: 15%;
}

/* ******************************************************************************************* */


.right {
  height: 100%;
  width: 100%;
  position: fixed;  
  top: 50px;  
  left: 220px;
}


.windows {
  height: 100%;
  width: 100%;
  position: fixed;  
  top: 50px;  
  left: 220px;
}


</style>