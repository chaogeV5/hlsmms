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
      component:Login
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
      component: () => import(/* webpackChunkName: "about" */ './views/Addinventory.vue')
    }
  ]
})
