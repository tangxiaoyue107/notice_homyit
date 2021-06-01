import Vue from 'vue'
import App from './adminiinfor.vue'

import '../../plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#adminiinfor')