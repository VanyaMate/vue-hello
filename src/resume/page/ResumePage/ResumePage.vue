<script lang="ts">
import ResumeCreateForm from '@/resume/widget/ResumeCreateForm/ResumeCreateForm.vue';
import Resume from '@/resume/widget/Resume/Resume.vue';


export default {
    data () {
        return {
            rows: this.getRows() as Array<{ type: string; value: string }>,
        };
    },
    components: {
        ResumeCreateForm,
        Resume,
    },
    methods   : {
        addRow (row: { type: string, value: string }): void {
            this.rows.push(row);
            this.writeRows(this.rows);
        },
        writeRows (rows: Array<{ type: string, value: string }>): void {
            localStorage.setItem('resume-rows', JSON.stringify(rows));
        },
        getRows () {
            const savedRows = localStorage.getItem('resume-rows');
            return JSON.parse(savedRows ?? '[]');
        },
    },
};
</script>

<template>
    <ResumeCreateForm @submit="addRow"/>
    <Resume :rows="rows"/>
</template>