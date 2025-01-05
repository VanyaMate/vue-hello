<template>
    <div v-if="email">
        <h2>{{ email.theme }}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium
            nostrum odio quis soluta sunt velit?</p>
        <button class="btn" @click="$router.push('/mail')">Закрыть</button>
    </div>
</template>

<script lang="ts">
export default {
    props   : [ 'mailId' ],
    inject  : [ 'emails' ],
    computed: {
        email () {
            return this.emails?.find((email) => email.id.toString() === this.mailId.toString());
        },
    },
};
</script>

<style scoped>

</style>