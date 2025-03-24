<template>
    <div class="relative flex flex-col w-full max-w-screen-xl px-4 mx-auto sm:px-6 p-8">
        <!-- Education Timeline -->
        <div id="education-timeline">
            <h1 class="text-my-header text-[26px] font-bold">Education</h1>
            <hr class="my-4">
            <div id="timeline-container" class="md:ml-12 md:border-l-2 border-[#3F94A7]">
                <timeline-component v-for="education in educations" :key="education.id"
                    :institution="education.institution_name"
                    :year="formattedYear(education.start_at_month, education.start_at_year, education.end_at_month, education.end_at_year)"
                    :timelineTag="education.major">
                    <ul class="text-gray-600 text-sm list-disc list-outside pl-5">
                        <li v-for="detail in education.education_details" :key="detail.id" class="mb-2">
                            {{ detail.description }}
                        </li>
                    </ul>
                </timeline-component>
            </div>
        </div>

        <!-- Experience Timeline -->
        <div id="experience-timeline" class="mt-8">
            <h1 class="text-my-header text-[26px] font-bold">Experience</h1>
            <hr class="my-4">
            <div id="timeline-container" class="md:ml-12 md:border-l-2 border-[#3F94A7]">
                <timeline-component v-for="experience in experiences" :key="experience.id"
                    :institution="experience.institution_name"
                    :year="formattedYear(experience.start_at_month, experience.start_at_year, experience.end_at_month, experience.end_at_year)"
                    :timelineTag="experience.role">
                    <ul class="text-gray-600 text-sm list-disc list-outside pl-5">
                        <li v-for="detail in experience.experience_details" :key="detail.id" class="mb-2">
                            {{ detail.description }}
                        </li>
                    </ul>
                </timeline-component>
            </div>
        </div>

        <!-- Non-formal Education Timeline -->
        <div id="non-formal-education-timeline" class="mt-8">
            <h1 class="text-my-header text-[26px] font-bold">Non-formal Education</h1>
            <hr class="my-4">
            <div id="timeline-container" class="md:ml-12 md:border-l-2 border-[#3F94A7]">
                <timeline-component v-for="nfEducation in nfEducations" :key="nfEducation.id"
                    :institution="nfEducation.institution_name"
                    :year="formattedYear(nfEducation.start_at_month, nfEducation.start_at_year, nfEducation.end_at_month, nfEducation.end_at_year)"
                    :timelineTag="nfEducation.course">
                    <ul class="text-gray-600 text-sm list-disc list-outside pl-5">
                        <li v-for="detail in nfEducation.nf_education_details" :key="detail.id" class="mb-2">
                            {{ detail.description }}
                        </li>
                    </ul>
                </timeline-component>
            </div>
        </div>
    </div>
</template>

<script>
import TimelineComponent from '../components/TimelineComponent'

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
/* Tailwind CSS should handle most of the layout and styling now, 
   the only custom style is for colors, margins, and fonts specific to your design */

.text-my-header {
    color: #5A5A5A;
}
</style>
