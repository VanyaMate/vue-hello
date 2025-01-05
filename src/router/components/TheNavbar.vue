<template>
    <header class="navbar" v-if="visible">
        <h3>GMail</h3>
        <ul class="navbar-menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li>
                <router-link custom v-slot="{ navigate, href }" to="/mail">
                    <a href="#" @click="navigate">
                        Почта {{ $route.path.includes(href) ? '[active]' : '' }}
                    </a>
                </router-link>
            </li>
        </ul>
    </header>
</template>

<script lang="ts">
export default {
    props: {
        visible: {
            type   : Boolean,
            default: false,
        },
    },
};
</script>