import type { StoreOptions } from 'vuex';
import type {
    CreateTaskData,
    Task,
    UpdateTaskData,
} from '@/freelance/types/task.types.ts';
import { getTasksAction } from '@/freelance/action/getTasks/getTasks.action.ts';
import {
    deleteTaskAction,
} from '@/freelance/action/deleteTask/deleteTask.action.ts';
import {
    updateTaskAction,
} from '@/freelance/action/updateTask/updateTask.action.ts';
import {
    createTaskAction,
} from '@/freelance/action/createTask/createTask.action.ts';
import { getTaskAction } from '@/freelance/action/getTask/getTask.action.ts';


export default {
    namespaced: true,
    state     : {
        loading : false,
        tasks   : [],
        uploaded: false,
    },
    getters   : {
        tasks (store) {
            return store.tasks;
        },
        loading (store) {
            return store.loading;
        },
        uploaded (store) {
            return store.uploaded;
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
        setLoading (state, status) {
            state.loading = status;
        },
        addTask (state, task) {
            console.log('Add task', task);
            state.tasks.push(task);
        },
    },
    actions   : {
        async uploadTasks (context) {
            context.commit('setLoading', true);
            context.commit('setTasks', await getTasksAction());
            context.commit('setLoading', false);
            context.state.uploaded = true;
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
            context.commit('updateTask', payload);
        },
        async createTask (context, payload: CreateTaskData) {
            const taskResponse = await createTaskAction(payload);
            const task         = await getTaskAction(taskResponse.name);
            context.commit('addTask', task);
        },
    },
} as StoreOptions<{ tasks: Array<Task>, loading: boolean, uploaded: boolean }>;