/**
 * @Date:   2020-03-26T17:40:34+00:00
 * @Last modified time: 2020-03-27T18:46:06+00:00
 */



require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
