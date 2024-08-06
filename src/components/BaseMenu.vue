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
    <div v-for="item in list" :key="item.id">
        <a>{{ item.name }}</a>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>