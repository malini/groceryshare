<template>
  <header class="header">
    <div class="logo">GroceryShare</div>
    <button class="navbar-toggle" @click="$emit('toggle-navbar')">☰</button>
    <div class="profile-icon">👤</div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #333;
  color: #fff;
  padding: 0 20px;
  position: fixed;
  width: 100%;
  z-index: 10;
}
.navbar-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
</style>
