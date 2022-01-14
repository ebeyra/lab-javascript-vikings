// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    return;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(add) {
    this.vikingArmy.push(add);
  }
  addSaxon(add) {
    this.saxonArmy.push(add);
  }
  vikingAttack() {
    let pickSax = Math.floor(Math.random() * this.saxonArmy.length);
    let pickVik = Math.floor(Math.random() * this.saxonArmy.length);
    this.saxonArmy[pickSax].receiveDamage(this.vikingArmy[pickVik].strength);

    if (this.saxonArmy[pickSax].health <= 0) {
      this.saxonArmy.splice([pickSax]);
      return 'A Saxon has died in combat';
    }
  }
  saxonAttack() {
    let pickSax = Math.floor(Math.random() * this.vikingArmy.length);
    let pickVik = Math.floor(Math.random() * this.vikingArmy.length);
    this.vikingArmy[pickVik].receiveDamage(this.saxonArmy[pickSax].strength);

    if (this.vikingArmy[pickVik].health <= 0) {
      this.vikingArmy.splice([pickVik]);
    } else {
      return `${this.vikingArmy[pickVik].name} has received ${this.saxonArmy[pickSax].strength} points of damage`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
