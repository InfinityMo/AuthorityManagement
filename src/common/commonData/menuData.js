// export default [
//   {
//     pId: '1',
//     pTitle: '用户管理',
//     icon: 'user',
//     pPath: '/'
//   },
//   {
//     pId: '2',
//     pTitle: '商品管理',
//     icon: 'commodity',
//     children: [{
//       path: '/commodity/add',
//       title: '添加'
//     }, {
//       path: '/commodity/unreleased',
//       title: '未发布'
//     }, {
//       path: '/commodity/released',
//       title: '已发布'
//     }, {
//       path: '/commodity/off',
//       title: '已下架'
//     }
//     ]
//   },
//   {
//     pId: '3',
//     pTitle: '订单管理',
//     icon: 'order',
//     pPath: '/order/orderManage'
//   },
//   {
//     pId: '4',
//     pTitle: '购物车管理',
//     icon: 'shopCart',
//     pPath: '/shop/cartManage'
//   },
//   {
//     pId: '5',
//     pTitle: '积分管理',
//     icon: 'integral',
//     pPath: '/integral/integralManage'
//   }
// ]

export default [
  {
    pId: '1',
    pTitle: '系统信息管理',
    icon: 'icon-information-16',
    pPath: '/system',
    children: [{
      path: '/system/add',
      title: '新增系统'
    }, {
      path: '/system/role',
      title: '角色编辑'
    }, {
      path: '/system/manage',
      title: '系统管理'
    }
    ]
  },
  {
    pId: '2',
    pTitle: '员工管理',
    icon: 'icon-staff-16',
    pPath: '/staff/staffManage'
  },
  {
    pId: '3',
    pTitle: '部门管理',
    icon: 'icon-dept-16',
    pPath: '/department/deptManage'
  },
  {
    pId: '4',
    pTitle: '店铺管理',
    icon: 'icon-shop-16',
    pPath: '/shop/shopManage'
  }
]
