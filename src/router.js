import {createRouter, createWebHistory} from 'vue-router'
import NotFound from "@/pages/NotFound";
import RequestsReceived from "@/pages/requests/RequestsReceived";
import DoctorRegistration from "@/pages/doctors/DoctorRegistration";
import ContactDoctor from "@/pages/requests/ContactDoctor";
import DoctorDetail from "@/pages/doctors/DoctorDetail";
import DoctorsList from "@/pages/doctors/DoctorsList";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/doctors'},
    {path: '/doctors', component: DoctorsList},
    {
      path: '/doctor/:id',
      component: DoctorDetail,
      children: [
        {path: 'contact', component: ContactDoctor},
      ]
    },
    {path: '/register', component: DoctorRegistration},
    {path: '/requests', component: RequestsReceived},
    {path: '/:notFound(.*)', component: NotFound},
  ],
})


export default router