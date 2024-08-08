<script setup>
import { store } from '../store';
import BaseMenu from './BaseMenu.vue';
</script>
<template>
    <div class="hamburger-menu">
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
    position: absolute;
    z-index: 1;
    background-color: var(--black);
    width: 100vw;
    height: 100vh;
    color: var(--white);
    padding: 2.5rem 1.5rem;
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
</style>