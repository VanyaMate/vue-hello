<script lang="ts">
export default {
    data () {
        return {
            value: '',
        };
    },
    methods: {
        submitHandler (event: Event) {
            const form     = event.target as HTMLFormElement;
            const formData = new FormData(form);
            const value    = formData.get('value');
            const type     = formData.get('type');

            if (value) {
                this.$emit('submit', { type, value });
                form.reset();
            } else {
                const input: HTMLInputElement | null = form.elements.namedItem('value') as HTMLInputElement;
                if (input) {
                    input.focus();
                }
            }
        },
    },
    emits  : {
        submit (data: { type: string, value: string }) {
            return data.type && data.value;
        },
    },
};
</script>

<template>
    <form @submit.prevent="submitHandler">
        <div>
            <label>Тип:</label>
            <select name="type" value="Title">
                <option value="Title">Заголовок</option>
                <option value="SubTitle">Подзаголовок</option>
                <option value="Avatar">Аватар</option>
                <option value="Text">Текст</option>
            </select>
        </div>
        <div>
            <label>Значение:</label>
            <input type="text" name="value" v-model="value"/>
        </div>
        <button type="submit" :disabled="!value.length">Добавить</button>
    </form>
</template>