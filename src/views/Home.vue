<template>
  <div>
    <div class="box">
      <el-row class="tac">
        <el-col :span="24" class="tac1">
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            background-color="#545c64" 
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="0">
              <template slot="title" >
                <i class="el-icon-location"></i>
                <span>首页</span>
              </template>
           
            </el-submenu>
             <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-bell"></i>
                <span>关于</span>
              </template>
              <el-menu-item-group>
                <router-link to="/about">
                  <el-menu-item index="1-1">关于</el-menu-item>
                </router-link>
              
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-star-off"></i>
                <span>图表</span>
              </template>
              <el-menu-item-group>
                <router-link to="/chart">
                  <el-menu-item index="2-1">数据可视化</el-menu-item>
                </router-link>
              
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-notebook-2"></i>
                <span>数据管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/userlist">
                  <el-menu-item index="3-1">用户列表</el-menu-item>
                </router-link>
               <router-link to="/footlist">
                  <el-menu-item index="3-2">食品列表</el-menu-item>
                </router-link>
               <router-link to="/order">
                  <el-menu-item index="3-3">订单管理</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>设置</span>
              </template>
              <el-menu-item-group>
                <router-link to="/userset">
                  <el-menu-item index="4-1">用户设置</el-menu-item>
                </router-link>
              
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",

  data() {
    return {};
  },
  methods: {
  
  },
};
</script>
<style scoped >
a {
  text-decoration: none;
}

.tac1 {
  text-align: left;
  height: 100vh;
  background: rgb(84, 92, 100);
}
.tac {
  width: 210px;
}
</style>