//STATS CSS COLORS IN ARRAY
var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
var randcolorname = CSS_COLOR_NAMES[randomIntFromInterval(0,CSS_COLOR_NAMES.length)];
function rngcolorgen() {
	randcolorname = CSS_COLOR_NAMES[randomIntFromInterval(0,CSS_COLOR_NAMES.length)];
}
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}



var loot = new Lootr('/equipment')
var deadMonster = [];
var craftSword = [];
var craftWoodenSpear = [];




loot.add({ name: 'Test' })

loot.branch('junk')
loot.branch('weapons')	
loot.branch('armor')
loot.branch('inventory')
loot.branch('craftables')


loot.branch('equipment/craftables')
	.branch('Spears1')
		.add({ name: 'Junk Spear', weaponAtk: '5', itemEqpSlot: 'mHand' })		
		.add({ name: 'Shitty Wooden Spear', weaponAtk: '10', itemEqpSlot: 'mHand' })
		.add({ name: 'Wooden Spear', weaponAtk: '15', color: 'Black', itemEqpSlot: 'mHand' })

loot.branch('/equipment/junk')
	.add({ name: 'Junk Spear', weaponAtk: '5', itemEqpSlot: 'mHand' })

loot.branch('/equipment/weapons')
	.branch('melee')
		.add({ name: 'Shitty Knife', weaponAtk: '5', itemEqpSlot: 'mHand' })
		.add({ name: 'Shitty Bat', weaponAtk: '5', itemEqpSlot: 'mHand' })	
		.branch('spears')
			.add({ name: 'Shitty Wooden Spear', weaponAtk: '0', itemEqpSlot: 'mHand' })
			.add({ name: 'Wooden Spear', weaponAtk: '15', color: randcolorname, itemEqpSlot: 'mHand' })
	.branch('ranged')
		.branch('bows')
		.add({ name: 'Wooden Bow', weaponAtk: '5', itemEqpSlot: 'mHand' })
        .add({ name: 'Wooden Longbow', weaponAtk: '5', itemEqpSlot: 'mHand' })

loot.branch('/equipment/armor')
    .add({ name: 'Plates' })
    .add({ name: 'Leather' })
	
loot.branch('/equipment/inventory')
		.branch('equipped')
			.branch('mHand')
				.add({ name: 'Shitty Stick', weaponAtk: '5', itemEqpSlot: 'mHand' })
			.branch('Chest')
		
// loot.setModifiers([
	// { name:    'from the woods', weaponAtk: '10-15' },
	// { name:    'sturdy $color $name',  weaponAtk: '15-15' },
	// { force:   '*2' },
	// { intell:  '2-10' },
	// { name:    '$color $name from the gods', force: '+4' }
// ])

	
// Loot something from top level
loot.roll('/equipment')                        // only 'Stuff'

// Loot something from anywhere
loot.roll('/equipment', Infinity, Infinity)    // any item

// Loot an armor
loot.roll('/equipment/armor')                  // one of [ 'Plates', 'Leather' ]

// Loot a weapon
loot.roll('/equipment/weapons', 3)             // one of [ 'Pistol', 'Uzi' ]


craftSword.drops = [
	
    {from: '/equipment/weapons/melee', luck:1, stack:'1', modify:true }
]

craftWoodenSpear.drops = [
	{from: '/equipment/junk', luck:0.9, stack:1 },
    {from: '/equipment/craftables/Spears1', luck:0.3, stack:'1', modify:true },
    {from: '/equipment/craftables/Spears1', luck:0.5, stack:'1' }
]

//var rewards = loot.loot(craftSword.drops)
// var rewards = JSON.stringify(loot.loot(craftSword.drops))