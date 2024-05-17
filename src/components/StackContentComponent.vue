<template>
    <div class="stack-content-container">
        <img :src="logoLink">
        <p>{{ stackName }}</p>
    </div>
</template>

<script>
export default {
    props: {
        logoLink: String,
        stackName: String
    }
}
</script>

<style scoped>
.stack-content-container {
    margin: 10px;
    border: solid 2px #3F94A7;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.stack-content-container img {
    width: 55px;
    height: 55px;
    padding: 5px 2.5px 2.5px 2.5px;
}

.stack-content-container p {
    margin: 0;
    padding: 0;
    color: #5A5A5A;
    font-size: 16px;
    padding: 2.5px;
}
</style>