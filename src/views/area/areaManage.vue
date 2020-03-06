<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>区域管理</el-breadcrumb-item>
      <el-breadcrumb-item>区域列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 新建区域 -->
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input
            size="small"
            clearable
            placeholder="请输入搜索内容"
            v-model="queryInfo.query"
            @clear="getList">
            <el-button
              slot="append"
              @click="getList"
              icon="el-icon-search">
            </el-button>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button 
            type="primary" 
            size="small" 
            @click="showAddDialog">
            新建区域
          </el-button>
        </el-col>
      </el-row> 
      <!-- 表格 -->
      <el-row>
        <el-table :data="tableData" border stripe>
          <el-table-column 
            type="index" 
            align="center" 
            size="mini" 
            width="50">
          </el-table-column>
          <el-table-column
            align="center"
            v-for="(item, index) in areaCloumn"
            :key="index"
            size="mini"
            :prop="item.name"
            :min-width="item.minWidth"
            :label="item.label">
          </el-table-column>
          <el-table-column
            align="center"
            label="水表SN"
            prop="sn"
             min-width="140px">
            <template slot-scope="scope">
              <span>{{ scope.row.sn }}</span>
              <el-button
                type="primary"
                 style="margin-left: 10px"
                @click="showEditSnDialog(scope.row)"
                size="mini">
                编辑
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="管理员"
            prop="manage"
            min-width="180px">
            <template slot-scope="scope">
              <span>{{ scope.row.manage }}</span>
              <el-button
                type="primary"
                 style="margin-left: 10px"
                @click="showManageDialog(scope.row)"
                size="mini">
                请选择管理员
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="260px"
            fixed="right">
            <template slot-scope="scope">
              <el-button
                type="primary"
                @click="showEditDialog(scope.row)"
                size="mini">
                编辑
              </el-button>
              <el-button 
                type="success"
                @click="showAddNodeDialog(scope.row)"
                size="mini">
                添加节点
              </el-button>
              <el-button
                type="danger"
                @click="removeArea(scope.row.id)"
                size="mini">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>  
      <!-- 页码 -->
      <el-row>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[2, 5, 10, 15]"
          :page-size="queryInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>      
      </el-row>   
    </el-card>

    <!-- 添加/编辑 区域 -->
    <el-dialog
      :title="`${areaTitle}区域`"
      :visible.sync="areaDialog"
      width="38%"
      @close="areaDialogClosed">
      <el-form
       :model="areaForm"
       :rules="areaFormRules"
       ref="areaFormRef"
       label-width="70px">
        <el-form-item label="名称" prop="name">
          <el-input size="small" v-model="areaForm.name"></el-input>
        </el-form-item>
        <el-form-item label="节点" prop="lastNode">
          <el-select v-model="areaForm.lastNode" placeholder="请选择上一节点">
            <el-option
              v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="areaDialog = false" size="small">取消</el-button>
        <el-button v-if="areaTitle == '新建'" type="primary" @click="addAreaBtn" size="small">确定</el-button>
        <el-button v-else type="primary" @click="editAreaBtn" size="small">确定</el-button>
      </div>
    </el-dialog>

    <!-- 选择管理员弹窗 -->
    <el-dialog
      title="选择管理员"
      :visible.sync="manageDialog"
      width="660px"
      @close="manageDialogClosed">
      <!-- 选择管理员穿梭框 -->
      <el-transfer
        filterable
        :titles="['管理员', '已选管理员']"
        :filter-method="filterMethod"
        filter-placeholder="请输入管理员"
        v-model="selectManageVal"
        @change="newManage"
        :data="manageData">
      </el-transfer>
      <div slot="footer">
        <el-button @click="manageDialog = false" size="small">取消</el-button>
        <el-button type="primary" @click="seleManageBtn" size="small">确定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑水表SN列表 -->
    <el-dialog
      title="水表SN"
      :data="tableData.filter(data => !searchSn || data.name.toLowerCase().includes(searchSn.toLowerCase()))"
      :visible.sync="editSnDialog"
      width="600px"
      @close="editSnDialogClose">
        <el-table :data="tableData" border stripe>
          <el-table-column 
            type="index" 
            align="center" 
            size="mini" 
            width="50">
          </el-table-column>
          <el-table-column
            align="center"
            size="mini"
            prop="sn"
            min-width="160px"
            label="水表SN">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="searchSn"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
           </el-table-column>          
        </el-table>
      <div slot="footer">
        <el-button @click="editSnDialog = false" size="small">取消</el-button>
        <el-button type="primary" @click="editSnBtn" size="small">确定</el-button>
      </div>        
    </el-dialog>

    <!-- 添加节点 -->
    <el-dialog
      title="添加节点"
      :visible.sync="addNodeDialog"
      width="500px"
      @close="addNodeDialogClose">
      <el-form
       :model="nodeForm"
       :rules="nodeFormRules"
       ref="nodeFormRef"
       label-width="70px">
        <el-form-item label="节点" prop="node">
          <el-input size="small" v-model="nodeForm.node"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addNodeDialog = false" size="small">取消</el-button>
        <el-button  type="primary" @click="addNodeBtn" size="small">确定</el-button>  
      </div>   
    </el-dialog>
  </div>
