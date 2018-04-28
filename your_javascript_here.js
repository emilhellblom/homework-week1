// Variables
var  hero = {
  name: 'Varriot',
  heroic: true,
  inventory: ['Unyielding armor', 'Cloak of Agatosh'],
  health: 100,
  weapon: {
    type: 'Mjolnir',
    damage: 15
  }
}
// Game logic
function rest(creature) {
  creature.health = 10;
  console.log('checking rest function', creature)
  return creature
}

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  console.log('checking pickUpItem function', creature)
  return creature
}

function dealDamage(attacker, defender) {
  defender.health -= attacker.weapon.damage;
  return defender
}

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.pop(index);
  console.log('checking equipWeapon function', creature.inventory, creature.weapon)
  return creature
}

function doBattle(heroicCreature, creature) {
  if (heroicCreature.heroic !== true) {
    return null
  }
  while (heroicCreature.health && creature.health > 0) {
    creature.health -= heroicCreature.weapon.damage;
    console.log('checking doBattle function', creature)
    if (creature.health > 0) {
      heroicCreature.health -= creature.weapon.damage;
    }
  }
  if (heroicCreature.health > 0) {
    return heroicCreature
  }
}
// UI
var div = document.createElement('div')
var image = document.createElement('img')
var body = document.querySelector('body')
body.appendChild(div)
div.appendChild(image)
document.getElementsByTagName('img')[0].setAttribute('src', 'inn.jpeg')
document.getElementsByTagName('img')[0].setAttribute('onclick', 'rest(hero)')

var image2 = document.createElement('img')
div.appendChild(image2)
document.getElementsByTagName('img')[1].setAttribute('src', 'bow.jpeg')
document.getElementsByTagName('img')[1].setAttribute('onclick', 'pickUpItem(hero, {type: "Bow", damage:"9"})')

var image3 = document.createElement('img')
div.appendChild(image3)
document.getElementsByTagName('img')[2].setAttribute('src', 'boar.jpeg')
document.getElementsByTagName('img')[2].setAttribute('onclick', 'doBattle(hero, {health: 5, weapon: {type: "tusk", damage: "4"}})')

var image4 = document.createElement('img')
div.appendChild(image4)
document.getElementsByTagName('img')[3].setAttribute('src', 'backpack.jpeg')
document.getElementsByTagName('img')[3].setAttribute('onclick', 'equipWeapon(hero, window.prompt("What is the index of the item that you want to equip?"))')

function displayStats(char) {
    document.write('Stats:' + '<br />')
    document.write('Name: ' + char.name + '<br />')
    document.write('Health: ' + char.health + '<br />')
    document.write('Weapon: ' + char.weapon.type + '<br />')
    document.write('Damage: ' + char.weapon.damage + '<br />')
}



displayStats(hero)
