<template>
    <header>
        Header {{ $store.getters['counterModule/counter'] }}
        <button @click="$store.dispatch('counterModule/incrementAsync')">Async</button>
        {{
            (() => {
                console.log($store);
                return ''
            })()
        }}
    </header>
</template>