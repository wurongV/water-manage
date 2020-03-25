<template>
   <el-dialog
    title="制度"
    :visible.sync="rgimeDialogFlg"
    width="38%"
    :modal-append-to-body='false'
    @close="areaDialogClosed">
      <div>
        制度图片
      </div>
    <div slot="footer">
      <el-button @click="rgimeDialogFlg = false" size="small">取消</el-button>
      <el-button type="primary" @click="rgimeDialogFlg = false" size="small">确定</el-button>
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
    }
  },
  mounted () {
    
  },
  methods: {
    areaDialogClosed() {

    }
  }
}
</script>

<style lang="less" scoped>

</style>