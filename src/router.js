
import { createRouter, createWebHistory, createWebHashHistory} from "vue-router"

import Home from "@/page/Home.vue";
import About from "@/page/About.vue"
import Tv from "@/page/Tv.vue";
import CurrentTv from '@/page/CurrentTv.vue'

const routes = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/",  name: "home", component: Home},
        { path: "/about",  name: "about", component: About},
        { path: "/tv",  name: "tv", component: Tv},
        { path: "/tv/:id", name: "currentTv", component: CurrentTv}
    ]
})

export default routes