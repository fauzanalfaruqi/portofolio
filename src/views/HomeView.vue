<template>
  <!-- <section class="min-h-[85vh]">
    <div class="relative flex flex-col flex-1 items-center max-w-screen-xl px-6 mx-auto md:flex-row sm:px-6 p-8 h-full">
      <div class="flex flex-col flex-1 justify-start relative w-1/2">
        <h1>M. Fauzan Al-Faruqi</h1>
        <div id="location">
          <img src="../assets/pin-map-logo.png" alt="pin-map">
          <p id="based-location">Sukabumi City, West Java</p>
        </div>
        <p id="description">An IT enthusiast proficient in backend development
          using Go, and have years of experience in game
          development utilizing Unity Engine.</p>
        <button-component :style="'primary'" @click="showModal">Download CV
        </button-component>
        <router-link to="/projects">
          <button-component :style="'secondary'">See My Projects
          </button-component>
        </router-link>
      </div>
      <div class="flex flex-col flex-1 justify-end align-center w-1/2">
        <img src="../assets/profile.png" alt="profile" width="320px">
      </div>
    </div>
    <modal-component :isOpen="modalIsOpen" @close="closeModal">
      <download-cv-modal-component :enigmaCVLink="'https://fa-portofolio.web.app/enigma_resume.pdf'"
        :regularCVLink="'https://fa-portofolio.web.app/resume.pdf'"
        :fileIconLink="'https://fa-portofolio.web.app/icons/pdf_icon.png'">

      </download-cv-modal-component>
    </modal-component>
  </section> -->

  <div class="relative flex flex-col-reverse items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 h-[85vh] 2xl:h-[87.5vh]">
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
      <div class="text-center md:text-left">
        <h1 class="font-bold text-my-header text-[32px] text-left">M. Fauzan Al-Faruqi</h1>
        <div class="flex flex-row text-left mt-1">
          <img class="w-[12px] h-[18px] mr-[7.5px]" src="../assets/pin-map-logo.png" alt="pin-map">
          <p class="text-my-primary">Sukabumi City, West Java</p>
        </div>
        <p class="max-w-md mx-auto mt-4 text-[16px] text-my-header md:max-w-3xl text-left">
          An IT enthusiast proficient in backend development using Go, and have years of experience in game development
          utilizing Unity Engine.
        </p>
        <div class="mt-6 sm:flex gap-2">
          <button-component :style="'primary'" @click="showModal">Download CV
          </button-component>
          <router-link to="/portofolio/projects">
            <button-component :style="'secondary'">See My Projects
            </button-component>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
      <div class="relative w-full p-3 rounded  md:p-8 flex justify-center md:justify-end">
        <div class="rounded-lg bg-white text-black w-[70%]">
          <img src="../assets/profile.png" />
        </div>
      </div>
    </div>
    <modal-component :isOpen="modalIsOpen" @close="closeModal">
      <download-cv-modal-component :enigmaCVLink="'https://fa-portofolio.web.app/enigma_resume.pdf'"
        :regularCVLink="'https://fa-portofolio.web.app/resume.pdf'"
        :fileIconLink="'../assets/pdf_icon.png'">

      </download-cv-modal-component>
    </modal-component>
  </div>
</template>
  
  <script>
  import ButtonComponent from '../components/ButtonComponent.vue'
  import ModalComponent from '../components/ModalComponent.vue'
  import DownloadCvModalComponent from '../components/DownloadCVModalComponent.vue';
  
  export default {

    components: {
      ButtonComponent,
      ModalComponent,
      DownloadCvModalComponent
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
  
  <style scoped>
  .home-content {
    display: flex;
    flex: 1;
    padding: 40px 20px;
    margin: 20px 150px;
  }
/*   
  .left-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
  }
   */
  /* .right-content {
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
   */
  /* h1 {
    margin-bottom: 0;
    font-size: 36px;
    color: #5A5A5A;
  } */
/*   
  p {
    font-size: 18px;
    color: #5A5A5A;
  } */
/*   
  #based-location {
    color: #3F94A7;
    margin-top: 0px;
  } */

  </style>
  