import "./lib/mui/css/mui.min.css"
import Vue from "vue"
import VueRouter from "vue-router"
import app from "./pages/app.vue"
import router1 from "./router.js"

Vue.use(VueRouter)
let vm=new Vue(
    {
      el:"#app",
      data:{
          msg:"vue，你好！"
      }  ,
      router:router1,
      render:c=>c(app),
      
    }
)