<template>
<el-dialog
  title="修改密码"
  :visible.sync="modifyPwdDialogFlg"
  width="30%"
  @close="dialogClose">
  <el-form
    ref="modifyPwdFormRef"
    :rules="modifyPwdFormRules"
    :model="modifyPwdForm" 
    label-width="80px">  
    <el-form-item label="原密码" prop="oldPwd">
      <el-input 
        size="small" 
        v-model="modifyPwdForm.oldPwd"
        type="password" />
    </el-form-item>
    <el-form-item label="新密码" prop="newPwd">
      <el-input 
        size="small" 
        v-model="modifyPwdForm.newPwd"
        type="password" />
    </el-form-item>    
    <el-form-item label="确认密码" prop="checkPass">
      <el-input 
        size="small" 
        type="password" 
        v-model="modifyPwdForm.checkPass" />
    </el-form-item>        
  </el-form>
  <div slot="footer">
    <el-button 
      @click="modifyPwdDialogFlg = false"
      size="mini">
      <span>取 消</span>
    </el-button>
    <el-button 
      type="primary" 
      @click="modifyPwdBtn"
      size="mini">
      <span>确 定</span>
    </el-button>
  </div>
</el-dialog>
</template>

<script>
import util from '@/mixins/util'
export default {
  props: {
    modifyPwdFlg: Boolean
  },
  data() {
    var checkPwdPass = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请再次输入密码'));
      } else if (value !== this.modifyPwdForm.newPwd) {
          callback(new Error('两次输入密码不一致!'));
      } else {
          callback();
      }
    }
    return {
      modifyPwdDialogFlg: false,
      modifyPwdForm: {
        oldPwd: '',
        newPwd: '',
        checkPass: ''
      },
      modifyPwdFormRules: {
        oldPwd: [
          {required: true, message: '请输入原密码', trigger: 'blur'}
        ],
        newPwd: [
          {required: true, message: '请输入新密码', trigger: 'blur'}
        ],
        checkPass: [
          {required: true, validator: checkPwdPass, trigger: 'blur'}
        ]
      }
    }
  },
  watch: {
    modifyPwdFlg(val) {
      val ? this.modifyPwdDialogFlg = val : ''
    },
    modifyPwdDialogFlg(val) {
      this.$emit('modifyPwdFialog-flg', val)
      
    } 
  },
  mounted() {

  },
  methods: {
    dialogClose() {
      this.$refs.modifyPwdFormRef.resetFields()
    },
    modifyPwdBtn() {
      this.$refs.modifyPwdFormRef.validate(async valid => {
        if(valid) {

         
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>

</style>