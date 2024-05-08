<template>
    <div class="project-modal-content">
        <slot></slot>
        <h2>{{ projectName }}</h2>
        <p>{{ repoLink }}</p>
        <p>{{ demoLink }}</p>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        projectName: String,
        repoLink: String,
        demoLink: String,
        description: String
    }
}
</script>

<style scoped>
.project-modal-content {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

h2 {
    color: #5A5A5A;
    margin: 5px 10px;
    font-size: 32px;
}

p {
    margin: 5px 10px;
}
</style>