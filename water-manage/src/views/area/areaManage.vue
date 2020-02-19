<template>
  <div>
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
                @click="showEditDialog(scope.row)"
                size="mini">
                编辑
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="管理员"
            prop="manage"
            min-width="160px">
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
                size="mini">
                添加节点
              </el-button>
              <el-button
                type="danger"
                @click="removeUser(scope.row.id)"
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
      title="新建区域"
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
        <el-button type="primary" @click="addAreaBtn" size="small">确定</el-button>
      </div>
    </el-dialog>

    <!-- 选择管理员 -->
    <el-dialog
      title="选择管理员"
      :visible.sync="manageDialog"
      width="38%"
      @close="manageDialogClosed">
      <!-- 选择管理员 -->
      <el-transfer
        filterable
        :titles="['', '']"
        :filter-method="filterMethod"
        filter-placeholder="请输入管理员"
        v-model="selectManageVal"
        :data="manageData">
      </el-transfer>
      <div slot="footer">
        <el-button @click="manageDialog = false" size="small">取消</el-button>
        <el-button type="primary" @click="changeManageBtn" size="small">确定</el-button>
      </div>
    </el-dialog>





  </div>
</template>

<script>
import table from '@/mixins/tables'
export default {
  data () {
    const generateData = _ => {
      const manageData = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        manageData.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return manageData;
    };
    return {
      areaDialog: false,
      manageDialog: false,
      areaForm: {
        name: '',
        lastNode: ''
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
      tableData: [ ],
      areaCloumn: [
        { name: 'name', label: '名称', minWidth: '160px' },
        { name: 'lastNode', label: '上一节点', minWidth: '160px' },
        { name: 'founder', label: '创建人', minWidth: '160px' },
        { name: 'modifiTime', label: '修改时间', minWidth: '160px' },
        // { name: 'sn', label: '水表SN', minWidth: '160px' },
        // { name: 'manage', label: '管理员', minWidth: '160px' },        
      ],  
      // el-transfer
      manageData: generateData(),
      selectManageVal: [],     
    }
  },
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
    showAddDialog() {
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
    showEditDialog(row) {
      console.log('显示编辑区域');
      this.areaDialog = true
    },
    editUser() {
      this.$refs.areaFormRef.validate( valid => {
        if (valid) {
          console.log('确认编辑用户')
          
          this.areaDialog = false
        }
      }) 
    },
    removeUser(id) {
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
    filterMethod(query, item) {
      return item.label.indexOf(query) > -1;
    },
    showManageDialog (id) {
      this.manageDialog = true
    },
    manageDialogClosed() {

    },
    changeManageBtn() {
      this.manageDialog = false
    }
  }
}
</script>

<style lang="less" scoped>

</style>