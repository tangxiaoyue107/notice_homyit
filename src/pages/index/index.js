import Vue from 'vue'
import App from './index.vue'

import '@/assets/lib/jquery.min.js'
import '@/assets/lib/responsiveslides.min.js'
import '@/assets/js/slide.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#index')