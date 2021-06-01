import Vue from 'vue'
import Intro from './introduction.vue'

import '../../plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(Intro)
}).$mount('#introduction')