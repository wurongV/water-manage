<template>
   <el-dialog
    title="制度编辑"
    :visible.sync="rgimeDialogFlg"
    width="45%"
    :modal-append-to-body='false'
    @close="regimeDialogClosed">
    <div>
      显示传过来的制度
    </div>
    <div slot="footer">
      <el-button 
        @click="rgimeDialogFlg = false" 
        size="small">
        <span>取消</span>
      </el-button>
      <el-button 
        type="primary" 
        @click="rgimeBtn" 
        size="small">
        <span>确定</span>
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    rgimeFlg: Boolean
  },
  data () {
    return {
      rgimeDialogFlg: false,
    }
  },
  watch: {
    rgimeFlg(val) {
      this.rgimeDialogFlg = val
    },
    rgimeDialogFlg(val) {
      this.$emit('rgime-dialogFlg', val)
    },

  },
  mounted () {

  },
  methods: {
    regimeDialogClosed() {
      this.tinymceHtml = ''
    },
    rgimeBtn() {
      this.rgimeDialogFlg = false
    },

  }
}
</script>

<style lang="less" scoped>

</style>