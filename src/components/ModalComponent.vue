<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 sm:p-6 md:p-8"
    @click.self="closeModal">
    <div
      class="bg-white rounded-lg shadow-xl relative overflow-auto max-h-[80vh] w-full xl:max-w-4xl md:max-w-2xl sm:max-w-lg">
      <button @click="closeModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-[#3F94A7] text-2xl font-bold focus:outline-none">
        &times;
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: String, // if you need a title slot in the future
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* You can add any additional custom styling here if needed */
</style>
