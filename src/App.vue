<script setup>
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Interactive from './components/Interactive.vue';
import Products from './components/Products.vue';
</script>

<template>
  <main>
    <Hero />
    <div class="main-section">
      <Interactive />
      <Products/>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.main-section {
  padding: 7rem 1.5rem 5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem
}
</style>
