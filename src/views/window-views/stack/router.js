// 定义一个路由数组，统一管理路由
  
  const catalog_router = [
    {
      path: 'catalog',
      name: 'Catalog',
      component: () => import('@/views/window-views/stack/catalog.vue'),
      meta: {
          title: '目录',  
      }
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('@/views/window-views/stack/role.vue'),
      meta: {
          title: '角色',  
      }
    },
  ]
  
  
  export default catalog_router