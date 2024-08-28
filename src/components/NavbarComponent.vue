<template>
    <div class="navbar pt-[10px]">
        <div class="flex flex-row items-center justify-end max-w-screen-xl px-4 mx-auto sm:px-6">
            <router-link :class="{'active-nav-link': $route.path === '/portofolio', 'nav-link': $route.path !== '/portofolio'}" to="/portofolio">Home</router-link>
            <router-link :class="{'active-nav-link': $route.path === '/portofolio/about', 'nav-link': $route.path !== '/portofolio/about'}" to="/portofolio/about">About</router-link>
            <router-link :class="{'active-nav-link': $route.path === '/portofolio/projects', 'nav-link': $route.path !== '/portofolio/projects'}" to="/portofolio/projects">Projects</router-link>
            <router-link :class="{'active-nav-link': $route.path === '/portofolio/contact', 'nav-link': $route.path !== '/portofolio/contact'}" to="/portofolio/contact">Contact</router-link>
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

.nav-link {
    color: #3F94A7;
    font-size: 16px;
    font-weight:400;
    text-decoration: none;
    text-align: center;
    padding: 0 25px;
}

.active-nav-link {
    background-color: #3F94A7;
    color: #ffffff;
    font-size: 16px;
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