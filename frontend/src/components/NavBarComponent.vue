<template>
  <nav :class="['navbar', { active: isNavbarOpen }]">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  isNavbarOpen: boolean
}>()
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 60px;
  width: 250px;
  height: calc(100% - 60px);
  background-color: #444;
  color: #fff;
  overflow-y: auto;
  transition: left 0.3s ease;
}
.navbar.active {
  left: 0;
}
.navbar a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
}
.navbar a:hover {
  background-color: #555;
}
</style>
