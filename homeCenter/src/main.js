// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import Animate from 'animate.css'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(Animate)
Vue.prototype.axios=axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
