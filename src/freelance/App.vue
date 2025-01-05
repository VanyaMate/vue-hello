<template>
    <freelance-nav-bar/>
    <main>
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
import FreelanceNavBar from '@/freelance/widget/FreelanceNavBar/FreelanceNavBar.vue';


export default {
    components: { FreelanceNavBar },
    setup () {

    },
};
</script>

<style scoped>
main {
    padding : 10px;
}
</style>