<template>
  <main class="main-content">
    <h1>Welcome!</h1>
    <p>This is the main content area.</p>
  </main>
</template>

<style scoped>
.main-content {
  flex-grow: 1;
  margin-left: 250px;
  background-color: #f9f9f9;
  padding: 20px;
  min-height: calc(100vh - 110px);
}
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
