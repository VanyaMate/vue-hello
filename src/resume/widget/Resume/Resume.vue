<script lang='ts'>
import ResumeContainer from '@/resume/entity/ResumeContainer/ResumeContainer.vue';
import ResumeTitle from '@/resume/entity/ResumeTitle/ResumeTitle.vue';
import ResumeText from '@/resume/entity/ResumeText/ResumeText.vue';
import ResumeSubTitle from '@/resume/entity/ResumeSubTitle/ResumeSubTitle.vue';
import ResumeAvatar from '@/resume/entity/ResumeAvatar/ResumeAvatar.vue';


export default {
    components: { ResumeContainer, ResumeTitle, ResumeText, ResumeSubTitle, ResumeAvatar },
    props     : {
        rows: Array<{ type: string, value: string }>,
    },
};
</script>

<template>
    <ResumeContainer>
        <component
            :is="`Resume${row.type}`"
            :value="row.value"
            v-for="row in $props.rows"
        ></component>
    </ResumeContainer>
</template>