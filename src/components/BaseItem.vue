<script setup>
import { ref } from 'vue';
import deepEarth from '../assets/mobile/image-deep-earth.jpg';
import nightArcade from '../assets/mobile/image-night-arcade.jpg';
import soccerTeam from '../assets/mobile/image-soccer-team.jpg';
import grid from '../assets/mobile/image-grid.jpg';
import above from '../assets/mobile/image-from-above.jpg';
import pocketBorealis from '../assets/mobile/image-pocket-borealis.jpg';
import curiosity from '../assets/mobile/image-curiosity.jpg';
import fisheye from '../assets/mobile/image-fisheye.jpg';
const list = ref([
    {
        id: 1,
        name: 'deep earth',
        img: deepEarth,
    },
    {
        id: 2,
        name: 'night arcade',
        img: nightArcade,
    },
    {
        id: 3,
        name: 'soccer team vr',
        img: soccerTeam,
    },
    {
        id: 4,
        name: 'the grid',
        img: grid,
    },
    {
        id: 5,
        name: 'from up above vr',
        img: above,
    },
    {
        id: 6,
        name: 'pocket borealis',
        img: pocketBorealis,
    },
    {
        id: 7,
        name: 'the curiosity',
        img: curiosity,
    },
    {
        id: 8,
        name: 'fisheye',
        img: fisheye,
    },
]);

</script>

<template>
<div v-for="item in list" :key="item.id" class="container-item">
    <img :src="item.img" :alt="item.name">
    <div class="bg"></div>
    <p>{{ item.name }}</p>
</div>
</template>

<style scoped>
img {
    width: 100%;
    object-fit: cover;
}
.container-item {
    width: 100%;
    height: 100%;
    position: relative;
}
.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, var(--black), transparent, transparent);
    bottom: 0;
}
p {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    color: var(--white);
    font-family: var(--josefin-sans);
    font-weight: 300;
    text-transform: uppercase;
    font-size: 1.5rem;
    width: 8rem;
}
</style>