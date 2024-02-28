import Magician from "./magician.js";

export default class Daemon extends Magician {
  constructor(name, type) {
    super(name, type);
    this.attack = this.distance();
    this.defence = 40;
  }
}