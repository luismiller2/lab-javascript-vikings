// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack() {
    console.log(`${this.name} attacks for ${this.strength} damage`);
    return this.strength;
  }
  
  receiveDamage(dmg) {
    console.log(`${this.name} receives ${dmg} damage`);
    this.health -= dmg;
    if (this.health <= 0) {
      console.log(`${this.name} has died`);
    }
  }
  }

class Player {
  constructor(name) {
    this.name = name;
    this.health = 10;
    this.strength = 5;
  }

attack() {
  console.log(`${this.name} attacks for ${this.strength} damage`);
  return this.strength;
}

receiveDamage(dmg) {
  console.log(`${this.name} receives ${dmg} damage`);
  this.health -= dmg;
  if (this.health <= 0) {
    console.log(`${this.name} has died`);
  }
}
}


// // Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
  }
  battleCry(){
    return "Odin Owns You All!"
  }
  receiveDamage(dmg) {
    this.health-=dmg;
    if (this.health > 0) {
      return (`${this.name} has received ${dmg} points of damage`);
    } else { 
      return (`${this.name} has died in act of combat`);
    }
  
    }
  }

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg) {
    this.health-=dmg;
    if (this.health > 0) {
      return (`A Saxon has received ${dmg} points of damage`);
    } else { 
      return (`A Saxon has died in combat`);
    }
  
    }
  }

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
    addViking(newViking){
      this.vikingArmy.push(newViking);
    }
    addSaxon(newSaxon){
      this.saxonArmy.push(newSaxon);
    }

    vikingAttack() {
      let randomSaxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
      let randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);

      let message = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength
      );

    if(this.saxonArmy[randomSaxonIndex].health <= 0){
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return message
    }

    saxonAttack() {
      let randomSaxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
      let randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);

      let message = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength
      );

    if(this.vikingArmy[randomVikingIndex].health <= 0){
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return message
  }
    showStatus() {
      if(this.saxonArmy.length <=0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length <= 0) {
        return "Saxons have fought for their lives and survived another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
  }






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
