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

p {
  color: #5A5A5A;
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


::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #3F94A7;
}
</style>