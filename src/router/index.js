import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Login from "../components/Login";



Vue.use(Router);

export default new Router({
  routes: [
    {
          path: '/',
          name:'Index',
          component:Index,
    },
    {
          path: '/index',
          name:'Index',
          component:Index,
    },
    {
          path: '/login',
          name:'Login',
          component:Login,
    },
    // {
    //       path: '/bodys',
    //       name:'Bodys',
    //       component:Bodys,
    // },
    // {
    //       path: '/footer',
    //       name:'Footer',
    //       component:Footer,
    // },


  ]
})
