<template>
    <div class="card">
        <h1>Привет на главной</h1>

        <p>Тут ты можешь перейти на любую страницу и почитать заранее заготовленные письма :)</p>

        <router-link to="mail">To Mail</router-link>
    </div>
</template>

<script lang="ts">
export default {
    beforeRouteEnter (to, from, next) {
        console.log('before route enter', to, from);
        next();
    },
    async beforeRouteLeave (to, from, next) {
        await new Promise<void>((resolve) => {
            setTimeout(resolve, 1000);
        });
        next();
    },
};
</script>

<style scoped>

</style>