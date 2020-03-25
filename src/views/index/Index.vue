<template>
  <!-- <dv-full-screen-container> -->
  <el-container class="index_container">
    <indexHeader class="index_header"/>
    <el-main class="index_mainWrap">
      <div class="main_contentFlex">
        <!-- 左边模块 -->
        <div class="col_l">
          <waterAnalyze />
          <waterPlan />
          <waterSaving />
        </div>
        <!-- 中 -->
        <div class="col_c">
          <waterSupplyMonitor />
          <waterBalance />
        </div>
        <!-- 右边模块 -->
        <div class="col_r">
          <deviceManager />
          <waterHistory />
          <waterLeak />
        </div>    
      </div>
    </el-main>
  </el-container>
  <!-- </dv-full-screen-container> -->
</template>

<script>
import borderBox from '../../components/borderBox'
import indexHeader from './components/indexHeader.vue'
import waterAnalyze from './components/waterAnalyze.vue'
import waterPlan from './components/waterPlan.vue'
import waterSaving from './components/waterSaving.vue'
import waterSupplyMonitor from './components/waterSupplyMonitor.vue'
import waterBalance from './components/waterBalance.vue'
import deviceManager from './components/deviceManager.vue'
import waterHistory  from './components/waterHistory.vue'
import waterLeak  from './components/waterLeak.vue'

export default {
  components: {
    borderBox,
    indexHeader,
    waterAnalyze,
    waterPlan,
    waterSaving,
    waterSupplyMonitor,
    waterBalance,
    deviceManager,
    waterHistory,
    waterLeak,
  },
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .index_container {
    width: 100%;
    height: 100%;
    background-color: #133049;
    position: relative;    
    .index_header {
      width: 100%;
      height: 60px;
    }
    .index_mainWrap {
      width: calc(100% - 60px);
      height: calc(100% - 60px);
      margin: 0 auto;
      position: absolute;
      top: 40px;
      bottom: 10px;
      left: 10px;
      right: 10px;
      background: url("../../assets/image/index/+wrapper-bg.png");
      background-size: 100% 100%;
      box-sizing: border-box;    
      .main_contentFlex {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 12px;
        height: 100%;
      }    
    }
  }

</style>