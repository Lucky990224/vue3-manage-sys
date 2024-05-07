<script setup>
import { ref, onMounted, onUnmounted, provide } from "vue";
import { RouterView, RouterLink, useRouter } from 'vue-router';

const routers = useRouter();
const menu_router = ref([]);
console.log('111111');

const isCollapse = ref(true)


function handleSelect(key, keyPath){
  console.log('33333333333333333');
  console.log(key, keyPath);
}


function get_router_menu(){
  let name = 'Window'
  let route_list = routers.options.routes;
  for (var index = 0; index < route_list.length; index++){
    if (name === route_list[index].name){
      menu_router.value = route_list[index].children;
    }
  };
};


onMounted(() => {  // 在组件的挂载（mount）阶段完成后触发，通俗来说页面第一次加载时触发
  get_router_menu()
});  

onUnmounted(() => {  //  通常在页面切换（即路由切换）时触发，但这取决于组件是否因为路由切换而被卸载

});  

</script>

<template>
  
  <div class="top">
    <!-- <h1> 00 </h1> -->
  </div>

  <div class="left">
    <h5 class="left-h5"> 个人菜单 </h5>

    <el-menu  
      :default-active="`/window/home`" 
      class="custom-menu"  
      mode="vertical"  
      :router="true"
      @select="handleSelect"  
    >  
      <template v-for="route in menu_router" :key="route.path">  
        <el-sub-menu v-if="route.children && route.children.length > 0" :index="route.path">  
          <template #title>
            <!-- <el-icon><location /></el-icon> -->
            <span style="font-size: 18px;">{{ route.meta.title }}</span>
          </template>
          <el-menu-item 
            v-for="childRoute in route.children"  
            :key="childRoute.path"  
            :index="childRoute.path"  
          >  
            {{ childRoute.meta.title }}  
          </el-menu-item>  
        </el-sub-menu>  
        <el-menu-item v-else :index="route.path">  
          {{ route.meta.title }}  
        </el-menu-item>  
      </template>  
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
    /* position: absolute;     设置了元素的定位方式  这里回影响菜单栏的显示*/
}

.auth-main-area {
    background-color: rgb(201, 227, 233);
    width: 100%;
    height: 100%;
    /* max-width: 100%;	 */
}

/* *******************************************顶部菜单******************************************** */

.top {
  height: 50px;
  width: 100%;
  top: 0;  
  left: 0;
  position: fixed;  
  background-color: rgb(236, 243, 245);
}


/* *******************************************左侧菜单******************************************** */

.left {
  width: 220px;
  height: calc(100% - 50px);
  position: fixed;  
  top: 50px;  
  left: 0;
  background-color: rgb(201, 227, 233);
}

.left-h5 {
  height: 50px;
  width: 100%;
  margin: auto;
  font-size: 24px;
  text-align: center;
  line-height: 50px; /* 行高与高度相同，实现垂直居中 */  
  text-shadow: 5px 5px 5px #a488e1;
}

.custom-menu {
  width: 200px;
  height: calc(100% - 90px);
  top: 10px;
  left: 10px;
  
  background-color: #f5f7fa; /* 背景色 */  
  padding: 0 10px; /* 垂直内边距为0，水平内边距为10px */  
  margin-bottom: 10px; /* 垂直间隔 */ 

  display: block;
  border: 1px solid #0a0715; /* 可选，为了更清楚地看到菜单边界 */ 
  /* overflow-y: auto; // 当内容超出容器高度时显示垂直滚动条   */
}

/* 自定义菜单项样式 */  
.el-menu-item {  
  /* 你可以添加任何你想要的样式 */  
  /* 假设菜单是垂直的或你有足够的空间来设置宽度 */  
  width: 180px;
  height: 60px; 
  text-align: center;
  /* line-height: 60px; 行高与高度相同，实现垂直居中   */
  color: #313033; /* 文本颜色 */  
  font-size: 18px; /* 字体大小 */ 
  margin-bottom: 10px; /* 垂直间隔 */  
  border-radius: 4px; /* 边框圆角 */  
  
  /* 更多样式... */  
}  

.el-menu-item.is-active {  
  color: #409EFF; /* 选中时文本颜色 */  
  background-color: #082b5f; /* 选中时背景颜色 */  
  /* 其他样式... */  
}

/* 鼠标悬停时的样式 */  
.el-menu-item:hover {  
  color: #fcfdfe; /* 悬停时文本颜色 */  
  background-color: #9da1a7; /* 悬停时背景颜色 */  
  /* 其他样式，如阴影等... */  
}


  
/* 自定义子菜单标题样式 */  
.el-submenu__title {  
  /* 你可以添加任何你想要的样式 */  
  font-weight: bold; /* 标题加粗 */  
  /* 更多样式... */  
}  
  

/* *******************************************右侧窗口************************************************ */


.right {
  height: calc(100% - 50px);
  width: calc(100% - 220px);
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
  overflow-y: auto; /* 当内容超出容器高度时显示垂直滚动条 */  
  border: 1px solid #ccc; /* 可选，为了更清楚地看到菜单边界 */ 
}


</style>