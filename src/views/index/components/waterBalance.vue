<template>
  <div class="panel_wrapper panel_wrapper_56">
    <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
      <div class="pad_6 s_title">
        <div class="title_l">
          水平衡监测
        </div>
        <div class="title_r">

        </div>
      </div>   
      <div class="water_balance_wrap">
        <el-date-picker
          v-model="dateValue"
          type="daterange"
          align="left"
          unlink-panels
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="small"
          :picker-options="pickerOptions">
        </el-date-picker>
        <el-button 
          style="margin-left:20px"
          size="mini"
          @click="queryDate"
          type="primary">
          <span>查询</span>
        </el-button>  
        <el-button 
          style="margin-left:20px"
          size="mini"
          @click="exportExcel"
          type="success">
          <span>导出数据</span>
        </el-button>  
        <el-button 
          style="margin-left:20px"
          size="mini"
          @click="toMap"
          type="warning">
          <span>图表</span>
        </el-button>                      
        <div class="baseList beauty-Scroll" ref="baseListRef"> 
          <el-scrollbar>
            <tree-table
              class="treeTable"
              ref="treeTableRef"
              :is-fold="false"
              headerAlign="center"
              :data="treeTableData"
              :columns="columns"
              :selection-type="false"
              :expand-type="false"
              :show-row-hover="false">
            </tree-table>
          </el-scrollbar>
        </div>
      </div>   
    </dv-border-box-12>
  </div>  
</template>

<script>
import util from '@/mixins/util.js'
export default {
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }, 
      dateValue: '',
      treeTableHeight: '200px',
      treeTableData: [
        {
          id: 1,
          pId: 0,
          area_name: '闽清水利局',
          area_level: '一级',
          water_demind: '3.2',
          water_user: '3.3',
          err_amont: '-0.1',
          err_rate: '-3.1',
          res_balance: '一二级平衡',
          children: [
            {
              id: 2,
              pId: 1,
              area_name: '开水间支管',
              area_level: '二级',
              water_demind: '3.2',
              water_user: '3.3',
              err_amont: '-0.1',
              err_rate: '-3.1',
              res_balance: '二三级平衡',
              children: [
                {
                  id: 5,
                  pId: 2,
                  area_name: '二楼开水间',
                  area_level: '三级级',
                  water_demind: '3.2',
                  water_user: '3.3',
                  err_amont: '-0.1',
                  err_rate: '-3.1',
                  res_balance: '平衡',
                },
                {
                  id: 6,
                  pId: 2,
                  area_name: '四楼开水间',
                  area_level: '三级级',
                  water_demind: '3.2',
                  water_user: '3.3',
                  err_amont: '-0.1',
                  err_rate: '-3.1',
                  res_balance: '平衡',
                },  
                {
                  id: 7,
                  pId: 2,
                  area_name: '六楼开水间',
                  area_level: '三级级',
                  water_demind: '3.2',
                  water_user: '3.3',
                  err_amont: '-0.1',
                  err_rate: '-3.1',
                  res_balance: '平衡',
                },                    
                {
                  id: 8,
                  pId: 2,
                  area_name: '五楼开水间',
                  area_level: '三级级',
                  water_demind: '3.2',
                  water_user: '3.3',
                  err_amont: '-0.1',
                  err_rate: '-3.1',
                  res_balance: '平衡',
                }                  
              ]
            },
            {
              id: 3,
              pId: 1,
              area_name: '公共卫生间支管',
              area_level: '二级',
              water_demind: '3.2',
              water_user: '3.3',
              err_amont: '-0.1',
              err_rate: '-3.1',
              res_balance: '二三级平衡', 
              children: [
                {
                  id: 9,
                  pId: 2,
                  area_name: '二楼公共卫生间',
                  area_level: '三级级',
                  water_demind: '3.2',
                  water_user: '3.3',
                  err_amont: '-0.1',
                  err_rate: '-3.1',
                  res_balance: '平衡',
                },
                {
                  id: 10,
                  pId: 2,
                  area_name: '六楼公共卫生间',
                  area_level: '三级级',
                  water_demind: '3.2',
                  water_user: '3.3',
                  err_amont: '-0.1',
                  err_rate: '-3.1',
                  res_balance: '平衡',
                },
                {
                  id: 11,
                  pId: 2,
                  area_name: '四楼公共卫生间',
                  area_level: '三级级',
                  water_demind: '3.2',
                  water_user: '3.3',
                  err_amont: '-0.1',
                  err_rate: '-3.1',
                  res_balance: '平衡',
                },
                {
                  id: 12,
                  pId: 2,
                  area_name: '三楼公共卫生间',
                  area_level: '三级级',
                  water_demind: '3.2',
                  water_user: '3.3',
                  err_amont: '-0.1',
                  err_rate: '-3.1',
                  res_balance: '平衡',
                }
              ]             
            },
            {
              id: 4,
              pId: 1,
              area_name: '大厅支管',
              area_level: '二级',
              water_demind: '3.2',
              water_user: '3.3',
              err_amont: '-0.1',
              err_rate: '-3.1',
              res_balance: '二三级平衡',  
              children: [
                {
                  id: 13,
                  pId: 2,
                  area_name: '大厅水表',
                  area_level: '三级级',
                  water_demind: '3.2',
                  water_user: '3.3',
                  err_amont: '-0.1',
                  err_rate: '-3.1',
                  res_balance: '平衡',
                },
              ]             
            }
          ],
        },
      ],
      columns: [
        {label: '区域名称', prop: 'area_name', minWidth: '160px'},
        {label: '区域分级', prop: 'area_level', minWidth: '80px'},
        {label: '供水量(m³)', prop: 'water_demind', minWidth: '50px'},
        {label: '用水量(m³)', prop: 'water_user', minWidth: '50px'},
        {label: '误差量(m³)', prop: 'err_amont', minWidth: '50px '},
        {label: '误差率(%)', prop: 'err_rate', minWidth: '50px '},
        {label: '水平衡结果',prop: 'res_balance', minWidth: '100px '}
      ],          
    }
  },
  mounted () {

    this.setTreeTable()
    
  },
  methods: {
    queryDate() {
      console.log(this.dateValue);
    },
    setTreeTable() {
      this.$nextTick(function () {
        let baseListRefHeight = this.$refs.baseListRef.offsetHeight - 64 - 8
        let treeTable = document.querySelector('.zk-table__body-wrapper')
        treeTable.style.height = baseListRefHeight + 'px'

        //根据后端提供报警标志设置表格变红报警 
        let rowData = document.querySelectorAll('.zk-table__body-row')[3]
        rowData.style.color = '#F56C6C'

        // 监听窗口大小变化
        window.onresize = function() {
          treeTable.style.height = baseListRefHeight + 'px'
        }
      }) 
    },  
    // 导出excel格式
    exportExcel() {
      // 树结构转一维数组
      let arr = util.toArr(this.treeTableData)
      require.ensure([], () => {
        const {export_json_to_excel} = require('@/excel/Export2Excel')
        const tHeader = ['区域名称', '区域分级', '供水量(m³)', '用水量(m³)', '误差量(m³)', '误差率(%)', '水平衡结果']
        const filterVal = ['area_name', 'area_level', 'water_demind', 'water_user', 'err_amont', 'err_rate', 'res_balance'];
        const list = arr
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '列表excel')
      })
      
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    toMap() {
      this.$router.push('index/map')
    }    

  }
}
</script>

