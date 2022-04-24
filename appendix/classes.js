// class
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "attack with " + this.weapon;
  }
}

// inheritance
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }

  attack() {
    return super.attack() + " - " + this.type;
  }
}

const elf = new Elf("Gimli", "axe", "elf");
console.log(elf.attack());
