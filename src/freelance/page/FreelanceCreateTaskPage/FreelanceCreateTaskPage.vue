<template>
    <form @submit.prevent="formSubmitHandler">
        <div>
            <label>
                <span>Заголовок</span>
                <input type="text" v-model="title"/>
            </label>
        </div>
        <div>
            <label>
                <span>Описание</span>
                <input type="text" v-model="description"/>
            </label>
        </div>
        <div>
            <label>
                <span>Срок выполнения</span>
                <input type="date" v-model="date"/>
            </label>
        </div>
        <button type="submit">Создать</button>
    </form>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { TaskStatus } from '@/freelance/types/task.types.ts';


export default {
    setup () {
        const store       = useStore();
        const title       = ref('');
        const description = ref('');
        const date        = ref('');
        const creating    = ref(false);
        const canCreate   = computed(() => title.value && description.value && date.value);

        const formSubmitHandler = function () {
            if (canCreate && !creating.value) {
                store.dispatch('freelance/createTask', {
                    title         : title.value,
                    description   : description.value,
                    completionDate: date.value,
                    status        : TaskStatus.IDLE,
                })
                    .then(() => {
                        title.value       = '';
                        description.value = '';
                        date.value        = '';
                    });
            }
        };

        return { title, description, date, formSubmitHandler };
    },
};
</script>