import { defineStore } from 'pinia'

export const Auths = defineStore('auths', {
  // 每次需要关闭浏览器窗口，上文中保存的登录状态才能清空，否则一直在浏览器中存储
  state: () => ({
    // 登录状态
    isLogin: false,         
    // 登录用户信息
    userInfo: {
      userNmae: null,
      userPhone: null
    }

  }),

  getters: {
    
  },
  
  actions: {
    setLogInState(userInfo){
      this.isLogin = true;
      this.userInfo.userNmae = userInfo.username;
      this.userInfo.userPhone = userInfo.userphone;
    },

    resLogInState(){
      this.isLogin = false;
      this.userInfo.userNmae = null;
      this.userInfo.userPhone = null;
    }
  },

  // 开启持久化, 意义是刷新页面后数据不会丢失[需要安装持久化插件]
  persist: true,
})
