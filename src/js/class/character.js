export default class Character {
    constructor(name, type) {
      this.name = this.isNameValid(name);
      this.type = this.isTypeValid(type);
      this.health = 100;
      this.level = 1;
      this.attack = null;
      this.defence = null;
      this.isStoned = false;
      this.spacing = 1;
    }
  
    isNameValid(name) {
      if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
        return name
      } else {
        throw new Error('Предупреждение имя должно быть в формате текста и содержать не менее 2 символов и не более 10.')
      }
    }
  
    isTypeValid(type) {
      const checklist = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
      if (checklist.includes(type)) {
        return type
      } else {
        throw new Error('Не верный тип')
      }
    }
  }