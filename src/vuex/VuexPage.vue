<template>
    <the-navbar></the-navbar>
    <div>
        <h2>Счетчик {{ $store.getters['counterModule/counter'] }}</h2>
        <button @click="$store.commit('counterModule/increment')">+1</button>
    </div>
</template>

<script lang="ts">
import TheNavbar from '@/vuex/TheNavbar.vue';


export default {
    components: { TheNavbar },
};
</script>