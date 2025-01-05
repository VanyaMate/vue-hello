import { createApp } from 'vue';
import '@/app/shared/styles/style.css';
import App from '@/freelance/App.vue';
import freelanceStore from '@/freelance/store/freelance.store.ts';
import { createStore } from 'vuex';
import freelanceRouter from '@/freelance/router/freelance.router.ts';


const store = createStore({ modules: { freelance: freelanceStore } });

createApp(App)
    .use(store)
    .use(freelanceRouter)
    .mount('#app');



