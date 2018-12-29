<template>
  <el-aside width="230px" class="asideLeft">
    <!-- 左侧顶部内容 -->
    <div id="leftTitle">
      <h2>华联超市管理系统</h2>
      <p>您好， admin</p>
      <p>
        <router-link to="/">管理首页</router-link>
        <a> | 退出系统</a>
      </p>
    </div>
    <!-- 左侧菜单 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
    >
      <!-- 第一个菜单 -->
      <el-submenu index="1">
        <template slot="title">
          <span>分类管理</span>
        </template>
        <el-menu-item index="/management"><router-link to="/management">分类管理</router-link> </el-menu-item>
        <el-menu-item index="/addclass"><router-link to="/addclass">添加分类</router-link> </el-menu-item>
      </el-submenu>
      <!-- 第二个子菜单 -->
      <el-submenu index="2">
        <template slot="title">
          <span>商品管理</span>
        </template>
        <el-menu-item index="2-1">商品管理</el-menu-item>
        <el-menu-item index="2-2">添加商品</el-menu-item>
      </el-submenu>
      <!-- 第三个子菜单 -->
      <el-submenu index="3">
        <template slot="title">
          <span>进货管理</span>
        </template>
        <el-menu-item index="/inventory"><router-link to="/inventory">库存管理</router-link> </el-menu-item>
        <el-menu-item index="/addinventory"><router-link to="/addinventory">添加库存</router-link> </el-menu-item>
      </el-submenu>
      <!-- 第四个子菜单 -->
      <el-submenu index="4">
        <template slot="title">
          <span>出货管理</span>
        </template>
        <el-menu-item index="4-1">销售列表</el-menu-item>
        <el-menu-item index="4-2">商品出库</el-menu-item>
        <el-menu-item index="4-3">商品退货</el-menu-item>
      </el-submenu>
      <!-- 第五个子菜单 -->
      <el-submenu index="5">
        <template slot="title">
          <span>统计管理</span>
        </template>
        <el-menu-item index="/salesinfo"><router-link to="/salesinfo">销售统计</router-link> </el-menu-item>
        <el-menu-item index="/stockinfo"><router-link to="/stockinfo">进货统计</router-link> </el-menu-item>
      </el-submenu>
      <!-- 第六个子菜单 -->
      <el-submenu index="6">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <el-menu-item index="/userlist"><router-link to="/userlist">账号管理</router-link></el-menu-item>
        <el-menu-item index="/useradd"><router-link to="/useradd">添加账号</router-link></el-menu-item>
        <el-menu-item index="/userpwdedit"><router-link to="/userpwdedit">密码修改</router-link></el-menu-item>
      </el-submenu>
      <!-- 第七个子菜单 -->
      <el-submenu index="7">
        <template slot="title">
          <span>会员管理</span>
        </template>
        <el-menu-item index="7-1">账号管理</el-menu-item>
        <el-menu-item index="7-2">添加账号</el-menu-item>
      </el-submenu>
      <!-- 第八个子菜单 -->
      <el-submenu index="8">
        <template slot="title">
          <span>系统管理</span>
        </template>
        <el-menu-item index="8-1">系统信息</el-menu-item>
        <el-menu-item index="8-2">系统配置</el-menu-item>
        <el-menu-item index="8-3">权限管理</el-menu-item>
        <el-menu-item index="8-4">添加管理组</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  //菜单展开和收起的方法
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    }
  }
};
</script>
<style>
</style>

