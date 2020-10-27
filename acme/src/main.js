// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import axios from 'axios';
import vueAxios from 'vue-axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
