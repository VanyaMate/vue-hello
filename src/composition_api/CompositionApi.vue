<template>
    <h1>[{{ version }}] {{ name.len.max.value }}</h1>
    <button @click="changeInfo">Update</button>
</template>

<script lang="ts">
import { ref } from 'vue';


export default {
    setup () {
        const name    = ref({
            len: {
                min: 0,
                max: {
                    type : 'range',
                    value: 100,
                },
            },
        });
        const version = ref(3);

        const changeInfo = function () {
            name.value.len.max.value = 200;
        };

        return {
            name, version, changeInfo,
        };
    },
    /*data () {
     return {
     name   : 'Vue3',
     version: 3,
     };
     },
     methods: {
     changeInfo () {
     this.name    = 'VueNext';
     this.version = 4;
     },
     },*/
};
</script>