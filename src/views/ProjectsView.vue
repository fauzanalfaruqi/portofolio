<template>
    <div id="projects-content">
        <h1>Projects</h1>
        <hr>
        <div id="dropdown-container">
            <!-- <dropdown-component/>
            <dropdown-component/> -->
        </div>
        <div id="content-container">
            <project-content-component
                v-for="project in projects"
                :key="project.id"
                :imageLink="project.image_link"
                :title="project.name"
                :description="truncateString(project.description)"
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

        truncateString(str) {
            if (str && str.length > 115) {
                return str.substring(0, 112) + "...";
            } else {
                return str
            }
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 32px;
}

hr {
    margin-bottom:5px;
}

#modal-image {
    margin-bottom: 5px;
}

#projects-content {
    display: flex;
    flex-direction: column;
    margin: 10px 160px;
}

/* Apply style specifically for Microsoft Edge */
@supports (-ms-ime-align:auto) {
    #projects-content {
        background-color: aqua;
        display: flex;
        flex-direction: column;
        margin: 10px 140px;
    }
}

#content-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
}

#dropdown-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    gap: 5px;
}

@media only screen and (min-width: 1600px) {
    #projects-content {
        display: flex;
        flex-direction: column;
        margin: 10px 270px;
    }

    @supports (-ms-ime-align:auto) {
        #projects-content {
            background-color: aqua;
            display: flex;
            flex-direction: column;
            margin: 10px 240px;
        }
    }
}

</style>