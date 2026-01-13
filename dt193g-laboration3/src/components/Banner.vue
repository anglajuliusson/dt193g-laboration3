<script setup></script>
  
<template>
    <picture>
        <source srcset="../assets/images/banner.avif" type="image/avif">
        <source srcset="../assets/images/banner.webp" type="image/webp">
        <img src="../assets/images/banner.jpg" alt="Bannerbild - Kent konsert" class="banner-img">
    </picture>
</template>
  
<style scoped>
    .banner-img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }
</style>