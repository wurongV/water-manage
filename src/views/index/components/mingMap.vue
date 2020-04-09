<template>
  <div class="text-center">
    <!-- <div class="checkbox">
      <label>
        <input type="checkbox" v-model="expandAll" @change="expandChange" /> 显示所有项
      </label>
    </div> -->
    <vue2-org-tree
      class="treeMap"
      name="test"
      :data="treeData"
      :horizontal="horizontal"
      :collapsable="collapsable"
      :render-content="renderContent"
      @on-expand="onExpand"
      @on-node-click="onNodeClick"/>
  </div>

</template>
<script>
export default {
  data() {
    return {
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
  },
  methods: {
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
    }
  }
};
</script>

<style lang="less" scoped>
  .text-center {
    width: 100%;
    height: 100%;
    background-color: #133049;
    .treeMap {
      margin: 0 auto;
    }
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
  }

</style>


