import { createRouter, createWebHistory } from 'vue-router';
import FreelanceTasksPage
    from '@/freelance/page/FreelanceTasksPage/FreelanceTasksPage.vue';
import FreelanceTaskPage
    from '@/freelance/page/FreelanceTaskPage/FreelanceTaskPage.vue';
import FreelanceCreateTaskPage
    from '@/freelance/page/FreelanceCreateTaskPage/FreelanceCreateTaskPage.vue';


export default createRouter({
    history        : createWebHistory(),
    routes         : [
        {
            path     : '/',
            component: FreelanceTasksPage,
        },
        {
            path     : '/task/:id',
            component: FreelanceTaskPage,
            props    : true,
        },
        {
            path     : '/create',
            component: FreelanceCreateTaskPage,
        },
    ],
    linkActiveClass: 'active',
});