var item = {
  ingredient: {
    tail: {
      rattail: {
        name: "rat tail"
      },

      bigrattail: {
        name: "big rat tail"
      }
    }
  }
}


item.ingredient.feather.birdfeather //item object
enemy.animal.badger //enemy object

var enemy = {
  animal: {
    badger: {
      loot: [item.ingredient.skin.badgerskin, item.ingredient.teeth.badgerteeth],
      health: 50,
      etc: "lala"
    }
  }
}

item.weapons.swords.woodensword //item object
enemy.animal.rat //enemy object

var enemy = {
	animal: {
		rat: {
			loot [item.ingredient.rattail, item.ingredient.bigrattail],
			health: 50,
			defrate: 6
		}
	}
}
			
var item = {
	weapons: {
		swords: {
			woodensword: {
				name: "Wooden Sword";
				atkrate: 5;
				equipped: 0;
				consumable: 0;
			}
		}
	}
}