import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkView from "@/views/WorkView.vue";
import SkillsView from "@/views/SkillsView.vue";
import LabView from "@/views/LabView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/work",
      name: "work",
      component: WorkView,
    },
    {
      path: "/skills",
      name: "skills",
      component: SkillsView,
    },
    {
      path: "/lab",
      name: "lab",
      component: LabView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;