<template>
  <div id="app">
    <header>
      <navbar-component/>
    </header>
    <router-view></router-view>
    <footer>
      <footer-component/>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
      NavbarComponent,
      FooterComponent
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer-container {
  margin-top: auto;
}
</style>