import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/router/view/Login.vue';


const Forget       = () => import('@/router/view/Forget.vue');
const Dashboard    = () => import('@/router/view/Dashboard.vue');
const AppEmailBody = () => import('@/router/components/AppEmailBody.vue');
const Mail         = () => import('@/router/view/Mail.vue');

const router = createRouter({
    routes : [
        {
            path     : '/login',
            component: Login,
            alias    : '/',
        },
        {
            path     : '/forget',
            component: Forget,
            meta     : {
                cantEnter: true,
            },
        },
        {
            path       : '/dashboard',
            component  : Dashboard,
            name       : 'board',
            beforeEnter: () => {

            },
        },
        {
            path     : '/mail',
            component: Mail,
            children : [
                {
                    path     : ':mailId',
                    component: AppEmailBody,
                    props    : true,
                },
            ],
        },
        {
            path: '/:notFound(.*)', redirect: '/login', // или component: P404
        },
    ],
    history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    if (to.meta.cantEnter) {
        next({ name: 'board' }); // false -> отменить, '/path'
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    console.log('after', to, from);
});

export default router;