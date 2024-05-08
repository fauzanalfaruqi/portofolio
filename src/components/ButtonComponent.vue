<template>
    <button
        :class="[style === 'primary' ? 'primary-button' : 'secondary-button']"
        @click="handleClick">
        <slot></slot>
    </button>
</template>
  
<script>
    export default {
        props: {
            style: {
                type: String,
                default: 'primary'
            }
        },

        methods: {
            handleClick() {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>
button {
    margin: 5px 0;
}

.primary-button {
    background-color: #3F94A7;
    color: white;
    border: none 0;
    border-radius: 10px;
    width: 230px;
    height: 55px;
    font-family: Poppins, Roboto, Helvetica;
    font-size: 18px;
}

.secondary-button {
    color: #3F94A7;
    border: solid 3px #3F94A7;
    border-radius: 10px;
    width: 230px;
    height: 55px;
    font-family: Poppins, Roboto, Helvetica;
    font-size: 18px;
}

button:hover {
    cursor: pointer;
    transform: scale(1.025);
}

</style>