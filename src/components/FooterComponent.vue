<template>
    <div class="footer">
        <hr>
        <div class="footer-container">
            <p>
                © 2024 M. Fauzan Al-Faruqi
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
.footer{
    width: 100%;
}

.footer-container {
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    margin: 0px 10%;
}

p {
    color: #3F94A7;
    font-weight:400;
    text-decoration: none;
    text-align: center;
    padding: 0 25px;
}

hr {
    border-style: solid;
    border-width: 1px;
    border-color: #3F94A7;
    margin: 0;
}
</style>