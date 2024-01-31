// 定义一个路由数组，统一管理路由
const auth_routes = [
  {
    path: 'login',
    name: 'Login',
    component: () => import('@/views/auth-views/login.vue'),
    meta: {
        title: '登录',  
    }
  },
  {
    path: 'sign-up',
    name: 'Sign-up',
    component: () => import('@/views/auth-views/sign-up.vue'),
    meta: {
        title: '注册',  
    },
  },
  {
    path: 'password',
    name: 'Password',
    component: () => import('@/views/auth-views/password.vue'),
    meta: {
      title: '找回密码',  
    },
  }
]


export default auth_routes