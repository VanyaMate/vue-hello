import type { ActionContext } from 'vuex';


export default {
    namespaced: true,
    state () {
        return {
            counter: 1,
        };
    },
    mutations: {
        increment (state: { counter: number }) {
            state.counter++;
        },
    },
    getters  : {
        counter (state: { counter: number }) {
            return state.counter;
        },
    },
    actions  : {
        incrementAsync (context: ActionContext<{ counter: number }, {
            counter: number
        }>, payload: any) {
            console.log(context, payload);
        },
    },
};