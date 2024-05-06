// 定义一个路由数组，统一管理路由
const window_router = [
  {
    path: 'home',
    name: 'Home1',
    component: () => import('@/views/window-views/home.vue'),
    meta: {
        title: '首页',  
    }
  },
  {
    path: 'stock',
    name: 'Stock',
    component: () => import('@/views/window-views/stock.vue'),
    meta: {
        title: '股票',  
    },
  },
  {
    path: 'script',
    name: 'Script',
     component: () => import('@/views/window-views/script.vue'),
    meta: {
        title: '脚本',  
    },
  }
]


export default window_router