<template>
    <section>
        <task-card
            v-for="task in tasks"
            :key="task.id"
            :title="task.title"
            :id="task.id"
            :description="task.description"
            :status="task.status"
        />
    </section>
</template>

<script lang="ts">
import TaskCard from '@/freelance/entity/TaskCard/TaskCard.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';


export default {
    components: { TaskCard },
    setup () {
        const store = useStore();
        const tasks = computed(() => store.getters['freelance/tasks']);
        return { tasks };
    },
    beforeCreate () {
        this.$store.dispatch('freelance/uploadTasks');
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