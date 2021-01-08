import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/doctors'},
    {path: '/doctors', component: null},
    {
      path: '/doctor/:id', component: null, children: [
        {path: '/contact', component: null},
      ]
    },
    {path: '/register', component: null},
    {path: '/requests', component: null},
    {path: '/:notFound(.*)', component: null},
  ],
})


export default router