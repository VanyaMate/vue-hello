import { createStore } from 'vuex';
import counterModule from './modules/counter.module';


export default createStore({
    modules: {
        counterModule,
    },
});