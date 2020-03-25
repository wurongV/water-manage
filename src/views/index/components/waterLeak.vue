<template>
  <div class="panel_wrapper panel_wrapper_30">
    <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
      <div class="pad_6 s_title">
        <div class="title_l">
          漏水、节水、报警数(月累计)
        </div>
        <div class="title_r" />
      </div>      
      <div class="alarm_number_wrap" ref="alarmChartRef">
        <div id="alarmHistogram"></div>
      </div>
    </dv-border-box-12>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      historicalData: {
        header: ['列1', '列2', '列3'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]        
      },
      alarmHistogramData:[
        { name: '漏水', sales: 24},
        { name: '节水', sales: 16 },
        { name: '报警数', sales: 10 }
      ]      
    }
  },
  mounted () {
    // 柱状图
    const alarmChartRef = this.$refs.alarmChartRef.offsetHeight;

    const alarmChart = new G2.Chart({
      container: 'alarmHistogram',
      forceFit: true,
      height: alarmChartRef,
      padding: 'auto'
    });
    alarmChart.source(this.alarmHistogramData);
    alarmChart.interval().position('name*sales').color('name');
    alarmChart.render();    
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
      flex: 2;
      width: 130px;
      line-height: 30px;
      border-radius: 2px;
      font-size: 18px;
      text-align: center;
      color: rgb(143, 185, 196); 
      box-shadow: 0px 0px 21px rgb(152, 175, 182) inset;
    }
    .title_r {
      flex: 1;
      display: flex;
    }    
  }
  .alarm_number_wrap {
    width: 96%;
    height: calc(100% - 60px);
    // background-color: #fff;
    margin: 6px auto; 
  }  
</style>