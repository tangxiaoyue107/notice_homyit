import Vue from 'vue'
import App from './login.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#container')