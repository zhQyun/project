<template>
  <div class="login">
    <div class="loginbox">
    <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">

					<el-form-item prop="username">
						<el-input v-model="ruleForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
					</el-form-item>
					<el-form>
					<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				</el-form>
				</el-form>
  

    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
     var username = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
      
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.password !== '') {
            this.$refs.ruleForm.validateField('password');
          }
          callback();
        }
      };
  
      return {
        ruleForm: {
          username: '',
          password: '',
         
        },
        rules: {
        
          useranme: [
            { validator: username, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
   
  methods: {
    submitForm() {
      this.$router.push('about')
    }
  },
};
</script>
<style >
html,
body {
  height: 100%;
  overflow: hidden;
}
.login {
  padding-top: 200px;
  height: 100%;
  width: 100%;
  background-color: #333;
}
.loginbox {
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  margin-top: 200px;
  width: 300px;
  margin: 0 auto;
}

.el-form-item__content {
  margin-left: 0;
}

</style>