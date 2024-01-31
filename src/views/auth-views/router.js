// 定义一个路由数组，统一管理路由
const auth_routes = [
  {
    path: 'login',
    name: 'Login',
    component: () => import('@/views/auth-views/Login.vue'),
  },
  {
    path: 'sign-up',
    name: 'Sign-up',
    component: () => import('@/components/HelloWorld.vue'),
  }
]


export default auth_routes