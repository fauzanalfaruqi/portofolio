<template>
    <div class="navbar pt-[10px]">
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
            <!-- Desktop Navbar -->
            <div class="hidden md:flex flex-row items-center justify-end">
                <router-link :class="getNavClass('/')" to="/">Home</router-link>
                <router-link :class="getNavClass('/about')" to="/about">About</router-link>
                <router-link :class="getNavClass('/projects')" to="/projects">Projects</router-link>
                <router-link :class="getNavClass('/contact')" to="/contact">Contact</router-link>
            </div>

            <!-- Mobile Navbar -->
            <div class="md:hidden flex justify-between items-center">
                <button @click="toggleMenu" class="hamburger-btn">
                    ☰
                </button>
            </div>

            <!-- Dropdown Menu for Mobile -->
            <div v-if="isMenuOpen" class="mobile-menu">
                <router-link @click="closeMenu" :class="getNavClass('/')" to="/">Home</router-link>
                <router-link @click="closeMenu" :class="getNavClass('/about')" to="/about">About</router-link>
                <router-link @click="closeMenu" :class="getNavClass('/projects')" to="/projects">Projects</router-link>
                <router-link @click="closeMenu" :class="getNavClass('/contact')" to="/contact">Contact</router-link>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
        getNavClass(route) {
            return this.$route.path === route ? 'active-nav-link' : 'nav-link';
        }
    }
};
</script>

<style>
/* General Styles */
hr {
    border-style: solid;
    border-width: 1px;
    border-color: #3F94A7;
    margin: 0;
}

.nav-link {
    color: #3F94A7;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    padding: 0 25px;
    transition: transform 0.2s ease-in-out;
}

.active-nav-link {
    background-color: #3F94A7;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    padding: 5px 25px;
    cursor: default;
}

.nav-link:hover {
    transform: scale(1.1);
}

/* Mobile Menu Styles */
.hamburger-btn {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: #3F94A7;
    padding: 10px;
}

.mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 10px;
}

.mobile-menu .nav-link {
    padding: 10px;
    width: 100%;
    text-align: center;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .mobile-menu {
        display: flex;
    }
}

@media (min-width: 769px) {
    .mobile-menu {
        display: none;
    }
}
</style>
