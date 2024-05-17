<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-body">
      <slot></slot>
    </div>
    <button
      @click="closeModal"
      class="close-button">
      X
    </button>
  </div>
</template>
  
<script>
export default {
  name: 'ModalComponent',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: String
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body {
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: auto;
  max-width: 50%;
  max-height: 80%;
  margin-bottom: 10px;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
}

.close-button {
  color: #ffffff;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.close-button:hover {
  transform: scale(1.1);
}

</style>