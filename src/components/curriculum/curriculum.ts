/** @format */

import { Vue, Component } from "vue-property-decorator";

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

export default class Curriculum extends Vue {
  mounted() {
    console.log(window.screen);
  }
}
