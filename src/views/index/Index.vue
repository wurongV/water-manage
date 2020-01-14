<template>
  <!-- <dv-full-screen-container> -->
  <el-container class="home">
    <!-- header -->
    <el-header class="home_header">
      <el-row :gutter="24">
        <el-col :span="6">
          <div class="logo">
            <span class="fs_18">福州市总工会(工人文化宫)</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="home_title" style="text-align: center">
            公共机构节水监测系统
          </div>
        </el-col>
        <el-col :span="6">
          <div class="logout">
            <span>退出</span>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="home_wrapper">
      <div class="home_content_flex">
        <!-- 左边模块 -->
        <div class="col col_l">
          <div class="panel_wrapper panel_wrapper_33">
            <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
              <div class="pad_6">
                <header>
                  <!-- element 栅格布局 -->
                  <el-row :gutter="24">
                    <el-col :span="6">
                      <h3>用水量分析</h3>
                    </el-col>
                    <el-col :span="8">
                      <span class="skyblue">昨日用水量：</span>
                      <span class="orange">{{ yesterday }}</span>
                    </el-col>
                    <el-col :span="10">
                      <span class="skyblue">7月用水量：</span>
                      <span class="orange">{{ normalMonth }}</span>
                    </el-col>
                  </el-row>
                </header>
                <div class="analyChart_wrap" ref="analyChartRef">
                  <div id="waterAnalysis"></div>
                </div>
              </div>
            </dv-border-box-12>
          </div>
          <div class="panel_wrapper panel_wrapper_33">
            <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
              <div class="pad_6">
                <header>计划用水</header>
                <div class="water_plan_wrap">
                  <div class="water_plan">
                    <div class="outline_border">
                      <p>计划用水量</p>
                      <p>3000</p>
                    </div>
                  </div>
                  <div class="water_plan">
                    <div class="outline_border">
                      <p>2019累计用水量</p>
                      <p>1974.3</p>
                    </div>
                  </div>
                </div>                
              </div>
            </dv-border-box-12>
          </div>
          <div class="panel_wrapper panel_wrapper_33">
            <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
              <div class="pad_6">
                <header>水计量率</header>
                <div class="water_metering_wrap">
                  <div class="water_metering_quantity">
                    <div class="outline_border">
                      <p>计量数量</p>
                      <p>4.4</p>
                    </div>
                  </div>
                  <div class="water_metering_quantity">
                    <div class="outline_border">
                      <p>总水量</p>
                      <p>4.3</p>
                    </div>
                  </div>
                  <div class="water_metering_quantity">
                    <div class="outline_border">
                      <p>水计量率</p>
                      <p>100%</p>
                    </div>
                  </div>                  
                  <!-- <div class="water_metering_ratio">                
                    <p>一级表计量率：100%</p>
                    <p>二级表计量率：98%</p>
                    <p>三级表计量率：96%</p>                    
                  </div> -->
                </div>
              </div>  
            </dv-border-box-12>
          </div>
        </div>
        <!-- 中 -->
        <div class="col col_c">
          <div class="panel_wrapper panel_wrapper_56">
            <dv-border-box-8 :color="['#227ead', 'rgb(124, 231, 253)']">
              <div class="pad_6">
                <header>用水量实时监测</header>
                <div class="lineChart_wrap" ref="lineChartRef">
                  <div id="waterMonitor"></div>
                </div>
              </div>
            </dv-border-box-8>
          </div>
          <div class="panel_wrapper panel_wrapper_44">
            <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
              <div class="pad_6">
                <header>水平衡监测</header>
                <div class="water_balance_wrap">
                  <div class="water_balance_title">
                    <p>一级水量：4.3㎡</p>
                    <p>二级水量：4.4㎡</p>
                    <p>三级水量：4.5㎡</p>                      
                  </div>
                  <h3>误差率</h3>
                  <ul class="water_balance_data">
                    <li>
                      <p>-2.3%</p>
                      <p>一二级平衡</p>
                    </li>
                    <li>
                      <p>-3.4%</p>
                      <p>二三级平衡</p> 
                    </li>
                  </ul>
                </div>
              </div>
            </dv-border-box-12>
          </div>
        </div>
        <!-- 右边模块 -->
        <div class="col col_r">
          <div class="panel_wrapper panel_wrapper_26">
            <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
              <div class="pad_6">
                <header>设备管理</header>
                <div class="device_manage_wrap">
                  <div class="device_manage_quantity">
                    <div class="outline_border">
                      <p>100%</p>
                      <p>完好率</p>
                    </div>
                  </div>
                  <div class="device_manage_ratio">                
                    <p>压力计：2个</p>
                    <p>计量器具：22个</p>
                    <p>异常设备：0个</p>                    
                  </div>
                </div>
              </div>              
            </dv-border-box-12>
          </div>
          <div class="panel_wrapper panel_wrapper_44">
            <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
              <div class="pad_6">
                <header>历史数据(台账管理)</header>
                <div class="historical_data_wrap">
                  <!-- <dv-scroll-board :config="historicalData" style="width:460px;height:220px" /> -->
                  <el-table
                    :data="tableData"
                    :header-cell-style="{background:'#133049',color:'#dedede'}"
                    :cell-style="{background:'#133049',color:'#dedede'}"
                    border
                    >
                    <el-table-column
                      :prop="item.prop"
                      :label="item.label"
                      v-for="(item, index) in tableColumn"
                      :key="index">
                    </el-table-column>
                  </el-table>

                </div>
              </div>
            </dv-border-box-12>
          </div>
          <div class="panel_wrapper panel_wrapper_30">
            <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
              <div class="pad_6">
                <header>漏水、节水、报警数(月累计)</header>
                <div class="alarm_number_wrap" ref="alarmChartRef">
                  <div id="alarmHistogram"></div>
                </div>
              </div>
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
  <!-- </dv-full-screen-container> -->
