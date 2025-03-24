<template>
    <div class="relative flex items-center">
        <!-- Card container -->
        <div class="bg-white border-2 border-[#3F94A7] rounded-lg p-4 w-full md:ml-24 mb-5">
            <!-- Info section -->
            <div class="flex flex-col gap-2">
                <!-- Title and Tag container -->
                <div class="flex flex-col md:flex-row justify-between md:items-center">
                    <h3 id="title" class="font-semibold text-[#5A5A5A]">{{
                        institution
                        }}</h3>
                    <span class="text-white text-sm bg-[#3F94A7] py-1 px-4 rounded-md">{{ timelineTag }}</span>
                </div>
                <hr class="border-[#3F94A7] mb-2" />
                <p class="text-sm text-[#5A5A5A] italic">{{ year }}</p>
                <!-- Slot for additional content -->
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        institution: String,
        year: String,
        timelineTag: String
    }
}
</script>

<style scoped>
/* Timeline dot  */
@media (min-width: 768px) {
    #title::before {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        background: white;
        border-radius: 999px;
        left: -10px;
        border: 2px solid #3F94A7;
    }
}
</style>