<template>
    <div id="about-content">
        <div id="education-timeline">
            <h1>Education</h1>
            <hr>
            <div id="timeline-container">
                <timeline-component
                    v-for="education in educations"
                    :key="education.id"
                    :institution="education.institution_name"
                    :year="education.start_at_year + '-' + education.end_at_year"
                    :timelineTag="education.major">
                    <ul>
                        <li
                            v-for="detail in education.education_details"
                            :key="detail.id">
                            {{ detail.description }}
                        </li>
                    </ul>
                </timeline-component>
            </div>
        </div>
        <div id="experience-timeline">
            <h1>Experience</h1>
            <hr>
            <div id="timeline-container">
                <timeline-component
                    v-for="experience in experiences"
                    :key="experience.id"
                    :institution="experience.institution_name"
                    :year="experience.start_at_year + '-' + experience.end_at_year"
                    :timelineTag="experience.role">
                    <ul>
                        <li
                            v-for="detail in experience.experience_details"
                            :key="detail.id">
                            {{ detail.description }}
                        </li>
                    </ul>
                </timeline-component>
            </div>
        </div>
        <div id="experience-timeline">
            <h1>Non-formal Education</h1>
            <hr>
            <div id="timeline-container">
                <timeline-component
                    v-for="nfEducation in nfEducations"
                    :key="nfEducation.id"
                    :institution="nfEducation.institution_name"
                    :year="nfEducation.start_at_year"
                    :timelineTag="nfEducation.course">
                    <ul>
                        <li
                            v-for="detail in nfEducation.nf_education_details"
                            :key="detail.id">
                            {{ detail.description }}
                        </li>
                    </ul>
                </timeline-component>
            </div>
        </div>
        <!-- <div id="tech-stacks">
            <h1>Stacks I'm Familiar With</h1>
            <hr>
            <div id="stack-contents-container">
                <stack-content-component
                v-for="tag in tags"
                :key="tag.id"
                :logoLink="tag.logo_link"
                :stackName="tag.name"/>
            </div>
        </div> -->
    </div>
</template>

<script>
import TimelineComponent from '../components/TimelineComponent'
// import StackContentComponent from '../components/StackContentComponent'

export default {
    data() {
        return {
            educations: [],
            experiences: [],
            nfEducations: [],
            tags: []
        };
    },

    mounted() {
        this.fetchEducationData();
        this.fetchExperienceData();
        this.fetchNfEducationData();
        this.fetchTagData();
    },

    components: {
        TimelineComponent,
        // StackContentComponent
    },

    methods: {
        fetchEducationData() {
            this.educations = require("/data/educations.json");
        },

        fetchExperienceData() {
            this.experiences = require("/data/experiences.json");
        },

        fetchNfEducationData() {
            this.nfEducations = require("/data/nf_educations.json");
        },

        fetchTagData() {
            this.tags = require("/data/tags.json");
        }
    }
}
</script>

<style scoped>

#stack-contents-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 5px;
    margin-left: 0px;
    margin-right: 0px;
}

#about-content {
    display: flex;
    flex-direction: column;
    margin: 10px 160px;
}

h1 {
    font-size: 32px;
}

p { 
    font-size: 16px;
    font-weight: 400;
    margin: 0;
}

ul {
    font-size: 16px;
    font-weight: 400;
    font-family: Poppins, Roboto, Helvetica;
    color: #5A5A5A;
}

ul > li {
    margin-bottom: 10px;
}

#timeline-container {
    margin-top: 20px;
    margin-left: 50px;
}

#timeline-container {
    margin-top: 20px;
    margin-left: 50px;
    border-left: 2.5px solid #3F94A7;
}

@media only screen and (min-width: 1600px) {
    #about-content {
        display: flex;
        flex-direction: column;
        margin: 10px 260px;
    }
}

</style>