</template>

<script>
import table from '@/mixins/tables'
export default {
  data () {
    // 管理员数据
    const generateData = _ => {
      const manageData = [];
      const manageArr = ['赵高', '小明', '韩梅梅', '林冲', '赵云', '张飞', '吕布'];
      const pinyin = ['zhaogao', 'xiaoming', 'hanmeimei', 'linchong', 'zhaoyun', 'zhangfei', 'lvbu'];
      manageArr.forEach((manage, index) => {
        manageData.push({
          label: manage,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return manageData;  
    };
    return {
      tableData: [],
      areaCloumn: [
        { name: 'name', label: '名称', minWidth: '160px' },
        { name: 'lastNode', label: '上一节点', minWidth: '160px' },
        { name: 'founder', label: '创建人', minWidth: '160px' },
        { name: 'modifiTime', label: '修改时间', minWidth: '160px' }     
      ], 
      editSnDialog: false, 
      manageDialog: false,
      areaTitle: '新建',
      areaDialog: false,
      addNodeDialog: false,
      areaForm: {
        name: '',
        lastNode: ''
      },
      nodeForm: {
        node: ''
      }, 
      nodeFormRules: {
        node: [
          {
            required: true,
            message: '请输入节点',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 10,
            message: '节点长度在 2 到 10 个字符之间',
            trigger: 'blur'
          }
        ]
      },
      areaFormRules: {
        name: [
          {
            required: true,
            message: '请输入区域',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 10,
            message: '区域名长度在 2 到 10 个字符之间',
            trigger: 'blur'
          }
        ],
        lastNode:[
          { required: true, message: '请选择上一节点', trigger: 'blur' },
        ]
      },  
      sexOptions: [{
          value: '选项1',
          label: '节点1'
        }, {
          value: '选项2',
          label: '节点2'
        }, {
          value: '选项3',
          label: '节点3'
        }],
      
 
      // el-transfer
      manageData: generateData(),
      selectManageVal: [],
      searchSn: '',  
    }
  },
  // 复用table.js
  mixins: [table],
  created () {
    this.getList()
  },
  methods: {
    getList() {
      console.log('获取数据了列表');
      this.tableData = [
        {id: 0, name: '福州', lastNode: 'xxx', founder: ' 赵高',modifiTime: '2019-15-16', sn: '123456789',manage:'工人文化宫'},    
        {id: 1, name: '北京', lastNode: 'xxx', founder: ' 赵高',modifiTime: '2019-15-16', sn: '123456789',manage:'工人文化宫'},         
        {id: 2, name: '上海', lastNode: 'xxx', founder: ' 赵高',modifiTime: '2019-15-16', sn: '123456789',manage:'工人文化宫'},         
      ]
      this.total = 1
    },

    // 新建区域
    showAddDialog() {
      this.areaTitle = '新建'
      this.areaDialog = true
    },
    areaDialogClosed() {
      this.$refs.areaFormRef.resetFields()
    },
    addAreaBtn() {
      this.$refs.areaFormRef.validate( valid => {
        if (valid) {
          console.log('确认新建区域');
          this.areaDialog = false
        }
      }) 
    },

    // 表格编辑 添加节点 删除
    showEditDialog(row) {
      this.areaTitle = '编辑'
      console.log('显示编辑区域');
      this.areaDialog = true
    },
    editAreaBtn() {

    },
    showAddNodeDialog(row) {
      this.addNodeDialog = true
      // this.$refs.areaFormRef.validate( valid => {
      //   if (valid) {
      //     console.log('确认编辑用户')
          
      //     this.areaDialog = false
      //   }
      // }) 
    },
    addNodeDialogClose() {
      this.$refs.nodeFormRef.resetFields()
    },
    addNodeBtn() {
      this.addNodeDialog = false
    },
    removeArea(id) {
      const confirmResult = this.$confirm(
        '此操作将永久删除该区域，是否继续？',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'          
        }
      ).catch(err => err)
      if (confirmResult == 'confirm') {

        console.log('删除改区域')

      }
    },

    // 选择管理员
    filterMethod(query, item) {
      return item.label.indexOf(query) > -1;
    },
    showManageDialog (id) {
      this.manageDialog = true
    },
    manageDialogClosed() {
      // 关闭选择管理员时回调
    },
    seleManageBtn() {
      this.manageDialog = false
    },
    // 右侧列表元素变化时触发
    newManage(e) {
      console.log(e)
    },

    // 编辑水表SN
    showEditSnDialog(row) {
      this.editSnDialog = true,
      console.log(row)
    },
    editSnBtn() {
      this.editSnDialog = false
    },
    editSnDialogClose() {
      // 关闭水表sn时回调
    }


  }
}
</script>

<style lang="less" scoped>

</style>