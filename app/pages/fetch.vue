<script setup >
const config = useRuntimeConfig()

const {data} = await useFetch('https://news0920.microcms.io/api/v1/news', {
    headers: {
        'X-MICROCMS-API-KEY': config.public.apiKey
    }
})
const items = computed(() => data.value?.contents || [] )
console.log(items.value)
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            {{ item.title }}
            {{ item.body }}
        </li>
    </ul>
</template>

<style scoped>
    ul{ list-style: none; padding: 0; font-size: 14px;}
</style>