import "./css/index.scss"
import "bootstrap/dist/css/bootstrap.css"
import Vue from "vue"
const bootstrap=require("bootstrap")
console.log("你好，世界,我是高凯")
let vm=new Vue(
    {
      el:"#app",
      data:{
          msg:"vue，你好！"
      }  
    }
)