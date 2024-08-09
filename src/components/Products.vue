<script setup>
import BaseButton from './BaseButton.vue';
import BaseItem from './BaseItem.vue';
</script>

<template>
<section>
    <div class="container-title">
        <h2>our creations</h2>
        <BaseButton class="desktop"/>
    </div>
    <div class="container-product">
        <BaseItem/>
    </div>
    <BaseButton class="mobile" />
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
.container-title{
    display: flex;
    justify-content: center;
    width: 100%;
}
.container-product {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}
.desktop {
    display: none;
}

@media screen and (min-width: 768px) {
    h2 {
        font-size: 3.25rem;
    }
    .container-title {
        justify-content: space-between;
        align-items: center;
    }
    .container-product {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
    }
    .mobile {
        display: none;
    }
    .desktop {
        display: block;
        padding: 0.5rem 2.5rem;
        font-weight: 700;
    }
}
</style>