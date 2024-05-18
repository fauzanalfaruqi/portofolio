<template>
    <div class="navbar">
        <div class="nav-container">
            <router-link :class="{'active-nav-link': $route.path === '/portofolio', 'nav-link': $route.path !== '/'}" to="/">Home</router-link>
            <router-link :class="{'active-nav-link': $route.path === '/about', 'nav-link': $route.path !== '/about'}" to="/about">About</router-link>
            <router-link :class="{'active-nav-link': $route.path === '/projects', 'nav-link': $route.path !== '/projects'}" to="/projects">Projects</router-link>
            <router-link :class="{'active-nav-link': $route.path === '/contact', 'nav-link': $route.path !== '/contact'}" to="/contact">Contact</router-link>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'NavbarComponent'
}
</script>

<style>
.navbar {
    padding-top: 10px;
    margin: 0;
}

.nav-container {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    margin: 0px 150px;
}

.nav-link {
    color: #3F94A7;
    font-weight:400;
    text-decoration: none;
    text-align: center;
    padding: 0 25px;
}

.active-nav-link {
    background-color: #3F94A7;
    color: #ffffff;
    font-weight:400;
    text-decoration: none;
    text-align: center;
    padding: 5px 25px;
    cursor: default;
}

hr {
    border-style: solid;
    border-width: 1px;
    border-color: #3F94A7;
    margin: 0;
}

.nav-link:hover {
    transform: scale(1.1);
}

@media only screen and (min-width: 1600px) {
    .nav-container {
        margin: 0 250px;
    }
}
</style>