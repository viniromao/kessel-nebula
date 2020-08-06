/** @format */

import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LandingPage from "../components/landing-page/landing-page.vue";
import Game from "../components/game/game.vue";
import Curriculum from "../components/curriculum/curriculum.vue";
import CurriculumHome from "../components/curriculumHome/curriculumHome.vue";
import CurriculumGame from "../components/curriculumGame/curriculumGame.vue";
import CvDaniel from "../components/cvdaniel/cvdaniel.vue";
import CanvasTuto from "../components/canvasTuto/canvasTuto.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/curriculum",
    name: "Curriculum",
    component: Curriculum,
  },

  {
    path: "/curriculumGame",
    name: "CurriculumGame",
    component: CurriculumGame,
  },
  {
    path: "/cvdaniel",
    name: "CvDaniel",
    component: CvDaniel,
  },

  {
    path: "/canvasTuto",
    name: "CanvasTuto",
    component: CanvasTuto,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
