<template>
    <button @click="removeTaskHandler" :disabled="removing">Удалить</button>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


export default {
    props: {
        id: String,
    },
    setup (props) {
        const store             = useStore();
        const navigate          = useRouter();
        const removing          = ref(false);
        const removeTaskHandler = function () {
            removing.value = true;
            store.dispatch('freelance/deleteTask', props.id)
                .then(() => {
                    navigate.replace({ name: 'home' });
                });
        };

        return { removing, removeTaskHandler };
    },
};
</script>

<style scoped>
button {
    background    : darkred;
    border        : none;
    outline       : none;
    color         : #FFF;
    border-radius : 5px;
    padding       : 5px;
    cursor        : pointer;;
}
</style>