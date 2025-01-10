<template>
    <article class="card">
        <header>
            <span>id: {{ id }}</span>
            <div>
                <router-link :to="`/task/${id}`">
                    <h2>{{ title }}</h2>
                </router-link>
                <task-status :status="status" :completion-date="completionDate"/>
            </div>
        </header>
        <p>{{ description }}</p>
    </article>
</template>

<script lang="ts">
import TaskStatus from '@/freelance/entity/TaskStatus/TaskStatus.vue';


export default {
    components: { TaskStatus },
    props     : [ 'id', 'title', 'description', 'status', 'completionDate' ],
};
</script>

<style>
.card {
    padding       : 10px;
    border-radius : 10px;
    border        : 1px solid #AAA;
    background    : #EEE;

    header {
        padding-bottom : 3px;
        margin-bottom  : 3px;

        a {
            text-decoration : none;
            color           : dodgerblue;

            &:active {
                color           : blueviolet;
                text-decoration : underline;
            }
        }

        & > span {
            font-size : 10px;
            color     : #AAA;
        }

        & > div {
            display         : flex;
            flex-direction  : row;
            justify-content : space-between;
            align-items     : center;
            gap             : 10px;
        }
    }

    p {
        font-size : 16px;
    }
}
</style>