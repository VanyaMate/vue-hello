<template>
    <section v-if="tasks.length">
        <task-card
            v-for="task in tasks"
            :key="task.id"
            :title="task.title"
            :id="task.id"
            :description="task.description"
            :status="task.status"
            :completion-date="task.completionDate"
        />
    </section>
    <h2 v-else-if="loading">Загрузка..</h2>
    <h2 v-else>Пусто</h2>
</template>

<script lang="ts">
import TaskCard from '@/freelance/entity/TaskCard/TaskCard.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';


export default {
    components: { TaskCard },
    setup () {
        const store   = useStore();
        const tasks   = computed(() => store.getters['freelance/tasks']);
        const loading = computed(() => store.getters['freelance/loading']);

        return { tasks, loading };
    },
    beforeCreate () {
        if (!this.$store.getters['freelance/uploaded']) {
            this.$store.dispatch('freelance/uploadTasks');
        }
    },
};
</script>

<style scoped>
section {
    display        : flex;
    flex-direction : column;
    gap            : 10px;
}
</style>