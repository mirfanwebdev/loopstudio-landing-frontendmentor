<script setup>
import { store } from '../store';
import BaseMenu from './BaseMenu.vue';
</script>
<template>
    <div class="hamburger-menu" :class="{ display: store.displayMenu }">
        <div class="header">
            <img class="logo" src="../assets/logo.svg" alt="logo"/>
            <button @click="store.toggleMenu">
                <img src="../assets/icon-close.svg" alt="close"/>
            </button>
        </div>
        <div class="menu">
            <BaseMenu />
        </div>
    </div>
</template>

<style scoped>
button {
    background-color: transparent;
    border: none;
}
.hamburger-menu {
    position: fixed;
    z-index: 1;
    background-color: var(--black);
    right: -100%;
    width: 100vw;
    height: 100vh;
    color: var(--white);
    padding: 2.5rem 1.5rem;
    transition: right 0.3s ease;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    width: 10rem;
}
.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 1.5rem;
    font-family: var(--josefin-sans);
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
}
.display {
    right: 0;
}

@media screen and (min-width: 768px) {
    .hamburger-menu {
        display: none;
    }
}
</style>