<template>
    <div class="dropdown">
        <button class="dropdown-button">Sort</button>
        <div class="dropdown-content">
            <a href="#">Option A</a>
            <a href="#">Option A</a>
            <a href="#">Option A</a>
            <a href="#">Option A</a>
        </div>
    </div>
</template>

<style scoped>
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-button {
    background-color: #3F94A7;
    color: white;
    padding: 5px 10px;
    font-size: 16px;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 125px;
}

.dropdown-content {
    display: none;
    border-radius: 10px;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 10px 15px;
    text-decoration: none;
    display: block;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>