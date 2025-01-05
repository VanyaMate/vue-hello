<template>
    <header>
        <h1>Freelance</h1>
        <nav>
            <ul>
                <li>
                    <router-link to="/">home</router-link>
                </li>
                <li>
                    <router-link to="/create">create</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    background      : #FFF;
    border-bottom   : 1px solid #AAA;
    padding         : 10px;
    display         : flex;
    align-items     : center;
    justify-content : space-between;
    gap             : 10px;

    ul {
        list-style-type : none;
        display         : flex;
        gap             : 10px;
        align-items     : center;

        a {
            color           : cornflowerblue;
            text-decoration : none;

            &.active {
                color           : darkmagenta;
                text-decoration : underline;
            }

            &:active {
                color           : blueviolet;
                text-decoration : underline;
            }
        }
    }
}
</style>
<script setup lang="ts">
</script>