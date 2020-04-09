<template>
   <el-dialog
    title="制度编辑"
    :visible.sync="rgimeDialogFlg"
    width="44%"
    :modal-append-to-body='false'
    @close="areaDialogClosed">
    <editor 
      id="tinymce" 
      v-model="tinymceHtml"
      :init="init" />
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
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme' 
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/skins/ui/oxide/skin.css'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
  components: {
    Editor
  },
  props: {
    rgimeFlg: Boolean
  },
  data () {
    return {
      rgimeDialogFlg: false,
      tinymceHtml: '',
      init: {
        language_url: '/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/default',
        height: 300,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,
        //base64的图片形式上传图片
        images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        }  
      }
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
    // 初始化
    tinymce.init({})
  },
  methods: {
    areaDialogClosed() {
      this.tinymceHtml = ''
    },
    rgimeBtn() {
      this.rgimeDialogFlg = false
      console.log(this.tinymceHtml)
      this.tinymceHtml = ''
    },

  }
}
</script>

<style lang="less" scoped>

</style>