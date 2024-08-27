<template>
  <div id="app">
    <header>
      <navbar-component />
    </header>
    <router-view></router-view>
    <footer>
      <footer-component />
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
  font-family: Poppins, Roboto, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  font-size: 32px;
}

footer-container {
  margin-top: auto;
}

/* Customize text selection background */
::selection {
  background-color: #2ab179;
  /* Set your desired background color */
  color: #ffffff;
  /* Set the text color */
}

/* For Firefox */
::-moz-selection {
  background-color: #2ab179;
  /* Set your desired background color */
  color: #ffffff;
  /* Set the text color */
}
</style>