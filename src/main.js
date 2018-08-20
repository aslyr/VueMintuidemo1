import "./css/index.scss"
import "bootstrap/dist/css/bootstrap.css"
import Vue from "vue"
import VueRouter from "vue-router"
import login from "./pages/login.vue"
import account from "./pages/Account.vue"
import goodlist from "./pages/Goodlist.vue"
import router1 from "./router.js"
const bootstrap=require("bootstrap")
Vue.use(VueRouter)

let vm=new Vue(
    {
      el:"#app",
      data:{
          msg:"vue，你好！"
      }  ,
      router:router1,
      render:c=>c(login),
      
    }
)