import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import router from "./router";
import store from "./store/index";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
