<template>
  <div class="order">
<heads></heads>
<div class="box-1">
       <div class="nav">
          <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">用户列表</a></el-breadcrumb-item>
      </el-breadcrumb>
     </div>
     <!-- 搜索框 -->
    <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="80px" size="mini" >
  <el-form-item label="搜索:">
    <el-input v-model="formInline.machineNo" placeholder="输入编号"></el-input>
    </el-form-item>
<el-form-item >
    <el-input v-model="formInline.orderNo" placeholder="输入订单号"></el-input>
    </el-form-item>
    <el-form-item >
    <el-input v-model="formInline.transId" placeholder="输入交易单号"></el-input>
  </el-form-item>
  <el-form-item label="请选择">
    <el-select v-model="formInline.orderStatus" placeholder="状态">
      <el-option v-for="type in payway" :label="type.key" :value="type.value" :key="type.value"></el-option>
     
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
    </div>
<!-- 列表 -->
    <div class="orderList">
    <el-table size="small"  highlight-current-row  border  style="width: 93%;"  :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)" >
      <el-table-column align="center" type="index" width="60">
      </el-table-column>
      <el-table-column sortable prop="machineNo" label="终端编号" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="orderNo" label="订单号" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="transId" label="交易单号" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="payType" label="支付方式" width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="transType" label="交易类型" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="goodsPrice" label="商品价格" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="payAmount" label="支付金额" width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="goodsName" label="商品名称" width="140" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="orderStatus" label="订单状态" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="addTime" label="创建时间" width="180" show-overflow-tooltip>
      </el-table-column>
      <el-table-column  label="操作"  >
        <template slot-scope="scope">
         <el-button mini type="danger"  @click="deleteUser(scope.$index,scope.row)">退款</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <!-- 分页 -->
  <div class="block">
   
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 9,19, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="data.length">
    </el-pagination>
  </div>
  <!-- 预览页 -->

</div>
  </div>
</template>

