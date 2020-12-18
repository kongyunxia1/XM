import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
import Vant from "vant";
import "vant/lib/index.css";
import store from './store'
import GeminiScrollbar from "vue-gemini-scrollbar";
import { NavBar } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(NavBar);
Vue.use(GeminiScrollbar);
Vue.use(Vant);
Vue.use(store)
Vue.prototype.$http = axios;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
