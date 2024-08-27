<template>
    <div class="project-modal-content">
        <slot></slot>
        <h2 class="font-bold text-[32px] mx-2 my-2 text-my-header">{{ projectName }}</h2>
        <hr>
        <p>
            <span class="font-bold text-my-header">Description: </span>
            <br />
            {{ description }}
        </p>

        <p>
            <span class="font-bold text-my-header">Project type: </span>
            {{ projectType }}
        </p>

        <p v-if="repoLink">
            <span class="font-bold text-my-header">Project repository: </span>
            <a :href="repoLink" target="_blank">
                {{ repoLink }}
            </a>
        </p>

        <p v-if="deployLink">
            <span class="font-bold text-my-header">Project deployment: </span>
            <a :href="deployLink" target="_blank">
                {{ deployLink }}
            </a>
        </p>

        <p v-if="beDeployLink">
            <span class="font-bold text-my-header">Backend deployment: </span>
            <a :href="beDeployLink" target="_blank">
                {{ beDeployLink }}
            </a>
        </p>

        <p v-if="feDeployLink">
            <span class="font-bold text-my-header">Frontent deployment: </span>
            <a :href="feDeployLink" target="_blank">
                {{ feDeployLink }}
            </a>
        </p>

        <div class="tags">
            <div class="content-tags">
                <div class="project-content-tag" v-for="(tag, index) in tags" :key="index">
                    <span class="inline-block rounded-md px-3 py-1 text-[0.65rem] font-medium mr-2 mb-2 text-white"
                        :style="{ backgroundColor: tag.tag_color }">
                        {{ tag.tag_name }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        projectName: String,
        projectType: String,
        repoLink: String,
        deployLink: String,
        beDeployLink: String,
        feDeployLink: String,
        description: String,
        tags: Array,
    }
}
</script>

<style scoped>
.project-modal-content {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

p {
    margin: 5px 10px;
}

a {
    color: #3F94A7;
}

a:hover {
    color: #2ab179;
}

hr {
    border-color: #5A5A5A;
    margin: 5px 10px;
}

.tags {
    margin: 15px 5px;
}

.content-tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.tag-text {
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: white;
    padding: 1px 0.5px;
    width: 120px;
    margin: 0 5px;
}

.project-modal-content::-webkit-scrollbar {
    width: 10px;
}

.project-modal-content::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.project-modal-content::-webkit-scrollbar-thumb {
    background: #3F94A7;
}

.project-modal-content::-webkit-scrollbar-thumb:hover {
    background: #2ab179;
}
</style>