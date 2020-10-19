<template>
  <div class="userlist">
    <heads></heads>
    <div class="box">
     <div class="nav">
          <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">用户列表</a></el-breadcrumb-item>
      </el-breadcrumb>
     </div>
<div class="search">
    
      <el-form :inline="true" :model="formInline"  class="demo-form-inline" label-width="80px" size="mini">
        <el-form-item label="搜索">
          <el-input v-model="formInline.userName" placeholder="输入姓名"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="formInline.userId" placeholder="输入id"></el-input>
        </el-form-item>
       
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
</div>
<div class="userlist">
      <el-table
    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    border
    style="width: 90%">
    <el-table-column
      prop="userId"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="userName"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
      <el-table-column
        prop="phonenumber"
        label="联系电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
  </el-table>
</div>
  <div class="block">
   
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="15">
    </el-pagination>
  </div>
    </div>
  </div>
</template>

<script>
import heads from "../headTop";
export default {
  components: {
    heads,
  },
  data() {
    return {
      currentPage:1, 
      pagesize:5,  
      formInline: {
        userName: "",
        userId: "",
      },
       tableData: [{
          userId: '02',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        }, {
          userId: '04',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        }, {
          userId: '01',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        }, {
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },{
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },{
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },{
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },{
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },{
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },{
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },{
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },{
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },{
          userId: '03',
          userName: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phonenumber:'13455599776',
          date:'2016-8-8'
        },]
    };
    
  },
  methods: {
      onSubmit() {
        console.log('submit!');
      },
        handleSizeChange(val) {
          this.pagesize = val;
               
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
         this.currentPage = val;
      }
    }
};
</script>

<style  scoped>
.box {
  margin: 20px;
}
.search {
    margin: 40px 0 10px 0;
    text-align: left;
}
.block {
  padding:20px;
  text-align: left;
}

</style>