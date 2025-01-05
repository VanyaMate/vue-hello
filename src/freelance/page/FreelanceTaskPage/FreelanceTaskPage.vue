<template>
    <section v-if="task">
        <span>id: {{ id }}</span>
        <h2>{{ task.title }}</h2>
        <form @submit.prevent="submitHandler">
            <div>
                <label>Заголовок</label>
                <input type="text" v-model="title">
            </div>
            <div>
                <label>Описание</label>
                <input type="text" v-model="description">
            </div>
            <button type="submit">Обновить</button>
        </form>
    </section>
    <h2 v-else>Не найдено</h2>
</template>

<script lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import { type Task, TaskStatus } from '@/freelance/types/task.types.ts';


export default {
    computed: {
        TaskStatus () {
            return TaskStatus;
        },
    },
    props   : [ 'id' ],
    setup (props) {
        const store       = useStore();
        const task        = computed<Task>(() => store.getters['freelance/tasks'].find((task: Task) => task.id === props.id));
        const title       = ref(task.value.title ?? '');
        const description = ref(task.value.description ?? '');
        const canUpdate   = computed(() => task && title.value.length && description.value.length);

        onBeforeMount(() => {
            store.dispatch('freelance/uploadTasks');
        });

        const submitHandler = function () {
            if (canUpdate) {
                store.dispatch('freelance/updateTask', {
                    id        : task.value.id,
                    updateData: {
                        title      : title.value,
                        description: description.value,
                    },
                });
            }
        };

        return { task, title, description, submitHandler };
    },
};
</script>

<style scoped>
section {
    display        : flex;
    flex-direction : column;
    gap            : 10px;

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