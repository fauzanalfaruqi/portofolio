<template>
    <div class="relative flex flex-col w-full max-w-screen-xl px-4 mx-auto sm:px-6 p-8">
        <h1 class="text-[32px] font-semibold text-my-header">Projects</h1>
        <hr class="mb-[5px]">
        <div id="dropdown-container">
            <!-- <dropdown-component/>
            <dropdown-component/> -->
        </div>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <project-content-component
                v-for="project in projects"
                :key="project.id"
                :imageLink="project.image_link"
                :title="truncateString(project.name, 15)"
                :description="truncateString(project.description, 85)"
                :tags="project.project_tag"
                @click="showModal(project.embed_code, project.name, project.repo_link, project.demo_link, project.description, project.image_link, project.project_tag)"/>
        </div>
        <modal-component
            :isOpen="modalIsOpen"
            @close="closeModal">
            <project-modal-content-component
                :projectName="modalProjectName"
                :repoLink="modalRepoLink"
                :demoLink="modalDemoLink"
                :description="modalDescription"
                :tags="modalTags">
                <template
                    v-if="modalEmbedLink">
                    <iframe
                        :src="modalEmbedLink"
                        frameborder="0"
                        allowfullscreen=""
                        width="100%"
                        height="480">
                    </iframe>
                </template>
                <template v-else>
                    <img :src="modalImageLink" alt="Project image">
                </template>
            </project-modal-content-component>
        </modal-component>
    </div>
</template>

<script>
import ProjectContentComponent from '../components/ProjectContentComponent.vue';
// import DropdownComponent from '../components/DropdownComponent.vue';
import ModalComponent from '../components/ModalComponent.vue'
import ProjectModalContentComponent from '../components/ProjectModalContentComponent.vue';

export default {
    components: {
        ProjectContentComponent,
        // DropdownComponent,
        ModalComponent,
        ProjectModalContentComponent
    },

    data() {
        return {
            projects: [],

            modalIsOpen: false,
            modalEmbedLink: "",
            modalProjectName: "",
            modalRepoLink: "",
            modalDemoLink: "",
            modalDescription: "",
            modalImageLink: "",
            modalTags: []
        };
    },

    mounted() {
        this.fetchProjectData();
    },

    methods: {
        fetchProjectData() {
            this.projects = require("/data/projects.json")
        },

        showModal(embedLink, name, repoLink, demoLink, description, imageLink, tags) {
            this.modalEmbedLink = embedLink;
            this.modalProjectName = name;
            this.modalDescription = description;
            this.modalImageLink = imageLink;

            this.modalRepoLink = repoLink && repoLink.trim() !== "" ? repoLink : "";
            this.modalDemoLink = demoLink && demoLink.trim() !== "" ? demoLink : "";

            this.modalTags = tags;
            
            this.modalIsOpen = true;
        },

        closeModal() {
            this.modalIsOpen = false;
        },

        truncateString(str, max) {
            if (str && str.length > max) {
                return str.substring(0, max-3) + "...";
            } else {
                return str
            }
        }
    }
}
</script>

<style scoped>

/* #modal-image {
    margin-bottom: 5px;
}

#projects-content {
    display: flex;
    flex-direction: column;
    margin: 10px 160px;
}

/* Apply style specifically for Microsoft Edge */

</style>