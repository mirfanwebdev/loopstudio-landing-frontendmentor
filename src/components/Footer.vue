<script setup>
import BaseMenu from './BaseMenu.vue';
import BaseSocial from './BaseSocial.vue';
</script>

<template>
    <footer>
        <img class="logo" src="../assets/logo.svg" alt="logo"/>
        <div class="flex">
            <BaseMenu/>
        </div>
        <div class="social">
            <BaseSocial/>
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    gap: 1.25rem;
    padding: 2.5rem;
    background-color: var(--black);
    color: var(--white);
}
.logo {
    width: 10rem;
}
.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.social {
    display: flex;
    gap: 1rem;
}
</style>