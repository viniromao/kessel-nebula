/** @format */

import { Vue, Component } from "vue-property-decorator";
import { BootstrapVue } from "bootstrap-vue";
import checkView from "vue-check-view";
Vue.use(checkView);
Vue.use(BootstrapVue);
@Component
export default class CurriculumGame extends Vue {}
