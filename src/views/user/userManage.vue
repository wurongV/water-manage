<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>    
    <el-card>
      <!-- 添加用户 -->
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
            添加用户
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
            v-for="(item, index) in userCloumn"
            :key="index"
            size="mini"
            :prop="item.name"
            :min-width="item.minWidth"
            :label="item.label">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="220px"
            fixed="right">
            <template slot-scope="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                @click="showEditDialog(scope.row)"
                size="mini">
              </el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                @click="removeUser(scope.row.id)"
                size="mini">
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

    <!-- 添加/编辑 用户 -->
    <el-dialog
      :title="`${userTitle}用户`"
      :visible.sync="userDialog"
      width="38%"
      @close="userDialogClosed">
      <el-form
       :model="userForm"
       :rules="userFormRules"
       ref="userFormRef"
       label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input size="small" v-model="userForm.username"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile" >
          <el-input size="small" v-model="userForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="userForm.sex" placeholder="请选择性别">
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
        <el-button @click="userDialog = false" size="small">取消</el-button>
        <el-button v-if="userTitle=='添加'" type="primary" @click="addUserBtn" size="small">确定</el-button>
        <el-button v-else type="primary" @click="editUser" size="small">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import table from '@/mixins/tables'
export default {
  data () {
    var checkMobile = (rule, val , cb) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        if (regMobile.test(val)) {
          return cb()
        } else {
          cb(new Error('请输入合法手机号'))
        }
    }
    return {
      userTitle:'添加',
      userDialog: false,
      userForm: {
        username: '',
        mobile: '',
        sex: ''
      },
      userFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 10,
            message: '用户名长度在 2 到 10 个字符之间',
            trigger: 'blur'
          }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        sex:[
          { required: true, message: '请选择性别', trigger: 'blur' },
        ]
      },  
      sexOptions: [{
          value: '选项1',
          label: '男'
        }, {
          value: '选项2',
          label: '女'
        }],
      tableData: [ ],
      userCloumn: [
        { name: 'username', label: '姓名', minWidth: '160px' },
        { name: 'mobile', label: '手机号', minWidth: '160px' },
        { name: 'sex', label: '性别', minWidth: '160px' },
        { name: 'founder', label: '创建人', minWidth: '160px' },
        { name: 'registerip', label: '上次登录IP', minWidth: '160px' },
        { name: 'registertime', label: '上次登录时间', minWidth: '160px' },        
      ],  
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
        {id: 0, username: '秦始皇', mobile: '13900000000', sex: '男', founder: ' 赵高',registerip: '192.168.1.66', registertime: '2019-12-12'},
        {id: 1, username: '成吉思汗', mobile: '13900000000', sex: '男', founder: ' 赵高',registerip: '192.168.1.66', registertime: '2019-12-12'},
        {id: 2, username: '李世民', mobile: '13900000000', sex: '男', founder: ' 赵高',registerip: '192.168.1.66', registertime: '2019-12-12'},        
        {id: 3, username: '康熙', mobile: '13900000000', sex: '男', founder: ' 赵高',registerip: '192.168.1.66', registertime: '2019-12-12'},        
        {id: 4, username: '赵匡胤', mobile: '13900000000', sex: '男', founder: ' 赵高',registerip: '192.168.1.66', registertime: '2019-12-12'},
        {id: 5, username: '阿骨打', mobile: '13900000000', sex: '男', founder: ' 赵高',registerip: '192.168.1.66', registertime: '2019-12-12'},
        {id: 6, username: '小明', mobile: '13900000000', sex: '男', founder: ' 赵高',registerip: '192.168.1.66', registertime: '2019-12-12'},        
      ]
      this.total = 1
    },
    showAddDialog() {
      this.userDialog = true
      this.userTitle = '添加'
    },
    userDialogClosed() {
      this.$refs.userFormRef.resetFields()
    },
    addUserBtn() {
      this.$refs.userFormRef.validate( valid => {
        if (valid) {
          console.log('确认添加用户');
          console.log(this.userForm.username);
          this.userDialog = false
        }
      }) 
    },
    showEditDialog(row) {
      console.log('显示编辑用户');
      this.userDialog = true
      this.userTitle = '编辑'
      this.userForm.username = row.username
      this.userForm.mobile = row.mobile
      this.userForm.sex = row.sex
    },
    editUser() {
      this.$refs.userFormRef.validate( valid => {
        if (valid) {
          console.log('确认编辑用户');
          console.log(this.userForm.username);
          
          this.userDialog = false
        }
      }) 
    },
    removeUser(id) {
      const confirmResult = this.$confirm(
        '此操作将永久删除该用户，是否继续？',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'          
        }
      ).catch(err => err)
      if (confirmResult == 'confirm') {

        console.log('删除用户')

      }
    }
  }
}
</script>

<style>

</style>