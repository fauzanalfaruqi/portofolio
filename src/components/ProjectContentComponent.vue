<template>
    <!-- <div class="project-card">
            <img :src="imageLink" alt="project-card-pic">
            <div class="project-card-content">
                <h3>{{ title }}</h3>
                <p>{{ description }}</p>
                <hr>
            </div>
            <div class="project-card-footer">
                <div class="card-tags">
                    <div
                        class="project-card-tag"
                        v-for="(tag, index) in tags"
                        :key="index">
                        <p
                            class="tag-text"
                            :style="{ backgroundColor: tag.tag_color }">
                            {{ tag.tag_name }}
                        </p>
                    </div>
                </div>
                <div
                    class="project-card-button"
                    @click="handleClick">
                    <button>See More</button>
                </div>
            </div>
        </div> -->
    <div class="project-card overflow-hidden shadow-lg border-2 border-[#3F94A7] rounded-[10px] mb-2">
        <img class="w-full" :src="imageLink" alt="project-thumbnail">
        <div class="px-4 py-2">
            <div class="font-bold text-xl mb-2 text-my-header hover:underline">{{ title }}</div>
            <p class="text-gray-700 text-base">{{ description }}</p>
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
        handleClick() {
            this.$emit("click");
        },
    }
}
</script>

<style scoped>
/* h3 {
    color: #5A5A5A;
    margin: 5px 0;
}

p {
    font-size: 14px;
    margin: 5px 0;
    margin-bottom: 10px;
}

.project-card {
    display: flex;
    flex-direction: column;
    border: solid 2px #3F94A7;
    border-radius: 10px;
    height: 390px;
}

.project-card img {
    width: auto;
    border-radius: 7.5px 7.5px 0 0;
}

.project-card-content {
    margin: 0 10px;
}

.project-card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 10px;
}

.card-tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 0;
}

.tag-text {
    border-radius: 5px;
    font-size: 9px;
    font-weight: 400;
    text-align: center;
    color: white;
    margin-right: 5px;
    margin-bottom: 0;
    padding: 1px 0.5px;
    width: 55px;
}

.project-card-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.project-card-button button {
    font-family: Poppins, Roboto, Helvetica;
    font-size: 12px;
    width: 100px;
    height: 30px;
    background-color: #3F94A7;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
} */

.project-card:hover {
    cursor: pointer;
    transform: scale(1.01);
}

.project-card-button button:hover {
    cursor: pointer;
    transform: scale(1.025);
}

</style>