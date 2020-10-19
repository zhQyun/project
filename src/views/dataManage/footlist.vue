<template>
  <div class="footlist">
      <heads></heads>
      <div class="box-1">
         <div class="nav">
          <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">食品列表</a></el-breadcrumb-item>
      </el-breadcrumb>
     </div>
      </div>
  </div>
</template>

<script>
import heads from '../headTop'
export default {
components :{
    heads
}
}
</script>

<style>
.box-1 {
  margin: 20px;
}
</style>