<style lang="less" scoped>
  .s_title {
    width: 98%;
    height: 48px;
    display: flex;
    .title_l {
      flex: 1;
      width: 130px;
      line-height: 30px;
      border-radius: 2px;
      font-size: 18px;
      text-align: center;
      color: rgb(143, 185, 196); 
      box-shadow: 0px 0px 21px rgb(152, 175, 182) inset;
    }
    .title_r {
      flex: 3;
      display: flex;
      padding-top: 12px;
      justify-content: flex-end;

    }    
  }
  .water_balance_wrap {
    width: 98%;
    height: calc(100% - 88px);
    margin: 0 auto;   
    .baseList {
      width: 100%;
      height: 100%;

      .treeTable {
        width: 100%;
        margin: 8px auto;
        border: none;

        /deep/.zk-table__header-row {
          font-size: 14px;
          background-color: #1C4DA6;
          border-bottom: none;
          color: #dedede;
        }
        /deep/ .zk-table__body {
          border-collapse: separate;
        } 
        /deep/ .zk-table__body-wrapper {
          width: 100%;
          background-color: #133049;
          color: #c3dbff;   
        }

      }  

    }

  // 日期选择器
  /deep/.el-input__inner {
    background: 000;
    border: 1px solid #227ead;
    border-radius: 6px;
    color: #adadad;
  }    
  /deep/.el-range-input {
    background-color: #133049;
    color: #dedede;
  }
  /deep/.el-range-separator {
    color: #dedede;
  }
  /deep/.el-picker-panel__sidebar {
    background-color: #133049;
  }
  }
</style>