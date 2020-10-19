<template>
  <div class="headtop">
        <div class="header_container">
		<el-breadcrumb separator="/">
  
</el-breadcrumb>
	<div class="user">
        <el-dropdown >
  <span class="el-dropdown-link">
    管理员<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人中心</el-dropdown-item>
    <el-dropdown-item > <el-button type="text" @click="open">退出登录</el-button></el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>
         </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"headTop",
    methods: {
        open() {
        this.$confirm('退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({ path: '/login' })
          this.$message({
            type: 'success',
            message: '退出登录!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });          
        });
      }
    }
}
</script>
<style >
    .main {
        width: 100%;
    }
	.header_container{
		background-color: #545c64;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
        width: 100%;
	}

	.el-dropdown-menu__item{
        text-align: center;
    }
    .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .user {
      padding-right:40px ;
  }
</style>
