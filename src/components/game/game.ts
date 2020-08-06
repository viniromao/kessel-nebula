/** @format */
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Game extends Vue {
 public tiles = [
    [0, 1, 2],
    [0, 0, 0],
    [1, 0, 0],
  ];

  setTile(coordinate1: number,coordinate2: number){
      this.tiles[coordinate1][coordinate2] = 1;
  }

  returnClass(tile: number) {
    switch (tile) {
      case 0:
        return "not-selected";
      case 1:
        return "x";
      case 2:
        return "o";
      default:
        break;
    }
  }
}
