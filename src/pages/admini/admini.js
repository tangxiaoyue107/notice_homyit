import Vue from 'vue'
import App from './admini.vue'
import '../../plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../assets/css/element.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#admini')