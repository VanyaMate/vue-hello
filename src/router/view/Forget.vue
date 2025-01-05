<template>
    <div class="card">
        <router-link to="/login" v-slot="{ navigate }">
            <h2>Забыл пароль? Так вспоминай!</h2>

            <button class="btn" @click="navigate">Обратно к логину</button>
        </router-link>
    </div>
</template>