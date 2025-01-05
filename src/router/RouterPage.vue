<template>
    <the-navbar :visible="true"></the-navbar>
    <div class="container with-nav">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import TheNavbar from '@/router/components/TheNavbar.vue';
import Login from '@/router/view/Login.vue';


export default {
    components: { TheNavbar, Login },
    provide () {
        return {
            emails: [
                { id: 1, theme: 'Купил себе PlayStation 5' },
                { id: 2, theme: 'Выучил Vue Router' },
                { id: 3, theme: 'Хочу изучить весь Vue' },
                { id: 4, theme: 'А следующий блок про Vuex!' },
                { id: 5, theme: 'А что там на счет Vue Hooks?' },
            ],
        };
    },
};
</script>

<style>
</style>