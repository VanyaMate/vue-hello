<script lang="ts">
export default {
    props: {
        value: String,
    },
};
</script>

<template>
    <img :src="value" alt="avatar"/>
</template>

<style scoped>
img {
    border-radius : 50%;
    max-width     : 200px;
    margin        : 10px;
}
</style>