<script setup>
import { ref } from 'vue';
import deepEarth from '../assets/mobile/image-deep-earth.jpg';
import deepEarthDesktop from '../assets/desktop/image-deep-earth.jpg';
import nightArcade from '../assets/mobile/image-night-arcade.jpg';
import nightArcadeDesktop from '../assets/desktop/image-night-arcade.jpg';
import soccerTeam from '../assets/mobile/image-soccer-team.jpg';
import soccerTeamDesktop from '../assets/desktop/image-soccer-team.jpg';
import grid from '../assets/mobile/image-grid.jpg';
import gridDesktop from '../assets/desktop/image-grid.jpg';
import above from '../assets/mobile/image-from-above.jpg';
import aboveDesktop from '../assets/desktop/image-from-above.jpg';
import pocketBorealis from '../assets/mobile/image-pocket-borealis.jpg';
import pocketBorealisDesktop from '../assets/desktop/image-pocket-borealis.jpg';
import curiosity from '../assets/mobile/image-curiosity.jpg';
import curiosityDesktop from '../assets/desktop/image-curiosity.jpg';
import fisheye from '../assets/mobile/image-fisheye.jpg';
import fisheyeDesktop from '../assets/desktop/image-fisheye.jpg';
const list = ref([
    {
        id: 1,
        name: 'deep earth',
        img: deepEarth,
        imgDesktop: deepEarthDesktop,
    },
    {
        id: 2,
        name: 'night arcade',
        img: nightArcade,
        imgDesktop: nightArcadeDesktop,
    },
    {
        id: 3,
        name: 'soccer team vr',
        img: soccerTeam,
        imgDesktop: soccerTeamDesktop,
    },
    {
        id: 4,
        name: 'the grid',
        img: grid,
        imgDesktop: gridDesktop,
    },
    {
        id: 5,
        name: 'from up above vr',
        img: above,
        imgDesktop: aboveDesktop,
    },
    {
        id: 6,
        name: 'pocket borealis',
        img: pocketBorealis,
        imgDesktop: pocketBorealisDesktop,
    },
    {
        id: 7,
        name: 'the curiosity',
        img: curiosity,
        imgDesktop: curiosityDesktop,
    },
    {
        id: 8,
        name: 'fisheye',
        img: fisheye,
        imgDesktop: fisheyeDesktop,
    },
]);

</script>

<template>
<div v-for="item in list" :key="item.id" class="container-item">
    <picture>
        <source media="(min-width: 768px)" :srcset="item.imgDesktop">
        <img :src="item.img" :alt="item.name">
    </picture>
    <div class="bg"></div>
    <p>{{ item.name }}</p>
</div>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.container-item {
    position: relative;
}
.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, var(--black), transparent, transparent);
    top: 0;
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

@media screen and (min-width: 768px) {
    .container-item {
        width: 23%;
    }
    .bg {
        background-image: linear-gradient(to top, var(--black), transparent, transparent);
    }
}
</style>