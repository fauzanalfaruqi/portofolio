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
.primary-button {
    background-color: #3F94A7;
    color: white;
    border: none 0;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    font-family: Poppins, Roboto, Helvetica;
    font-size: 16px;
}

.secondary-button {
    color: #3F94A7;
    border: solid 3px #3F94A7;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    font-family: Poppins, Roboto, Helvetica;
    font-size: 16px;
}

button:hover {
    cursor: pointer;
    transform: scale(1.025);
}

</style>