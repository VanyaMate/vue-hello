<script lang="ts">

defineProps<HTMLInputElement>();

</script>

<template>
  <input type="text" v-bind:placeholder="placeholder" v-bind:value="value"/>
</template>