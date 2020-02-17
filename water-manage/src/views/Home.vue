<template>
  <el-container class="home">
    <el-header>
      <div class="header_left">节水监测云平台</div>
      <ul class="header_right">
        <li @click="goFullScreen">
          <i slot="suffix" class="el-icon-full-screen"></i>  
          <span>全屏</span>
        </li>
        <li>
          <i slot="suffix" class="el-icon-bell"></i>          
          <span>提示</span>
        </li>
        <li>
          <span>用户名</span>
        </li>
        <li @click="logout">
          <span>退出</span>
        </li>
      </ul>
      <ul class="date_wrap">
        <li class="fs_10">
          <div>{{weekDate}}</div>
          <div>{{yearDate}}</div>
        </li>
        <li class="fs_30">{{timeDate}}</li>
      </ul>       
    </el-header>
    <el-container>
      <el-aside width="218px">
        <el-menu
          default-active="activePath"
          text-color="#697b86"
          active-text-color="#409EFF"
          unique-opened
          router>
          <el-submenu 
            :index="item.id"
            v-for="item in meunlist"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconObj[item.id]" style="color:sykblue"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item 
              :index=" '/' + childItem.path"
              v-for="childItem in item.child"
              :key="childItem.id"
              @click="saveChildPath('/' + childItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">{{childItem.authName}}</span>
              </template>
            </el-menu-item>            
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      iconObj: {
        '0': 'el-icon-user',
        '1': 'el-icon-map-location',
        '2': 'el-icon-tickets'
      },
      meunlist: [ 
        {id: '0', authName: "用户管理", path: "user", 
          child:[{id: '10', authName: "用户", path: "user"}]
        }, 
        {id: '1', authName: "区域管理", path: "area",
          child:[{id: '11', authName: "区域", path: "area"}]
        },
        {id: '2', authName: "水表管理", path: "water",
          child:[{id: '12', authName: "水表", path: "water"}]
        },
      ],
      activePath: '',
      weekDate: '',
      yearDate: '',
      timeDate: '',
    }
  },
  created () {

    this.activePath = window.sessionStorage.getItem('activePath')

    // 动态加载时间
    const timer = setInterval(() => {
      this.getNowTime()
    }, 500)
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {            
        clearInterval(timer)                                    
    })    
    // 显示星期几
    let weekDay= ['日', '一', '二', '三', '四', '五', '六'] 
    let weekNum = new Date().getDay() 
    this.weekDate = '星期' + weekDay[weekNum]    
    
  },
  methods: {
    getNowTime() {
      const dt = new Date()
      const y = dt.getFullYear()
      const m = (dt.getMonth() + 1 + '').padStart(2, '0')
      const d = (dt.getDate() + '').padStart(2, '0')

      const hh = (dt.getHours() + '').padStart(2, '0')
      const mm = (dt.getMinutes() + '').padStart(2, '0')
      const ss = (dt.getSeconds() + '').padStart(2, '0')
      this.yearDate = `${y}-${m}-${d}`
      this.timeDate = `${hh}:${mm}`
    },  
    goFullScreen() {
      this.$router.push('/index')
    },
    logout() {
      this.$router.push('/login')
    },
    saveChildPath(activePath) {
      window.sessionStorage.setItem('activePath',activePath)
      this.activePath = activePath
    },    

  }  
}
</script>

<style lang="less" scoped>
  .home {
    width: 100%;
    height: 100%;
    .el-header {
      background-color: #0091ea;
      color: #FFF;
      width: 100%;
      height: 60px;
      .header_left {
        float: left;
        width: 260px;
        line-height: 60px;
        margin-left: 30px;
        font-family: "微软雅黑";
        color: #f7fafe;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 0.1em;          
      }
      .header_right {
        // background-color: pink;
        width: 300px;
        float: right;
        color: #f7fafe;
        font-size: 14px;
        >li {
          line-height: 60px;
          font-weight: 600;
          float: left;
          padding: 0 10px;
          cursor: pointer;
          >i {
            font-size: 22px;
            vertical-align: -4px;
          }
          >span {
            display: inline-block;
            line-height: 60px;
            padding: 0 4px;
          }
        }
        .active,
        >li:hover {
          padding: 0 10px;
          background-color: #337ab7;
          border-radius: 4px;
        }
      }
      .date_wrap {
        opacity: 0.5;
        float: right;
        width: 180px;
        height: 100%;
        >li {
          float: left;
        }
        >:nth-child(1) {
          line-height: 46px;
          >div {
            height: 16px;
          }
        }
        >:nth-child(2) {
          line-height: 60px;
          padding-left: 6px;
          font-weight: 700;
        }         
      }


    }
    
    .el-aside {
      color: #333;
      border-right: 2px #dde5e9 solid;
      .el-menu {
        border-right: 0;
      }
    }
    
    .el-main {
      padding: 0;
    }
  }


</style>