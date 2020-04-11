<template>
  <div class="base_wrap">
    <div class="content">
      <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
        <div class="pad_6 s_title">
          <div class="title_l">
            水平衡监测
          </div>
          <div class="title_r" />
        </div>
        <div class="water_balance_wrap">
          <div class="section">
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
              @click="goBack"
              size="mini"
              type="warning">
              <span>返回</span>
            </el-button>
          </div>
          <div class="baseTreeMap beauty-Scroll">
            <el-scrollbar>
              <vue2-org-tree
                class="treeMap"
                name="test"
                :data="treeData"
                :labelWidth="280"
                :horizontal="horizontal"
                :collapsable="collapsable"
                :render-content="renderContent"
                @on-expand="onExpand"
                @on-node-click="onNodeClick"/>
            </el-scrollbar>
          </div>          
        </div>
      </dv-border-box-12>   
    </div>
  </div>
</template>
<script>
import util from '@/mixins/util.js'
export default {
  data() {
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



      treeData: {
        id: 0,
        label: "闽清县水利局",
        children: [
          {
            id: 1,
            label: "开水间支管",
            children: [
              {
                id: 11,
                label: "二楼开水间",
              },
              {
                id: 12,
                label: "四楼开水间",
              },
              {
                id: 13,
                label: "六楼开水间",
              },
              {
                id: 14,
                label: "五楼开水间",
              }
            ]
          },
          {
            id: 2,
            label: "公共卫生间支管",
            children: [
              {
                id: 211,
                label: "二楼公共卫生间"
              },
              {
                id: 212,
                label: "六楼公共卫生间"
              },
              {
                id: 213,
                label: "四楼公共卫生间"
              },
              {
                id: 214,
                label: "三楼公共卫生间"
              },
            ]
          },
          {
            id: 3,
            label: "东侧卫生间支管",
            children: [
              {
                id: 211,
                label: "二楼公共卫生间"
              },
              {
                id: 212,
                label: "六楼公共卫生间"
              },
              {
                id: 213,
                label: "四楼公共卫生间"
              },
              {
                id: 214,
                label: "三楼公共卫生间"
              },
            ]
          },
          {
            id: 4,
            label: "大厅支管",
            children: [
              {
                id: 41,
                label: "大厅水表"
              }
            ]
          },
          {
            id: 5,
            label: "1号食堂支管",
            children: [
              {
                id: 55,
                label: "食堂厨房"
              },
              {
                id: 56,
                label: "洗手池"
              }
            ]
          },
          {
            id: 6,
            label: "2号食堂支管",
            children: [
              {
                id: 61,
                label: "厨房",
              },
              {
                id: 62,
                label: "洗手池",
              },
              {
                id: 63,
                label: "洗手池",
              }
            ]
          }
        ]
      },
      horizontal: true,
      collapsable: true,
      expandAll: false,
    };
  },
  mounted () {
    this.expandChange()

    this.treeNode()
  },
  methods: {
    queryDate() {
      console.log(this.dateValue);
    },      
    goBack() {
      this.$router.push('/index')
    },
    renderContent(h, data) {
      return data.label;
    },
    onExpand(e, data) {
      if ("expand" in data) {
        data.expand = !data.expand;
        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
    },
    //点击选项执行的方法，可以用于跳转到其他链接，注意一定要写协议头
    onNodeClick(e, data) {
       console.log(data.label);
       if(data.url==null){
        return false
      }else{
        window.open(data.url)
      }
    },
    collapse(list) {
      var _this = this;
      list.forEach(function(child) {
        if (child.expand) {
          child.expand = false;
        }
        child.children && _this.collapse(child.children);
      });
    },
    expandChange() {
      this.toggleExpand(this.treeData, true);
    },
    toggleExpand(data, val) {
      var _this = this;
      if (Array.isArray(data)) {
        data.forEach(function(item) {
          _this.$set(item, "expand", val);
          if (item.children) {
            _this.toggleExpand(item.children, val);
          }
        });
      } else {
        this.$set(data, "expand", val);
        if (data.children) {
          _this.toggleExpand(data.children, val);
        }
      }
    },
    treeNode() {
      this.$nextTick(function() {
        let mapNodeChild = document.querySelectorAll('.org-tree-node-children')[1] 

        let beforeStyle = window.getComputedStyle(mapNodeChild, ":before")

        console.log(beforeStyle.getPropertyValue("width"));
        // beforeStyle.style.color = 'red'
        // beforeStyle.color = 'red'
        // beforeStyle.setPropertyValue("width")
      
      })
    },
  }
};
</script>

<style lang="less" scoped>
  .base_wrap {
    width: 100%;
    height: 100%;
    background-color: #133049;
    position: relative;
    .content {
      width: 92%;
      height: 92%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
          flex: 4;
          display: flex;
          padding-top: 12px;
          justify-content: flex-end;
        }    
      }  
      .water_balance_wrap {
        width: 98%;
        height: calc(100% - 88px);
        margin: 0 auto;  
        .section {
          width: 100%;
          height: 38px;
        }
        .baseTreeMap {
          width: 100%;
          height: 99%;
          .treeMap {
            width: 100%;
            height: 100%;
          }
        }
      }
    }


    // 树导图
    /deep/.org-tree-container {
      background-color: transparent;
      -webkit-box-shadow: 0 0;
      box-shadow: 0 0;
    }
    /deep/.org-tree-node-label-inner {
      color: #c3dbff;
      box-shadow: 0 0;
    }
    /deep/.org-tree-node-btn {
      background-color: rgb(78, 92, 109)
    }
    .org-tree-node-label {
      white-space: nowrap;
    }

    /deep/.org-tree-node::after {
      width: 88px;
    }
    /deep/.org-tree-node-label::after {
      display: none;
    }
    /deep/.org-tree-node-btn {
      // display: none;
    } 
    /deep/.org-tree-node-children::before {
      position: absolute;
      width: 78px;
      left: -60px;
    }
    /deep/.org-tree-node::before {
      width: 88px;
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



</style>


