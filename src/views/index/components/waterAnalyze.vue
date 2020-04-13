<template>
  <div class="panel_wrapper panel_wrapper_33">
    <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
        <div class="pad_6 s_title">
          <div class="title_l">用水量分析</div>
          <div class="title_r">
            <div>
              <span class="skyblue">昨日用水量：</span>
              <span class="orange">{{ yesterday }}</span>
            </div>
            <div>
              <span class="skyblue">7月用水量：</span>
              <span class="orange">{{ normalMonth }}</span>
            </div>
          </div>
        </div>
        <div class="analyChart_wrap" ref="analyChartRef">
          <div id="waterAnalysis"></div>
        </div>
    </dv-border-box-12>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yesterday: "4.3㎡",
      normalMonth: "104.53㎡",
      pieChartData: [
        { genre: "1月1日", sold: 12 },
        { genre: "1月2日", sold: 3 },
        { genre: "1月3日", sold: 5 },
        { genre: "1月4日", sold: 6 },
        { genre: "1月5日", sold: 7 },
        { genre: "1月6日", sold: 9 },
        { genre: "1月7日", sold: 10 }
      ],      
    }
  },
  mounted () {
    // 饼状图
    const pieChartHeight = this.$refs.analyChartRef.offsetHeight;
    console.log(this.$refs.analyChartRef);
    

    const pieChart = new G2.Chart({
      container: "waterAnalysis",
      // autoFit: true,
      forceFit: true,
      height: pieChartHeight,
      padding: "auto"
    });
    pieChart.source(this.pieChartData);
    pieChart.legend({
      position: "right-center",
      offsetX: 0,
      color: '#fff'
    });
    pieChart.coord("theta", {
      radius: 0.9,
      innerRadius: 0.4
    });
    pieChart
      .intervalStack()
      .position("sold")
      .color("genre", [
        "#1890ff",
        "#37c661",
        "#fbce1e",
        "#2b3b79",
        "#8a4be2",
        "#1dc5c5",
        "#6d99c5"
      ])
      .label("sold", val => {
        if (val < 3) {
          return null;
        }
        return {
          offset: -30,
          textStyle: {
            fill: "#c3dbff",
            fontSize: 14,
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .45)"
          }
        };
      });
    pieChart.render();    
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
  .analyChart_wrap {
    width: 98%;
    height: calc(100% - 60px);
    margin: 0 auto;
  }  
</style>