import catalog_router from '@/views/window-views/stack/router'

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
  },
  {
    path: 'stack',
    name: 'Stack',
    // component: () => import('@/views/window-views/router-layout.vue'),
    meta: {
        title: '书库',  
    },
    redirect: "/window/stack/catalog",
    children: catalog_router
  }
]


export default window_router