// Variables
var hero = {
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
  return creature
}

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  return creature
}

function dealDamage(attacker, defender) {
  defender.health -= attacker.weapon.damage;
  return defender
}

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.pop(index);
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

function displayStats(creature) {
  var ul = document.createElement('ul')
  var body = document.querySelector('body')
  var name = document.createElement('li')
  var arr = ['name', 'health', 'weapon']
  ul.setAttribute('id', 'stats-list')

  for (var item in creature) {
    if (arr.includes(item)) {
      var li = document.createElement('li');
      if (item === 'weapon') {
        var text = document.createTextNode(creature[item]['damage'])
        var li2 = document.createElement('li')
        var text2 = document.createTextNode(creature[item]['type'])
        li2.appendChild(text2)
        ul.appendChild(li2)
      } else {
        var text = document.createTextNode(creature[item]);
      }
      li.appendChild(text)
      ul.appendChild(li)
    }
  }
  body.appendChild(ul);
}

function displayInventory(creature) {
  var i = 0;
  var body = document.querySelector('body')
  var ul = document.createElement('ul')
  let text = document.createTextNode('Inventory:')

  while (i < creature.inventory.length) {
    var li = document.createElement('li')
    if (typeof creature.inventory[i] === "object") {
      var content = document.createTextNode(creature.inventory[i].type)
    } else {
    var content = document.createTextNode(creature.inventory[i])
  }
    li.appendChild(content)
    ul.appendChild(li)
    i++;
  }
  body.appendChild(ul)
}

function updateStats() {
  displayStats(hero);
  displayInventory(hero);
}

function updateName(e) {
  e.preventDefault();
  hero.name = e.target.value
  updateStats();
}

//UI

var div = document.createElement('div')
var image = document.createElement('img')
var body = document.querySelector('body')
body.appendChild(div)
div.appendChild(image)
document.getElementsByTagName('img')[0].setAttribute('src', 'inn.jpeg')
document.getElementsByTagName('img')[0].setAttribute('onclick', 'rest(hero), updateStats()')
var image2 = document.createElement('img')
div.appendChild(image2)
document.getElementsByTagName('img')[1].setAttribute('src', 'bow.jpeg')
document.getElementsByTagName('img')[1].setAttribute('onclick', 'pickUpItem(hero, {type: "Bow", damage:"9"}), updateStats()')

var image3 = document.createElement('img')
div.appendChild(image3)
document.getElementsByTagName('img')[2].setAttribute('src', 'boar.jpeg')
document.getElementsByTagName('img')[2].setAttribute('onclick', 'doBattle(hero, {health: 50, weapon: {type: "tusk", damage: "4"}}), updateStats()')

var image4 = document.createElement('img')
div.appendChild(image4)
document.getElementsByTagName('img')[3].setAttribute('src', 'backpack.jpeg')
document.getElementsByTagName('img')[3].setAttribute('onclick', 'equipWeapon(hero, window.prompt("What is the index of the item that you want to equip?")), updateStats()')

var input = document.createElement('input')
var button = document.createElement('button')
var form = document.createElement('form')
input.setAttribute('type', 'text')
input.setAttribute('onchange', 'updateName(event)')
form.appendChild(input)
body.appendChild(form)



displayStats(hero)
displayInventory(hero)
