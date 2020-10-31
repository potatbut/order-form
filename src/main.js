import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TextareaAutosize from 'vue-textarea-autosize'
 
Vue.use(TextareaAutosize)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
