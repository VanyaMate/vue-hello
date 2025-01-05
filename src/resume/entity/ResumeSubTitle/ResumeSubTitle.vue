<script lang="ts">
export default {
    props: {
        value: String,
    },
};
</script>

<template>
    <h2>{{ value }}</h2>
</template>

<style scoped>
h2 {
    border-bottom  : 1px solid #AAA;
    padding-bottom : 2px;
    font-size      : 18px;
}
</style>