import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/less/global.less'
import './plugins/element.js'
import dataV from '@jiaminghi/data-view'
import G2 from '@antv/g2'
import TreeTable from 'vue-table-with-tree-grid'

Vue.config.productionTip = false
Vue.use(dataV)
Vue.use(G2)
Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
