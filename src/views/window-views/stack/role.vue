<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Auths } from '@/store/auth';
import axios from 'axios';

alert("url = ");  

const router = useRouter();
const auths = Auths();

const isCheckbox = ref(true);
const activeName = ref(1)  // 0：验证码登录；1：密码登录
const act = ref('');
const pwd = ref('');


</script>

<template>
  <div id="auth-box">
    <h1> role </h1>
  </div>
</template>

<style>


</style>
