<script setup>
import Header from './Header.vue';
</script>

<template>
    <section>
        <div class="bg"></div>
        <div class="container">
            <Header/>
            <div class="container-text">
                <h1>immersive experiences that deliver</h1>
            </div>
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
    position: relative;
}
h1 {
    border: 2px solid var(--white);
    padding: 1rem;
    text-transform: uppercase;
    color: var(--white);
    font-family: var(--josefin-sans);
    font-weight: 300;
    font-size: 2.8rem;
    max-width: 45rem;
}
.container {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
}
.container-text {
    display: flex;
    align-items: center;
    height: 100%;
}
.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    bottom: 0;
    left: 0;
}

@media screen and (min-width: 768px) {
    section {
        background-image: url(../assets/desktop/image-hero.jpg);
        background-size: cover;
        padding: 5rem 12rem;
    }
    h1 {
        font-size: 5rem;
        padding: 2.5rem;
    }
}
</style>