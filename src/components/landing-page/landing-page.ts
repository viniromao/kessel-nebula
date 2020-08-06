/** @format */

import { Component, Vue } from "vue-property-decorator";

@Component
export default class LandingPage extends Vue {
  goToGame() {
    this.$router.push({
      path: "/game",
    });
  }

  goToCurriculum() {
    this.$router.push({
      path: "/curriculum",
    });
  }

  goToCanvas() {
    this.$router.push({
      path: "/canvasTuto",
    });
  }
}
