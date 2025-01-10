<template>
    <span :class="statusStyles">
        {{ statusTitle }}
    </span>
</template>

<script lang="ts">
import { computed } from 'vue';
import { TaskStatus } from '@/freelance/types/task.types.ts';


export default {
    props: [ 'status', 'completionDate' ],
    setup (props) {
        const statusTitle = computed(() => {
            if (new Date(props.completionDate).getTime() < Date.now()) {
                return 'Просрочено';
            }

            switch (props.status) {
                case TaskStatus.CANCELED:
                    return 'Отменена';
                case TaskStatus.IDLE:
                    return 'Ожидает';
                case TaskStatus.WIP:
                    return 'В работе';
                case TaskStatus.COMPLETED:
                    return 'Завершена';
                default:
                    return 'Ошибка';
            }
        });

        const statusStyles = computed(() => {
            if (new Date(props.completionDate).getTime() < Date.now()) {
                return 'error';
            }

            switch (props.status) {
                case TaskStatus.CANCELED:
                    return 'canceled';
                case TaskStatus.IDLE:
                    return 'idle';
                case TaskStatus.WIP:
                    return 'wip';
                case TaskStatus.COMPLETED:
                    return 'completed';
                default:
                    return 'error';
            }
        });

        return {
            statusTitle: statusTitle,
            statusStyles,
        };
    },
};
</script>

<style scoped>
span {
    padding       : 2px 5px;
    display       : inline-block;
    border-radius : 10px;
    border        : 1px solid #AAA;

    &.canceled {
        color        : darkred;
        border-color : darkred;
    }

    &.error {
        color        : red;
        border-color : red;
    }

    &.idle {
        color        : gray;
        border-color : gray;
    }

    &.wip {
        color        : dodgerblue;
        border-color : dodgerblue;
    }

    &.completed {
        color        : darkgreen;
        border-color : darkgreen;
    }
}
</style>