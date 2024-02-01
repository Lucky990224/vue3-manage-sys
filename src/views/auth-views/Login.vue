<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Auths } from '@/store/auth';

const router = useRouter();
const auths = Auths();
auths.$reset();            // 重置所有块、按钮显示状态

const isCheckbox = ref(true);
const activeName = ref(1)  // 0：验证码登录；1：密码登录
function handleClick1(){
  activeName.value = 0;
  isCheckbox.value = false; 
  console.log('activeName1 = ' + activeName.value)
}

function handleClick2(){
  activeName.value = 1;
  isCheckbox.value = true; 
  console.log('activeName2 = ' + activeName.value)
}

const act = ref('');
const pwd = ref('');


function onclick1(){
  var para = 'hello world';
  window.alert("这是一个弹窗提示!"+ para);  
  // router.push('/');                   // vue3 第二种跳转方式 通过路由字段
  // router.push({name: 'home'});            // vue3 第二种跳转方式 通过name字段
  // router.push(`/helloworld`);                   // vue3 第二种跳转方式 通过路由字段
  // router.push(`/helloworld?msg=${para}`);                   // vue3 第二种跳转方式 通过路由字段
  // router.push({name: 'helloworld',params: {msg: para}});            // vue3 带参跳转 通过命令字段
  router.push({name: 'Sign-up', query: {msg: para}});            // vue3 带参跳转 通过命令字段
  // router.push({path: '/auth/sign-up', query: {msg: para}});            // vue3 带参跳转 通过命令字段
  // 带查询参数，变成 /helloworld?msg=hello world
}

function onclick2(){
  auths.isShow.div1 = false;
}
function onclick3(){
  auths.isShow.div1 = true;
}

function checkedIds(){
  console.log('记住账号');
}

</script>

<template>
  <div id="auth-box">
    <div class="box-up">
      <h3 class="logo-name-h3">Login</h3>
    </div>
    <div class="box-done">
      <div>
        <button id="handle1" @click="handleClick1">验证码登录</button>
        <button id="handle2" @click="handleClick2">密码登录</button>
      </div>
      <div>
        <el-input v-model=act placeholder="账号/邮箱" />
      </div>
      <div>
        <el-input v-model=pwd type="password" prefix-icon="el-icon-lock" placeholder="输入登录密码" show-password/>
      </div>
      <div>
        <label v-show=isCheckbox><input type="checkbox"  v-model='checkedIds'>记住账号</label>
        <router-link to="/">跳转首页</router-link> 
      </div>
      <div><button id="submit1" @click="onclick1">登 录</button></div>
      <div>
        <div>
          <button id="submit2" @click="onclick2"> 注册账号 </button>
          <button id="submit3" @click="onclick3"> 忘记密码 </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
#auth-box {
  display:Flexbox;   /* 设置布局 */
  /* justify-content: center; */
  position: absolute;	
  top: 25%;
  right: 10%;
  width: 400px; 
  height: 500px; 
  z-index: 1;
}

#auth-box ::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 1px solid #4738b7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.box-up {
  height: 10%;
  width: 100%;
}

.logo-name-h3 {
  left: 5%;
  height: 100%;
}

</style>
