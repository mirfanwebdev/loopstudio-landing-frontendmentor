<script setup>
import BaseItem from './BaseItem.vue';
</script>

<template>
<section>
    <h2>our creations</h2>
    <div class="container-product">
        <BaseItem/>
    </div>
    <button class="btn">see all</button>
</section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}
h2 {
    font-family: var(--josefin-sans);
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 2.25rem;
    margin: 1.5rem 0;
}
.container-product {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}
.btn {
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    background-color: transparent;
    border: 2px solid var(--very-dark-gray);
    padding: 0.5rem 1.5rem;
    color: var(--very-dark-gray);
    cursor: pointer;
}
.btn:active {
    background-color: var(--very-dark-gray);
    color: var(--white);
}
</style>