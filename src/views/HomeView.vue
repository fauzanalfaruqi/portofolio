<template>
    <div class="home">
      <div class="home-content">
        <div class="left-content">
          <h1>M. Fauzan Al-Faruqi</h1>
          <div id="location">
            <img src="../assets/pin-map-logo.png" alt="pin-map">
            <p id="based-location">Sukabumi City, West Java</p>
          </div>
          <p id="description">An IT enthusiast proficient in backend development
    using Go, and have years of experience in game
    development utilizing Unity Engine.</p>
          <button-component
            :style="'primary'"
            @click="showModal">Download CV</button-component>
            <router-link to="/about">
              <button-component
                :style="'secondary'">See More About Me</button-component>
            </router-link>
        </div>
        <div class="right-content">
          <img src="../assets/profile.png" alt="profile" width="320px">
        </div>
      </div>
      <modal-component
        :isOpen="modalIsOpen"
        title="Download CV"
        @close="closeModal">
          <p>Modal content!</p>
      </modal-component>
    </div>
  </template>
  
  <script>
  import ButtonComponent from '../components/ButtonComponent.vue'
  import ModalComponent from '../components/ModalComponent.vue'
  
  export default {

    components: {
      ButtonComponent,
      ModalComponent
    },

    data() {
      return {
        modalIsOpen:false
      };
    },

    methods: {
      showModal() {
        this.modalIsOpen = true;
      },

      closeModal() {
        this.modalIsOpen = false;
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Poppins, Roboto, Helvetica;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .home {
    display: flex;
    flex-direction: column;
  }
  
  .home-content {
    display: flex;
    flex: 1;
    padding: 40px 20px;
    margin: 20px 150px;
  }
  
  .left-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
  }
  
  .right-content {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .fixed-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  #location {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 0px;
  }

  #location img {
    width: 14px;
    height: 20px;
    margin-top: 2px;
    margin-right: 7.5px;
  }

  #description {
    margin-top: 0px;
  }
  
  h1 {
    margin-bottom: 0;
    font-size: 36px;
    color: #5A5A5A;
  }
  
  p {
    font-size: 18px;
    color: #5A5A5A;
  }
  
  #based-location {
    color: #3F94A7;
    margin-top: 0px;
  }

  /* Customize text selection background */
  ::selection {
    background-color: #2ab179; /* Set your desired background color */
    color: #ffffff; /* Set the text color */
  }

  /* For Firefox */
  ::-moz-selection {
    background-color: #2ab179; /* Set your desired background color */
    color: #ffffff; /* Set the text color */
  }

  @media only screen and (max-width: 600px) {

  }

  @media only screen and (min-width: 600px) {
    
  }

  @media only screen and (min-width: 768px) {
    
  }

  @media only screen and (min-width: 992px) {
    
  }

  @media only screen and (min-width: 1200px) {
    
  }

  
  @media only screen and (min-width: 1600px) {
    .home-content {
      display: flex;
      flex: 1;
      padding: 40px 20px;
      margin: 165px 270px;
    }

    .right-content img {
      width:365px;
    }
  }

  </style>
  