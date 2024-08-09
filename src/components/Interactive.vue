<script setup>
</script>
<template>
<section class="container-interactive">
    <img src="../assets/mobile/image-interactive.jpg" alt="interactive">
    <div class="container-text">
      <h2>The leader in interactive VR</h2>
      <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</p>
    </div>
</section>
</template>
<style scoped>
img {
    width: 100%;
}
h2 {
    font-family: var(--josefin-sans);
    font-weight: 300;
    text-transform: uppercase;
    font-size: 2.25rem;
    margin: 1.5rem 0;
}
.container-text {
  padding: 1.5rem 1.5rem 0 1.5rem;
  text-align: center;
}
p {
  line-height: 1.6;
  color: var(--dark-gray);
}

@media screen and (min-width: 768px) {
  section.container-interactive {
    position: relative;
    width: 100%;
    height: 85vh;
  }
  img {
    width: 60%;
    position: absolute;
    top: 0;
    left: 0;
  }
  h2 {
    font-size: 4rem;
  }
  .container-text {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    background-color: var(--white);
    padding: 5rem 0 5rem 5rem;
    text-align: left;
  }
}
</style>