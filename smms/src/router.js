import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入登录组件
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    /* -------------------------------分类管理-------------------------------------------- */
    {
      path: '/management',  //分类管理
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/Management.vue')
    },
    {
      path: '/addclass',  //添加分类
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/Addclass.vue')
    },

    /* ----------------------------------商品管理--------------------------------------------------------- */
    {
      path: '/addmanagement', //添加商品
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/AddManagement.vue')
    },
    {
      path: '/merchandisecontrol', //商品管理
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/MerchandiseControl.vue')
    },




    /*-----------------------------------进货管理--------------------------------  */
    {
      path: '/inventory', //库存管理
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/Inventory.vue')
    },
    {
      path: '/addinventory',  //添加库存
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/AddInventory.vue')
    },

    /* --------------------------------------出货管理----------------------------------------- */
    {
      path: '/saleslist',  //销售列表
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/SalesList.vue')
    },
    {
      path: '/output',  //商品出库
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/Output.vue')
    },
    {
      path: '/salesreturn',  //商品退货
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/SalesReturn.vue')
    },
    /* ---------------------------统计管理---------------------------------------- */
    {
      path: '/salesinfo',  //销售统计
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/Salesinfo.vue')
    },
    {
      path: '/stockinfo',  //进货统计
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/Stockinfo.vue')
    },

    /* ---------------------------------------账号管理------------------------------------------- */
    {
      path: '/useradd', //添加账号
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/UserAdd.vue')
    },
    {
      path: '/userlist',  //账号管理
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/UserList.vue')
    },
    {
      path: '/userpwdedit',  //密码修改
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/UserPwdEdit.vue')
    },

    /* ---------------------------------------会员管理---------------------------------------------------- */
    {
      path: '/member', //会员管理
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/Member.vue')
    },
    {
      path: '/memberadd', //会员添加
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/MemberAdd.vue')
    },
    /* ---------------------------------------系统管理---------------------------------------------------------- */
    {
      path: '/systeminformation', //系统信息
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/SystemInformation.vue')
    },
    {
      path: '/systemlayout', //系统配置
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/SystemLayout.vue')
    },
    {
      path: '/authoritymanagement', //权限管理
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/AuthorityManagement.vue')
    },
    {
      path: '/addadmin', //添加管理组
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/AddAdmin.vue')
    },
  ]
})
