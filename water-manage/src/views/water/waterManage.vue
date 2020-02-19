<template>
  <div>
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
            @click="waterMeterDialog = true">
            新建水表
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
            v-for="(item, index) in waterCloumn"
            :key="index"
            size="mini"
            :prop="item.name"
            :min-width="item.minWidth"
            :label="item.label">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="120px"
            fixed="right">
            <template slot-scope="scope">
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

    <!-- 添加水表 -->
    <el-dialog
      title="新建水表"
      :visible.sync="waterMeterDialog"
      width="38%"
      @close="waterDialogClosed">
      <el-form
       :model="waterForm"
       :rules="waterFormRules"
       ref="waterFormRef"
       label-width="70px">
        <el-form-item label="SN" prop="sn">
          <el-input size="small" v-model="waterForm.sn"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="waterMeterDialog = false" size="small">取消</el-button>
        <el-button type="primary" @click="addWaterBtn" size="small">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import table from '@/mixins/tables'
export default {
  data () {
    return {
      waterMeterDialog: false,
      waterForm: {
        sn: ''
      },
      waterFormRules: {
        sn: [
          {
            required: true,
            message: '请输入Sn',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 10,
            message: '用户名长度在 2 到 10 个字符之间',
            trigger: 'blur'
          }
        ]
      },  
      tableData: [ ],
      waterCloumn: [
        { name: 'sn', label: 'SN', minWidth: '160px' },
        { name: 'founder', label: '创建人', minWidth: '160px' },
        { name: 'founderTime', label: '创建时间', minWidth: '160px' }     
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
        {id: 0, sn: '123456789', founder: ' 赵高',founderTime: '2019-12-15'},       
        {id: 1, sn: '69856', founder: ' 赵高',founderTime: '2019-12-15'},  
        {id: 2, sn: '996325', founder: ' 赵高',founderTime: '2019-12-15'},  
        {id: 3, sn: '511', founder: ' 赵高',founderTime: '2019-12-15'},  
        {id: 4, sn: '9965', founder: ' 赵高',founderTime: '2019-12-15'},  
      ]
      this.total = 1
    },
    waterDialogClosed() {
      this.$refs.waterFormRef.resetFields()
    },
    addWaterBtn() {
      this.$refs.waterFormRef.validate( valid => {
        if (valid) {
          console.log('确认新建水表');
          console.log(this.waterForm.sn);
          this.waterMeterDialog = false
        }
      }) 
    },
    editUser() {
      this.$refs.waterFormRef.validate( valid => {
        if (valid) {
          console.log('确认编辑sn');
          console.log(this.waterForm.sn);
          
          this.waterMeterDialog = false
        }
      }) 
    },
    removeUser(id) {
      const confirmResult = this.$confirm(
        '此操作将永久删除该SN，是否继续？',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'          
        }
      ).catch(err => err)
      if (confirmResult == 'confirm') {

        console.log('删除SN')

      }
    }
  }
}
</script>

<style>

</style>