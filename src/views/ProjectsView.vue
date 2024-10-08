<template>
    <div class="relative flex flex-col w-full max-w-screen-xl px-4 mx-auto sm:px-6 p-8">
        <h1 class="text-[26px] font-bold text-my-header">Projects</h1>
        <hr class="mb-[5px]">
        <div id="dropdown-container">
            <!-- <dropdown-component/>
            <dropdown-component/> -->
        </div>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <project-content-component v-for="project in projects" :key="project.id"
                :imageLink="project.thumbnail_link && project.thumbnail_link.trim() !== '' ? project.thumbnail_link : project.image_link"
                :title="truncateString(project.name, 15)" :description="truncateString(project.description, 85)"
                :tags="project.project_tag" @click="showModal(
                    project.embed_code,
                    project.name,
                    project.project_type,
                    project.be_keypoints,
                    project.fe_keypoints,
                    project.key_features,
                    project.links[0].repo,
                    project.links[0].deploy,
                    project.links[0].be_deploy,
                    project.links[0].fe_deploy,
                    project.description,
                    project.image_link,
                    project.project_tag)" />
        </div>
        <modal-component :isOpen="modalIsOpen" @close="closeModal">
            <project-modal-content-component :projectName="modalProjectName" :projectType="modalProjectType"
                :beKeypoints="modalBeKeypoints" :feKeypoints="modalFeKeypoints" :keyFeatures="modalKeyfeatures"
                :repoLink="modalRepoLink" :deployLink="modalDeployLink" :beDeployLink="modalBELink"
                :feDeployLink="modalFELink" :description="modalDescription" :tags="modalTags">
                <template v-if="modalEmbedLink">
                    <iframe :src="modalEmbedLink" frameborder="0" allowfullscreen="" width="100%" height="480">
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
            modalProjectType: "",
            modalRepoLink: "",
            modalDeployLink: "",
            modalBELink: "",
            modalFELink: "",
            modalDescription: "",
            modalImageLink: "",
            modalTags: [],
            modalBeKeypoints: [],
            modalFeKeypoints: [],
            modalKeyfeatures: [],
        };
    },

    mounted() {
        this.fetchProjectData();
    },

    methods: {
        fetchProjectData() {
            this.projects = require("/data/projects.json")
        },

        showModal(embedLink, name, type, beKeypoints, feKeypoints, keyfeatures, repoLink, demoLink, beLink, feLink, description, imageLink, tags) {
            this.modalEmbedLink = embedLink;
            this.modalProjectName = name;
            this.modalProjectType = type;
            this.modalDescription = description;
            this.modalImageLink = imageLink;
            this.modalBeKeypoints = beKeypoints;
            this.modalFeKeypoints = feKeypoints;
            this.modalKeyfeatures = keyfeatures;

            // Handling various structures of links
            if (Array.isArray(repoLink) && repoLink.length > 0) {
                this.modalRepoLink = repoLink[0].repo || "";
            } else {
                this.modalRepoLink = repoLink || "";
            }

            if (Array.isArray(demoLink) && demoLink.length > 0) {
                this.modalDeployLink = demoLink[0].deploy || "";
            } else {
                this.modalDeployLink = demoLink || "";
            }

            if (Array.isArray(beLink) && beLink.length > 0) {
                this.modalBELink = beLink[0].be_deploy || "";
            } else {
                this.modalBELink = beLink || "";
            }

            if (Array.isArray(feLink) && feLink.length > 0) {
                this.modalFELink = feLink[0].fe_deploy || "";
            } else {
                this.modalFELink = feLink || "";
            }

            this.modalTags = tags;

            this.modalIsOpen = true;
        },

        closeModal() {
            this.modalIsOpen = false;
        },

        truncateString(str, max) {
            if (str && str.length > max) {
                return str.substring(0, max - 3) + "...";
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