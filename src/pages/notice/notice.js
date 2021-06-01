import Vue from 'vue'
import Notice from './notice.vue'

import '../../plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(Notice)
}).$mount('#notice')