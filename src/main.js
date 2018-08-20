import "mint-ui/lib/style.css"
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"
import Vue from "vue"
import {Header} from "mint-ui"
import VueRouter from "vue-router"
import app from "./pages/app.vue"
import router1 from "./router.js"
Vue.component(Header.name,Header)
Vue.use(VueRouter)
let vm=new Vue(
    {
      el:"#app",
      router:router1,
      render:c=>c(app),
      
    }
)