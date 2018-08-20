import VueRouter from "vue-router"
import cart from "./pages/cart.vue"
import home from "./pages/homeContent.vue"
import member from "./pages/member.vue"
import search from "./pages/search.vue"
let router1=new VueRouter(
    {
        routes:[
             {path:"/home",component:home},
             {path:"/member",component:member},
             {path:"/cart",component:cart},
             {path:"/search",component:search},
            
        ],
        linkActiveClass:'mui-active'
    }
)
export default router1;