</template>

<script>
import borderBox from '../../components/borderBox'
export default {
  components: {
    borderBox
  },
  data() {
    return {
      tableHeight: "90%",
      tableData: [
        {
          // floor: "一层",
          monthApply: "4.1.8",
          num: "8",
          per: "22.04",
          // result: "合格"
        },
        {
          // floor: "二层",
          monthApply: "19.8",
          num: "36",
          per: "14.48",
          // result: "合格"
        },
        {
          // floor: "三层",
          monthApply: "36",
          num: "36",
          per: "37.1",
          // result: "合格"
        },
        // {
        //   floor: "四层",
        //   monthApply: "9",
        //   num: "5",
        //   per: "27.6",
        //   result: "合格"
        // }
      ],
      tableColumn: [
        // {
        //   prop: "floor",
        //   label: "层数"
        // },
        {
          prop: "monthApply",
          label: "月用水量"
        },
        {
          prop: "num",
          label: "每层人数"
        },
        {
          prop: "per",
          label: "人均用水量"
        },
        // {
        //   prop: "result",
        //   label: "考核结果"
        // }
      ],
      chart: null, // 创建一个chart变量
      histogramData: [
        { genre: "1月1日", sold: 12 },
        { genre: "1月2日", sold: 3 },
        { genre: "1月3日", sold: 5 },
        { genre: "1月4日", sold: 6 },
        { genre: "1月5日", sold: 7 },
        { genre: "1月6日", sold: 9 },
        { genre: "1月7日", sold: 10 }
      ],
      pieChartData: [
        { genre: "1月1日", sold: 12 },
        { genre: "1月2日", sold: 3 },
        { genre: "1月3日", sold: 5 },
        { genre: "1月4日", sold: 6 },
        { genre: "1月5日", sold: 7 },
        { genre: "1月6日", sold: 9 },
        { genre: "1月7日", sold: 10 }
      ],
      yesterday: "4.3㎡",
      normalMonth: "104.53㎡",
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
        { name: '节水', sales: 16 }
      ]
    }
  },
  mounted() {
    // 饼状图
    const pieChartHeight = this.$refs.analyChartRef.offsetHeight;

    const pieChart = new G2.Chart({
      container: "waterAnalysis",
      forceFit: true,
      height: pieChartHeight,
      padding: "auto"
    });
    pieChart.source(this.pieChartData);
    pieChart.legend({
      position: "right-center",
      offsetX: 0
    });
    pieChart.coord("theta", {
      radius: 0.75
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
        "#1dc5c5"
      ])
      .style({
        stroke: "white",
        lineWidth: 1
      })
      .label("sold", val => {
        if (val < 3) {
          return null;
        }
        return {
          offset: -30,
          textStyle: {
            fill: "white",
            fontSize: 14,
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .45)"
          }
        };
      });
    pieChart.render();

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
  methods: {}
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>