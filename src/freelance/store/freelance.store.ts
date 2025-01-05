import type { StoreOptions } from 'vuex';
import type { Task, UpdateTaskData } from '@/freelance/types/task.types.ts';
import { getTasksAction } from '@/freelance/action/getTasks/getTasks.action.ts';
import {
    deleteTaskAction,
} from '@/freelance/action/deleteTask/deleteTask.action.ts';
import {
    updateTaskAction,
} from '@/freelance/action/updateTask/updateTask.action.ts';


export default {
    namespaced: true,
    state     : {
        tasks: [],
    },
    getters   : {
        tasks (store) {
            return store.tasks;
        },
    },
    mutations : {
        setTasks (state, tasks) {
            state.tasks = tasks;
        },
        deleteTask (state, id) {
            state.tasks = state.tasks.filter((task) => task.id !== id);
        },
        updateTask (state, data: { id: string, updateData: UpdateTaskData }) {
            for (let i = 0; i < state.tasks.length; i++) {
                if (state.tasks[i].id === data.id) {
                    state.tasks[i] = { ...state.tasks[i], ...data.updateData };
                    return;
                }
            }
        },
    },
    actions   : {
        async uploadTasks (context) {
            context.commit('setTasks', await getTasksAction());
        },
        async deleteTask (context, payload: string) {
            await deleteTaskAction(payload);
            context.commit('deleteTask', payload);
        },
        async updateTask (context, payload: {
            id: string,
            updateData: UpdateTaskData
        }) {
            await updateTaskAction(payload.id, payload.updateData);
            context.commit('deleteTask', payload);
        },
    },
} as StoreOptions<{ tasks: Array<Task> }>;