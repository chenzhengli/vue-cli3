import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "../../store";
import axios from "axios";
Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
axios.interceptors.request.use((config)=>{
  console.log(66666,config);
  return config
},(err)=>{
  return Promise.reject(err)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
