<template>
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
          <button-component class="mb-2" :style="'primary'" @click="onDownloadClicked">Download CV
          </button-component>
          <router-link to="/projects">
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
    <!-- <modal-component :isOpen="modalIsOpen" @close="closeModal">
      <download-cv-modal-component :enigmaCVLink="'https://fa-githubio.web.app/static/enigma_resume.pdf'"
        :regularCVLink="'@/assets/pdf/resume.pdf'"
        :fileIconLink="'../assets/pdf_icon.png'">

      </download-cv-modal-component>
    </modal-component> -->
  </div>
</template>
  
  <script>
  import ButtonComponent from '../components/ButtonComponent.vue'
  
  export default {

    components: {
      ButtonComponent
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
      },

      onDownloadClicked() {
        window.open('/pdf/resume.pdf', '_blank');
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

  </style>
  