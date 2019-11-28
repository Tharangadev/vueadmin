import router from 'vue-router';
import vue from 'vue';
import '../../node_modules/nprogress/nprogress.css';
import NProgress from 'nprogress'

vue.use(router);

let routers= new router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('@/views/DashBoard.vue')
    },
    {
      path: '/store',
      name: 'store',
      component:()=>import('@/views/Store')
    },
    {
      path: '/blog',
      name: 'blog',
      component:()=>import('@/views/Blog')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register'),
    },{
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/Chat'),
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/views/ForgotPassword'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component:()=>import('@/views/Gallery')
    },
    {
      path: '/email',
      name: 'email',
      component: () => import( '@/views/EmailView' ),
      children: [
        {
          path: 'inbox',
          name: 'inbox',
          component:()=>import('@/views/EmailView/InboxEmails')
        },
        {
          path: 'createmail',
          name: 'createmail',
          component:()=>import('@/views/EmailView/CreateEmail')
        },
        {
          path: 'sentmail',
          name: 'sentmail',
          component:()=>import('@/views/EmailView/SentMails')
        },
      ],
    },
  ],
});

routers.beforeResolve((to,from,next)=>{
	if(to.name){
    NProgress.start()
    next()
	}
})
routers.afterEach((to, from) => {
  NProgress.done()
})








export default routers
