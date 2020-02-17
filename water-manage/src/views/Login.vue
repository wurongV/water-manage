<template>
  <div class="login_containter">
    <div class="login_bgc"></div>
    <div class="login_box">
      <div class="login_icon"></div>
      <div class="login_title">节水监测云平台</div>
      <el-form
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
        label-width="0px"
        class="login_form">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
            type="text"
            placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            :type="pwdType"
            placeholder="请输入密码">
            <i 
              slot="suffix" 
              class="el-icon-view" 
              @click="showPwd" 
              style="cursor:pointer">
            </i>
          </el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button 
            type="primary" 
            size="small" 
            @click="login" 
            style="margin-left:50px;">
              登录
          </el-button>
          <el-button 
            type="info" 
            size="small" 
            @click="resetLoginForm">
              重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 10,
            message: '用户名长度在1个字符到10个字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 15,
            message: '密码长度在1个字符到15个字符之间',
            trigger: 'blur'
          }
        ]
      },
      pwdType: 'password',
    };
  },
  created() {
    let that = this;
    document.onkeydown = function() {
      let key = window.event.keyCode;
      //登录界面enter
      if (that.$route.path === '/login' && key === 13) {
        that.login();
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (valid) {
          // console.log('登录成功');
          this.$router.push('/home')
        }
      });
    },
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 是否显示密码
    showPwd() {
      this.pwdType == 'password' ? (this.pwdType = 'text') : (this.pwdType = 'password');
    }
  }  

}
</script>

<style lang="less" scoped>

  .login_containter {
    box-sizing:border-box;
    width: 100%;
    height: 100%;
    position: relative;
    .login_bgc {
      width: 100%;
      height: 220px;
      background-color: #199ED8;
      position: absolute;
      top: 50%;      
      margin-top: -110px
    }

    .login_box {
      width: 330px;
      height: 410px;  
      z-index: 99;
      background-color: #fff;
      border-top: 10px solid #199ED8;
      border-radius: 2px;
      -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
      -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35); 

      box-sizing:border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);	
      -moz-transform: translate(-50%, -50%);	
      -webkit-transform: translate(-50%, -50%); 
      -o-transform: translate(-50%, -50%);  
      .login_icon {
        width: 60px;
        height: 60px;
        margin: 16px auto;
        background: url('../assets/image/登录.png') no-repeat center center;
        background-size: contain;
      }
      .login_title {        
        text-align: center;
        font-size: 24px;
        color: #199ED8;
        font-weight: bold;  
        margin-bottom: 20px; 
      }

      .login_form {
        padding: 0 28px;
        .btns {
          display: flex;
          justify-content: flex-end;
          // 自定义 type = primary 颜色
          .el-button--primary {
            color: #fff;
            background-color: #199ED8;
            border-color: #199ED8;
          }
        }
      }
    }
  }
</style>