import account from "./pages/Account.vue"
import goodlist from "./pages/Goodlist.vue"
import VueRouter from "vue-router"
let router1=new VueRouter(
    {
        routes:[
            {path:'/account',component:account},
            {path:'/goodlist',component:goodlist},
        ]
    }
)
export default router1;