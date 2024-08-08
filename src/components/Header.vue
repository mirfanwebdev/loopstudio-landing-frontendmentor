<script setup>
import { store } from '../store';
</script>
<template>
    <header @click="store.toggleMenu">
        <img class="logo" src="../assets/logo.svg" alt="logo"/>
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
</style>