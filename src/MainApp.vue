<template>
  <div id="main-app">
    <HeaderComponent @toggle-navbar="toggleNavbar" />
    <div class="page-wrapper">
      <NavBarComponent :isNavbarOpen="isNavbarOpen" />
      <MainContentComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import NavBarComponent from './components/NavBarComponent.vue'
import MainContentComponent from './components/MainContentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default defineComponent({
  name: 'MainApp',
  components: {
    HeaderComponent,
    NavBarComponent,
    MainContentComponent,
    FooterComponent,
  },
  setup() {
    // Reactive state for navbar toggle
    const isNavbarOpen = ref(false)

    // Toggle function for navbar
    const toggleNavbar = () => {
      isNavbarOpen.value = !isNavbarOpen.value
    }

    // Return the state and methods to the template
    return {
      isNavbarOpen,
      toggleNavbar,
    }
  },
})
</script>

<style>
#main-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.page-wrapper {
  display: flex;
  flex: 1;
  margin-top: 60px; /* Account for fixed header */
}
</style>
