import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/less/global.less'
import './plugins/element.js'
import dataV from '@jiaminghi/data-view'
import G2 from '@antv/g2'
import '../src/assets/less/clock.less'
import TreeTable from 'vue-table-with-tree-grid'
import Vue2OrgTree from 'vue2-org-tree';


Vue.config.productionTip = false
Vue.use(dataV)
Vue.use(G2)
Vue.use(Vue2OrgTree)
Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
