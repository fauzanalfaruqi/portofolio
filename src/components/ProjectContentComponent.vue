<template>
  <div class="project-card overflow-hidden shadow-lg border-2 border-[#3F94A7] rounded-[10px] mb-2">
      <img class="w-full" :src="getImage(imageLink)" alt="project-thumbnail">
      <div class="px-4 py-2">
          <div class="font-bold text-lg mb-2 text-my-header hover:underline">{{ title }}</div>
          <p class=" text-my-header text-[14px]">{{ description }}</p>
      </div>
      <div class="px-4">
          <div 
              class="pb-2 inline-flex justify-start"
              v-for="(tag, index) in tags"
              :key="index">
              <span
                  class="inline-block rounded-md px-3 py-1 text-[0.65rem] font-medium mr-2 mb-2 text-white"
                  :style="{ backgroundColor: tag.tag_color }">
                  {{ tag.tag_name }}
              </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
      title: String,
      description: String,
      tags: Array,
      imageLink: String
  },
  
  methods: {
      getImage(path) {
        return require(`@/assets/posters/${path}`)
      },

      handleClick() {
          this.$emit("click");
      },
  }
}
</script>

<style scoped>
.project-card:hover {
  cursor: pointer;
  transform: scale(1.01);
}

.project-card-button button:hover {
  cursor: pointer;
  transform: scale(1.025);
}
</style>