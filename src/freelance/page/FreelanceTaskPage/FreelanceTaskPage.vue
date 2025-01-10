<template>
    <section v-if="task">
        <span>id: {{ id }}</span>
        <header>
            <h2>{{ task.title }}</h2>
            <task-status :status="task.status" :completion-date="task.completionDate"></task-status>
        </header>
        <form @submit.prevent="submitHandler">
            <div>
                <label>Заголовок</label>
                <input type="text" v-model="title">
            </div>
            <div>
                <label>Описание</label>
                <input type="text" v-model="description">
            </div>
            <div>
                <label>Срок выполнения</label>
                <input type="date" v-model="date"/>
            </div>
            <button type="submit" :disabled="updating">Обновить</button>
        </form>
        <hr/>
        <DeleteTaskButton :id="id"/>
    </section>
    <h2 v-else-if="loading">Загрузка..</h2>
    <h2 v-else>Не найдено</h2>
</template>

<script lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { type Task, TaskStatus } from '@/freelance/types/task.types.ts';
import DeleteTaskButton from '@/freelance/feature/button/DeleteTaskButton/DeleteTaskButton.vue';
import TaskStatus from '@/freelance/entity/TaskStatus/TaskStatus.vue';


export default {
    components: { TaskStatus, DeleteTaskButton },
    computed  : {
        TaskStatus () {
            return TaskStatus;
        },
    },
    props     : [ 'id' ],
    setup (props) {
        const store       = useStore();
        const task        = computed<Task | null>(() => store.getters['freelance/tasks'].find((task: Task) => task.id === props.id));
        const loading     = computed<boolean>(() => store.getters['freelance/loading']);
        const title       = ref(task?.value?.title ?? '');
        const description = ref(task?.value?.description ?? '');
        const date        = ref(task?.value?.completionDate ?? null);
        const updating    = ref(false);
        const canUpdate   = computed(() => task && title.value.length && description.value.length);

        watch([ task ], () => {
            title.value       = task.value?.title ?? '';
            description.value = task.value?.description ?? '';
            date.value        = task.value?.completionDate ?? null;
        });

        onBeforeMount(() => {
            store.dispatch('freelance/uploadTasks');
        });

        const submitHandler = function () {
            if (canUpdate && task.value && !updating.value) {
                updating.value = true;
                store.dispatch('freelance/updateTask', {
                    id        : task.value.id,
                    updateData: {
                        title         : title.value,
                        description   : description.value,
                        completionDate: date.value,
                    },
                })
                    .finally(() => updating.value = false);
            }
        };

        return { task, title, description, date, updating, loading, submitHandler };
    },
};
</script>

<style scoped>
section {
    display        : flex;
    flex-direction : column;
    gap            : 10px;

    header {
        display         : flex;
        flex-direction  : row;
        justify-content : space-between;
    }

    > span {
        font-size : 10px;
        color     : #AAA;
    }

    > form {
        display        : flex;
        flex-direction : column;
        gap            : 5px;

        > div {
            display        : flex;
            flex-direction : column;
            gap            : 5px;

            label {
                border-bottom : 1px dashed #AAA;
                color         : #AAA;
            }

            input {
                padding : 5px;
            }
        }

        button {
            padding : 5px;
        }
    }
}
</style>