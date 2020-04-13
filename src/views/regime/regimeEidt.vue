<template>
  <el-card>
    <div class="editor" ref="editorRef">
      <editor 
        id="tinymce" 
        v-model="tinymceHtml"
        :init="initData" />
        <div class="btns">
          <el-button
            @click="setCancel"
            size="small"
            type="info">
            <span>取消</span>
          </el-button>
          <el-button
            @click="setConfirm"
            size="small"
            type="primary">
            <span>确定</span>
          </el-button>
        </div>
    </div>
  </el-card>
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
    Editor,
  },
  data () {
    return {
      tinymceHtml: '',
      initData: {
        language_url: '/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/default',
        height: 600,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu ',
        toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignrightalignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,
        //base64的图片形式上传图片
        images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img) 
        }         
      },

    }
  },
  methods: {
    
  },
  created () {  
  },
  mounted () {
    
    // 初始化
    tinymce.init({})  
  
  },
  methods: {
    areaDialogClosed() {
      this.tinymceHtml = ''
    },
    setCancel() {
      this.tinymceHtml = ''
    },
    setConfirm() {
      console.log(this.tinymceHtml)

      // 传后台
      this.$message({
        message: '发送成功',
        type: 'success'
      })
      this.tinymceHtml = ''
    },
   
  }
}
</script>

<style lang="less" scoped>
  .el-card {
    width: 88%;
    height: 88%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .editor {
      width: 100%;
      height: 100%;
      .btns {
        display: flex;
        justify-content: flex-end; 
        padding-top: 10px;       
      }      
    }
  }
</style>