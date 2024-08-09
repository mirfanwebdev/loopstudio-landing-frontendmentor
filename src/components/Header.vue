<script setup>
import { store } from '../store';
import BaseMenu from './BaseMenu.vue';
</script>
<template>
    <header @click="store.toggleMenu">
        <img class="logo" src="../assets/logo.svg" alt="logo"/>
        <div class="menu-desktop">
            <BaseMenu />
        </div>
        <button>
            <img src="../assets/icon-hamburger.svg" alt="menu"/>
        </button>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button {
        background-color: transparent;
        border: none;
    }
    .logo {
        width: 10rem;
    }
    .menu-desktop {
        display: none;
    }

    @media screen and (min-width: 768px) {
        button {
            display: none;
        }
        .logo {
            width: 15rem;
        }
        .menu-desktop {
            display: flex;
            gap: 2rem;
            color: var(--white);
            /* font-size: 1.125rem; */
        }
    }
</style>