<script setup>
import { ref } from "vue";

const list = ref([
    {
        id: 1,
        name: 'About'
    },
    {
        id: 2,
        name: 'Careers'
    },
    {
        id: 3,
        name: 'Events',
    },
    {
        id: 4,
        name: 'Products',
    },
    {
        id: 5,
        name: 'Support'
    }
]);
</script>

<template>
    <a v-for="item in list" :key="item.id">{{ item.name }}</a>
</template>

<style scoped>
a {
    padding-bottom: 0.5rem;
    border-bottom: 2px solid transparent;
}
a:hover {
    cursor: pointer;
    border-bottom-color: var(--white);
}
</style>