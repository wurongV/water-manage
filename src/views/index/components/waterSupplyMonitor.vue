<template>
  <div class="panel_wrapper panel_wrapper_44">
    <dv-border-box-8 :color="['#227ead', 'rgb(124, 231, 253)']">
      <div class="pad_6 s_title">
        <div class="title_l">
          用水量监测
        </div>
        <div class="title_r" />
      </div>
      <div class="lineChart_wrap" ref="lineChartRef">
        <div id="waterMonitor"></div>
      </div>
    </dv-border-box-8>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      waterMonitorData: [
        { time: "1:00", value: 3 },
        { time: "2:00", value: 4 },
        { time: "3:00", value: 3.5 },
        { time: "4:00", value: 5 },
        { time: "5:00", value: 4.9 },
        { time: "6:00", value: 6 },
        { time: "7:00", value: 7 },
        { time: "8:00", value: 9 },
        { time: "9:00", value: 13 }
      ],      
    }
  },
  mounted () {
    // 折线图
    const lineChartRef = this.$refs.lineChartRef.offsetHeight;

    const lineChart = new G2.Chart({
      container: "waterMonitor", 
      forceFit: true, 
      height: lineChartRef, 
      padding: [50, 20, 50, 20]
    });
    lineChart.source(this.waterMonitorData); 
    lineChart.scale("value", {
      // 度量
      min: 0 // Y轴显示的最小值
    });
    lineChart.scale("time", {
      // 度量
      range: [0, 1] // 数值范围区间
    });
    lineChart.tooltip({
      // 提示信息
      crosshairs: {
        type: "line" // 提示信息类型
      }
    });
    lineChart.line().position("time*value"); // 几何标记类型   线，  position:二维坐标系内设至 x轴 y轴
    lineChart
      .point()
      .position("time*value")
      .size(4)
      .shape("circle")
      .style({
        // 几何标记类型   点，  二维坐标系内设置 x轴 y轴    大小   图形形状
        stroke: "#fff",
        lineWidth: 1
      });
    lineChart.render(); // 渲染    
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .s_title {
    width: 100%;
    height: 48px;
    display: flex;
    .title_l {
      line-height: 30px;
      flex: 1;
      border-radius: 2px;
      font-size: 18px;
      text-align: center;
      color: rgb(143, 185, 196); 
      box-shadow: 0px 0px 21px rgb(152, 175, 182) inset;
    }
    .title_r {
      padding-top: 8px;
      flex: 3;
      display: flex;
      justify-content: space-around;
    }

  }
  .lineChart_wrap {
    width: 98%;
    height: calc(100% - 60px);
    margin: 0 auto;          
  }  
</style>