<script>
import heads from "../headTop"
export default {
name:'order',
components :{
    heads
},
  data() {
      return {
        currentPage:1, 
        pagesize:5,  
        formInline: {
          machineNo: '',
          orderNo: '',
          transId:'',
          orderStatus:0
        },
        payway: [
        { key: '请选择', value: 0 },
        { key: '初始化', value: 1 },
        { key: '已支付', value: 2 },
        { key: '出货成功', value: 3 },
        { key: '出货失败', value: 4 },
        { key: '订单超时', value: 5 },
        { key: '退款初始化', value: 6 },
        { key: '退款进行中', value: 7 },
        { key: '退款成功', value: 8 },
        { key: '退款失败', value: 9 },
        { key: '订单处理中', value: 10 }
      ],
        data: [
          {
            addUser: null,
            editUser: null,
            addTime: 1526380193000,
            editTime: 1526380193000,
            orderId: 109,
            deptId: 1,
            deptName: 'xxxx',
            orderNo: 'xxxx',
            transId: 'xxxx',
            payType: 6,
            subPayType: 'WXPay',
            transType: '退款',
            machineNo: '111111',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: -0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 14,
            openId: null,
            mchId: '111111111111111',
            subMchId: null,
            remark: '不允许从此IP发起交易: 101.81.251.226'
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1526380176000,
            editTime: 1526380176000,
            orderId: 108,
            deptId: 1,
            deptName: 'xxxxxx',
            orderNo: 'xxxx',
            transId: 'xxxxx',
            payType: 6,
            subPayType: 'WXPay',
            transType: '退款',
            machineNo: 'J1AX904002',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: -0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 14,
            openId: null,
            mchId: '898310154990338',
            subMchId: null,
            remark: '不允许从此IP发起交易: 101.81.251.226'
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1524921444000,
            editTime: 1524894094000,
            orderId: 107,
            deptId: 1,
            deptName: 'xxxxxx',
            orderNo: 'J1AX90400220180428101723945',
            transId: '4200000137201804287543647891',
            payType: 6,
            subPayType: 'WXPay',
            transType: '消费',
            machineNo: 'J1AX904002',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: 0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 7,
            openId: null,
            mchId: '898310154990338',
            subMchId: null,
            remark: '无法找到指定的账单'
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1521307596000,
            editTime: 1524641207000,
            orderId: 20,
            deptId: 1,
            deptName: 'xxxx',
            orderNo: '9300079120180318142634440',
            transId: null,
            payType: 0,
            subPayType: '0',
            transType: '消费',
            machineNo: '111111111111111',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: 0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 7,
            openId: null,
            mchId: null,
            subMchId: null,
            remark: '1111111111111111111111'
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1520195909000,
            editTime: 1520195909000,
            orderId: 19,
            deptId: 1,
            deptName: 'xxxx',
            orderNo: '9300079120180305183828606',
            transId: null,
            payType: 0,
            subPayType: '0',
            transType: '消费',
            machineNo: '93000791',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: 0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 1,
            openId: null,
            mchId: null,
            subMchId: null,
            remark: null
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1520035180000,
            editTime: 1520035180000,
            orderId: 18,
            deptId: 1,
            deptName: 'xxxx',
            orderNo: '4200000056201803031934477774',
            transId: '9300079120180303170851281',
            payType: 6,
            subPayType: 'WXPay',
            transType: '退款',
            machineNo: '222222222222222222',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: 0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 8,
            openId: null,
            mchId: '898310154990338',
            subMchId: null,
            remark: null
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1520020261000,
            editTime: 1520185478000,
            orderId: 17,
            deptId: 1,
            deptName: 'xxxx',
            orderNo: '9300079120180303175059985',
            transId: '4200000072201803031887274444',
            payType: 6,
            subPayType: 'WXPay',
            transType: '消费',
            machineNo: '93000791',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: 0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 7,
            openId: null,
            mchId: '898310154990338',
            subMchId: null,
            remark: '不允许从此IP发起交易: 116.247.119.165'
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1520019911000,
            editTime: 1520020075000,
            orderId: 16,
            deptId: 1,
            deptName: 'xxxx',
            orderNo: '9300079120180303174511778',
            transId: '4200000055201803031949877221',
            payType: 6,
            subPayType: 'WXPay',
            transType: '消费',
            machineNo: '93000791',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: 0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 1,
            openId: null,
            mchId: '898310154990338',
            subMchId: null,
            remark: null
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1520019776000,
            editTime: 1520019776000,
            orderId: 15,
            deptId: 1,
            deptName: 'xxxx',
            orderNo: '9300079120180303174256156',
            transId: null,
            payType: 0,
            subPayType: '0',
            transType: '消费',
            machineNo: '93000791',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: 0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 1,
            openId: null,
            mchId: null,
            subMchId: null,
            remark: null
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1520019729000,
            editTime: 1520019729000,
            orderId: 14,
            deptId: 1,
            deptName: '上海XX',
            orderNo: '9300079120180303174208429',
            transId: null,
            payType: 0,
            subPayType: '0',
            transType: '消费',
            machineNo: '93000791',
            goodsNo: '123456',
            goodsPrice: 0.01,
            payAmount: 0.01,
            goodsName: '可乐',
            aisleNo: null,
            orderStatus: 1,
            openId: null,
            mchId: null,
            subMchId: null,
            remark: null
          }
        ]
   
      }
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
      },
      //删除
      deleteUser(index, row) {
          
          this.$confirm('确定退款吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            console.log(this.data)
            console.log(row)
            // console.log(index);
          this.$message({
            type: 'success',
            message: '退款成功!'
          });
         this.data.splice(index,1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退款'
          }); 
        
        });
    },

    }
}
</script>

<style scoped>
.box-1 {
    margin: 20px;
}
.search {
    margin: 40px 0 10px 0;
    text-align: left;
}

</style>