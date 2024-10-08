// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

const routes = [
  {
    path: '/portofolio',
    name: 'Home',
    components: {
        default: HomeView,
        header: NavbarComponent,
        footer: FooterComponent
    }
  },
  {
    path: '/portofolio/about',
    name: 'About',
    components: {
        default: AboutView,
        header: NavbarComponent,
        footer: FooterComponent
    }
  },
  {
    path: '/portofolio/projects',
    name: 'Projects',
    components: {
        default: ProjectsView,
        header: NavbarComponent,
        footer: FooterComponent
    }
  },
  {
    path: '/portofolio/contact',
    name: 'Contact',
    components: {
        default: ContactView,
        header: NavbarComponent,
        footer: FooterComponent
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: '/portofolio/',
  routes
});

export default router;
