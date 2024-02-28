import Character from './character.js'

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = this.distance();
    this.defence = 40;
  }
  distance(distance) {
    if (!distance) {
      return 100
    }
    if(distance > 5) {
      distance = 5
    }
    this.attack = (100 - ((distance - 1) * 10));
    this.spacing = distance
  }

  stoned(state) {
    if (!this.isStoned && state) {
      this.attack =  Math.round(this.attack - Math.log2((110 - this.attack) / 10) * 5);
      this.isStoned = true;
    } else {
      this.attack = (100 - ((this.spacing - 1) * 10));
      this.isStoned = false;
    }
    
  }
}