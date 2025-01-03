import { createApp } from 'vue';
import './shared/styles/style.css';
import App from './app/App.vue';
import PlanPage from './plan/page/PlanPage.vue';


createApp(App).mount('#app');
createApp(PlanPage).mount('#plan-page');



