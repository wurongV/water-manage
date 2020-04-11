<template>
  <header class="header">
    <div class="header_left">
      <span>福州市总工会</span>
      <el-dropdown trigger="click"  @command="dropCommand">
        <span class="el-dropdown-link">
          {{'(' + rootLevel +')'}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="mainLevel">工人文化宫</el-dropdown-item>
          <el-dropdown-item command="nextLevel">下级别水表</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="header_center">
      <span>公共机构节水监测系统</span>
    </div>
    <ul class="header_right">
      <li @click="logout">返回</li>
      <li @click="rgimeFlg=true">制度</li>
    </ul>
    <rgimeDialog 
      :rgimeFlg="rgimeFlg"
      @rgime-dialogFlg="rgimeDialogFlg"/>    
  </header>

</template>

<script>
import rgimeDialog from './regimeDialog'
export default {
  components: {
    rgimeDialog,
  },
  data() {
    return {
      rootLevel: '工人文化宫',
      rgimeFlg: false,
    }
  },
  watch: {

  },
  mounted() {

  },
  methods: {
    logout() {
      this.$router.push('/home')
    },
    dropCommand(command) {
      command == 'mainLevel' ? this.rootLevel = '工人文化宫' : this.rootLevel = '下级别水表'
    },
    rgimeDialogFlg(val) {
      this.rgimeFlg = val
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 99;
    .header_left {
      width: 260px;
      height: 40px;
      position: absolute;
      top: 20%;
      left: 4%;
      >span {
        padding-right: 6px;
      }
    }
    .header_center {
      width: 46%;
      line-height: 60px;
      margin: 0 auto;
      text-align: center;
      >span {
        line-height: 60px;
        font-size: 26px;
        font-weight: 700;
        letter-spacing: 2px;
        mask-image: linear-gradient(rgba(52, 54, 136, 1), transparent)    
      }
    }
    .header_right {
      width: 200px;
      height: 40px;
      position: absolute;
      top: 20%;
      right: 4%;    
      >li {
        // color: #c3dbff;
        letter-spacing: 1px;
        cursor: pointer;
        float: right;
        &:last-child {
          padding-right: 28px;
        }
        &:hover {
          color: #409EFF;
        }
      }
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #dedede;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }


  }
</style>