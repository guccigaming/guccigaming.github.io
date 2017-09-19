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

var enemy = {
	animal: {
		rat: {
			loot: [item.ingredient.rattail, item.ingredient.bigrattail],
			health: 50,
			defrate: 6
		}
	}
}
			
var item = {
	weapons: {
		swords: {
			woodensword: {
				name: "Wooden Sword",
				atkrate: 5,
				equipped: 0,
				consumable: 0
			}
		}
	}
}

item.weapons.swords.woodensword //item object
enemy.animal.rat //enemy object

