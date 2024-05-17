<template>
    <div class="download-modal-content">
        <h2>Download CV</h2>
        <hr>
        <p v-if="regularCVLink">CV: <br>
            <span class="icon-link">
                <img :src="fileIconLink" alt="file-icon">
                <a :href="regularCVLink" target="_blank">
                    {{ regularCVLink }}
                </a>
            </span>
        </p>
        <p v-if="enigmaCVLink">Enigma CV: <br>
            <span class="icon-link">
                <img :src="fileIconLink" alt="file-icon">
                <a :href="enigmaCVLink" target="_blank">
                    {{ enigmaCVLink }}
                </a>
            </span>
        </p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        enigmaCVLink: String,
        regularCVLink: String,
        fileIconLink: String,
    }
}
</script>

<style scoped>

h2 {
    color: #5A5A5A;
    margin: 5px 10px;
    font-size: 32px;
}

p {
    margin: 15px 15px;
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

.icon-link {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 10px 30px;
}

.icon-link img {
    width: 17px;
    height: 17px;
    padding-top: 2.5px;
    margin-right: 5px;
}

</style>