<script setup>
import Header from './Header.vue';
</script>

<template>
    <section>
        <Header/>
        <div class="container">
            <h1>immersive experiences that deliver</h1>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: var(--white);
    background-image: url(../assets/mobile/image-hero.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 95vh;
    padding: 2.5rem 1.5rem;
}
h1 {
    border: 2px solid var(--white);
    padding: 1rem;
    text-transform: uppercase;
    color: var(--white);
    font-family: var(--josefin-sans);
    font-weight: 300;
    font-size: 2.8rem;
}
.container {
    display: flex;
    align-items: center;
    height: 100%;
}
</style>