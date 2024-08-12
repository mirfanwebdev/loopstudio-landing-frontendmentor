<script setup>
import { ref } from 'vue';
import fbImg from '../assets/icon-facebook.svg';
import twImg from '../assets/icon-twitter.svg';
import pintImg from '../assets/icon-pinterest.svg';
import instaImg from '../assets/icon-instagram.svg';

const socials = ref([
    {
        id: 1,
        name: 'Facebook',
        img: fbImg,
    },
    {
        id: 2,
        name: 'Twitter',
        img: twImg,
    },
    {
        id: 3,
        name: 'Pinterest',
        img: pintImg,
    },
    {
        id: 4,
        name: 'Instagram',
        img: instaImg,
    }
]);

</script>

<template>
    <a v-for="social in socials" :key="social.id">
        <img :src="social.img" :alt="social.name"/>
    </a>
</template>

<style scoped>
a {
    border-bottom: 2px solid transparent;
    padding-bottom: 0.25rem;
}
    a:hover {
        cursor: pointer;
        border-bottom-color: white;
        padding-bottom: 0.25rem;
    }
</style>