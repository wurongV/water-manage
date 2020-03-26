<template>
  <div class="panel_wrapper panel_wrapper_56">
    <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
      <div class="pad_6 s_title">
        <div class="title_l">
          水平衡监测
        </div>
        <div class="title_r">
          <el-switch
            class="switchStyle"
            :width='70'
            v-model="switchVal"
            active-color="#13ce66"
            inactive-color="#FF8C00"
            active-text="列表"
            inactive-text="图形">
          </el-switch>
        </div>
      </div>   
      <div class="water_balance_wrap">
        <div class="baseMap" v-if="!switchVal">
          <mingMap />
        </div>
        <div class="baseList" v-else ref="baseListRef"> 
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
          <el-scrollbar>
            <tree-table
              class="TreeTable"
              ref="table"
              treeType: true
              :max-height="treeTableHeight"
              headerAlign="center"
              :data="data"
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
import mingMap from './mingMap.vue'
export default {
  components: {
    mingMap
  },
  data () {
    return {
      switchVal: true,
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
      treeTableHeight: '500px',
      treeTableData: [],
data: [
          {
            name: 'Jack',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 10,
            children: [
              {
                name: 'Ashley',
                sex: 'female',
                likes: ['football', 'basketball'],
                score: 20,
                children: [
                  {
                    name: 'Ashley',
                    sex: 'female',
                    likes: ['football', 'basketball'],
                    score: 20,
                  },
                  {
                    name: 'Taki',
                    sex: 'male',
                    likes: ['football', 'basketball'],
                    score: 10,
                    children: [
                      {
                        name: 'Ashley',
                        sex: 'female',
                        likes: ['football', 'basketball'],
                        score: 20,
                      },
                      {
                        name: 'Taki',
                        sex: 'male',
                        likes: ['football', 'basketball'],
                        score: 10,
                        children: [
                          {
                            name: 'Ashley',
                            sex: 'female',
                            likes: ['football', 'basketball'],
                            score: 20,
                          },
                          {
                            name: 'Taki',
                            sex: 'male',
                            likes: ['football', 'basketball'],
                            score: 10,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Taki',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 10,
              },
            ],
          },
          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
            children: [
              {
                name: 'Ashley',
                sex: 'female',
                likes: ['football', 'basketball'],
                score: 20,
                children: [
                  {
                    name: 'Ashley',
                    sex: 'female',
                    likes: ['football', 'basketball'],
                    score: 20,
                  },
                  {
                    name: 'Taki',
                    sex: 'male',
                    likes: ['football', 'basketball'],
                    score: 10,
                  },
                ],
              },
              {
                name: 'Taki',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 10,
                children: [
                  {
                    name: 'Ashley',
                    sex: 'female',
                    likes: ['football', 'basketball'],
                    score: 20,
                  },
                  {
                    name: 'Taki',
                    sex: 'male',
                    likes: ['football', 'basketball'],
                    score: 10,
                  },
                ],
              },
            ],
          },
          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
          },
                    {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
          },
                    {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
          },
                    {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
          },
          
                    {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
          },
                    {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
          },          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
          },

          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
            children: [
              {
                name: 'Ashley',
                sex: 'female',
                likes: ['football', 'basketball'],
                score: 20,
              },
              {
                name: 'Taki',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 10,
              },
            ],
          },
        ],
columns: [
          {
            label: 'name',
            prop: 'name',
            width: '400px',
          },
          {
            label: 'sex',
            prop: 'sex',
            minWidth: '50px',
          },
          {
            label: 'score',
            prop: 'score',
          },
          {
            label: 'likes',
            prop: 'likes',
            minWidth: '200px',
            type: 'template',
            template: 'likes',
          },
        ],
      // columns: [
      //   {label: '区域名称', prop: 'cat_name', minWidth: '160px'},
      //   {label: '区域分级', minWidth: '80px', type: 'template', template: 'isOk'},
      //   {label: '供水量(m³)', minWidth: '76px', type: 'template', template: 'order'},
      //   {label: '用水量(m³)', width: '76px', type: 'template', template: 'opt'},
      //   {label: '误差量(m³)', width: '76px ', type: 'template', template: 'opt'},
      //   {label: '误差率(%)', width: '76px ', type: 'template', template: 'opt'},
      //   {label: '水平衡结果', width: '100px ', type: 'template', template: 'opt'},
      //   {label: '操作', width: '100px ', type: 'template', template: 'opt'},
      // ],          
    }
  },
  mounted () {

   this.tableAuto()
    
  },
  methods: {
    queryDate() {
      console.log(this.dateValue);
    },
    tableAuto() {
      this.$nextTick(function () {
        let baseListRefHeight = this.$refs.baseListRef.offsetHeight
          this.treeTableHeight = baseListRefHeight - this.$refs.table.$el.offsetTop - 38;
          // 监听窗口大小变化
          let that = this;
          window.onresize = function() {
            that.treeTableHeight = baseListRefHeight - that.$refs.table.$el.offsetTop - 38
          }
      })      
    },  

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
    height: calc(100% - 56px);
    margin: 0 auto;     
    .baseMap,
    .baseList {
      width: 100%;
      height: 100%;
    }
    .baseList {
      // background-color: pink;
    }
    .TreeTable {
      width: 98%;
      overflow: auto;
      margin: 0 auto;
      margin-top: 8px;
    }
  }


  // 3d列表选择
  /deep/.switchStyle {
    .el-switch__label {
      position: absolute;
      // 兼容ie10 11
      top: 0px;
      display: none;
      color: #f0f0f0;
    }

    .el-switch__label--right {
      z-index: 9;
      right: 20px;
      font-weight: 700;
    }

    .el-switch__label--left {
      z-index: 9;
      left: 32px;
      font-weight: 700;
    }

    .el-switch__label.is-active {
      display: block;
    }

    .el-switch .el-switch__core,
    .el-switch .el-switch__label {
      width: 50px !important;
    }
  }


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


  // tree-table
  /deep/ .zk-table {
    border: none;
  }

  /deep/.zk-table__header-row {
    font-size: 14px;
    background-color: #1C4DA6;
    color: #c3dbff;
    border-bottom: none;
  }

  /deep/ .zk-table__body-wrapper{
    background-color: #133049;
    color: #c3dbff;      
  }



</style>