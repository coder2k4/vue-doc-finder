import {createRouter, createWebHistory} from 'vue-router'
import NotFound from "@/pages/NotFound";
import RequestsReceived from "@/pages/requests/RequestsReceived";
import DoctorRegistration from "@/pages/doctors/DoctorRegistration";
import ContactDoctor from "@/pages/requests/ContactDoctor";
import DoctorDetail from "@/pages/doctors/DoctorDetail";
import DoctorsList from "@/pages/doctors/DoctorsList";
import UserAuth from "./pages/auth/UserAuth";
import store from "@/store";


/**
 * Маршрутное древо
 * @type {Router}
 */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/doctors'},
        {path: '/doctors', component: DoctorsList},
        {
            path: '/doctor/:id',
            component: DoctorDetail,
            props: true, // прокидываем id как props
            children: [
                {path: 'contact', component: ContactDoctor},
            ]
        },
        {path: '/register', component: DoctorRegistration, meta: {reqAuth: true}},
        {path: '/requests', component: RequestsReceived, meta: {reqAuth: true}},
        {path: '/auth', component: UserAuth, meta: {reqUnAuth: true}},
        {path: '/:notFound(.*)', component: NotFound},
    ],
})


/**
 * Проверяем каждый роут на метаданные.
 * Манипулируем роутами от полученных значений
 */
router.beforeEach((to, from, next) => {

    // Если не авторизированы, но требуется авторизация
    if (to.meta.reqAuth && !store.getters['auth/isAuthenticated']) {
        next('/auth')
    }
    // Если авторизированы, но не требуется авторизация
    else if (to.meta.reqUnAuth && store.getters['auth/isAuthenticated']) {
        next('/doctors')
    }
    else {
        next()
    }

})


export default router