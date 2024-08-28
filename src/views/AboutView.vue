<template>
    <div class="relative flex flex-col w-full max-w-screen-xl px-4 mx-auto sm:px-6 p-8">
        <div id="education-timeline">
            <h1 class="text-my-header text-[26px] font-bold">Education</h1>
            <hr>
            <div id="timeline-container">
                <timeline-component
                    v-for="education in educations"
                    :key="education.id"
                    :institution="education.institution_name"
                    :year="formattedYear(education.start_at_month, education.start_at_year, education.end_at_month, education.end_at_year)"
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
            <h1 class="text-my-header text-[26px] font-bold">Experience</h1>
            <hr>
            <div id="timeline-container">
                <timeline-component
                    v-for="experience in experiences"
                    :key="experience.id"
                    :institution="experience.institution_name"
                    :year="formattedYear(experience.start_at_month, experience.start_at_year, experience.end_at_month, experience.end_at_year)"
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
            <h1 class="text-my-header text-[26px] font-bold">Non-formal Education</h1>
            <hr>
            <div id="timeline-container">
                <timeline-component
                    v-for="nfEducation in nfEducations"
                    :key="nfEducation.id"
                    :institution="nfEducation.institution_name"
                    :year="formattedYear(nfEducation.start_at_month, nfEducation.start_at_year, nfEducation.end_at_month, nfEducation.end_at_year)"
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
        },

        getMonthName(monthNumber) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return months[parseInt(monthNumber) - 1];
        },

        formattedYear(startMonth, startYear, endMonth, endYear) {
            const startMonthName = this.getMonthName(startMonth);
            const endMonthName = this.getMonthName(endMonth);
            return `${startMonthName} ${startYear} - ${endMonthName} ${endYear}`;
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
    list-style-type: circle;
    margin-bottom: 10px;
    margin-left: 20px;
}

#timeline-container {
    margin-top: 20px;
    margin-left: 50px;
    border-left: 2.5px solid #3F94A7;
}

</style>
