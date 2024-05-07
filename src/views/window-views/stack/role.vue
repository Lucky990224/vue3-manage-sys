<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Auths } from '@/store/auth';
import { HttpClient } from "../../components/client";
import app_settings from '../settings';
import axios from 'axios';

alert("url = "+ app_settings.login_url);  
const login_client = new HttpClient(app_settings.login_url);

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
