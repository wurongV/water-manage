<template>
  <div class="panel_wrapper panel_wrapper_44">
    <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
      <div class="pad_6 s_title">
        <div class="title_l">
          台账管理
        </div>
        <div class="title_r" />
      </div>    
      <div class="historical_data_wrap beauty-Scroll" ref="tableWrapRef">
        <el-scrollbar>
          <el-table
            ref="table"
            :data="tableData"
            :header-cell-style="headerStyle"
            :cell-style="cellStyle"
            style="width: 98%;"
            :max-height="tableHeight">
            <el-table-column
              :prop="item.prop"
              :label="item.label"
              v-for="(item, index) in tableColumn"
              :key="index">
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </dv-border-box-12>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      tableHeight: 50,
      tableData: [
        {
          floor: "一层",
          monthApply: "4.1.8",
          num: "8",
          per: "22.04",
          result: "合格"
        },

                {
          floor: "一层",
          monthApply: "4.1.8",
          num: "8",
          per: "22.04",
          result: "合格"
        },
                {
          floor: "一层",
          monthApply: "4.1.8",
          num: "8",
          per: "22.04",
          result: "合格"
        },
                {
          floor: "一层",
          monthApply: "4.1.8",
          num: "8",
          per: "22.04",
          result: "合格"
        },
                {
          floor: "一层",
          monthApply: "4.1.8",
          num: "8",
          per: "22.04",
          result: "合格"
        },
        {
          floor: "二层",
          monthApply: "19.8",
          num: "36",
          per: "14.48",
          result: "合格"
        },
        {
          floor: "三层",
          monthApply: "36",
          num: "36",
          per: "37.1",
          result: "合格"
        },
        {
          floor: "三层",
          monthApply: "36",
          num: "36",
          per: "37.1",
          result: "合格"
        },
        {
          floor: "三层",
          monthApply: "36",
          num: "36",
          per: "37.1",
          result: "合格"
        },
        {
          floor: "四层",
          monthApply: "9",
          num: "5",
          per: "27.6",
          result: "合格"
        }
      ],
      tableColumn: [
        {
          prop: "floor",
          label: "层数"
        },
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
        {
          prop: "result",
          label: "考核结果"
        }
      ],      
    }
  },
  mounted () {
    this.tableAuto()
  },
  methods: {
    cellStyle() {
      return {background: '#133049', border: '0',color: '#c3dbff', height: '30px',padding: '0',fontSize: '12px'}
    },
    headerStyle () {      
      return {background: '#1C4DA6', border: '0', height: '30px', padding: '0' }
    },
    tableAuto() {
      this.$nextTick(function () {
        let tableWrapRefHeight = this.$refs.tableWrapRef.offsetHeight
          this.tableHeight = tableWrapRefHeight - this.$refs.table.$el.offsetTop - 38;
          // 监听窗口大小变化
          let that = this;
          window.onresize = function() {
            that.tableHeight = tableWrapRefHeight - that.$refs.table.$el.offsetTop - 38
          }
      })      
    },
    
  }
}
</script>

<style lang="less" scoped>
  .s_title {
    width: 100%;
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
    }    
  }
  .historical_data_wrap {
    width: 98%;
    height: calc(100% - 42px);
    margin: 0 auto; 
  } 
  // 表格底部背景透明
  .el-table, .el-table__expanded-cell {
    background-color: transparent;
  }

  .el-table th, .el-table tr {
    background-color: transparent;
  }
  //去掉最下面的那一条线
  .el-table::before {
    height: 0px;
  }
  .el-table__row>td{
    border: none;
  }
</style>