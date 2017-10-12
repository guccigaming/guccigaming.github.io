/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

//STATS CSS COLORS IN ARRAY
var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
var randcolorname = "shit"
function rngcolorgen() {
randcolorname = CSS_COLOR_NAMES[randomIntFromInterval(0,CSS_COLOR_NAMES.length)];
	}




// -- STATS --
var intelligence = 0;
var intps = 0;
var braincellCost = 10;
var energynum = 0;
var food = 0;
var forageTimer = 0;
var braincells = 0;
var progressEnergy = 0;
var WSReq = 0;
var wood = 0;
var stones = 0;
var wandergain = 0;
var braincellNextCost = 0;


var dead = false;


var LookReq = 100; //int
var message = "Test 1 <br />"

// --GUI--

var GUI = {
    MainScreen:"MainPage", //MainPage, CraftPage, VariablePage?
    ChatScreen:"Console", //Console, Lore

};

//--LOOTR MODS
loot.setModifiers([
	{ name:    'from the woods', weaponAtk: '10-15' },
	{ name:    '$color $name from the gods',  weaponAtk: '15-25' },
	{ force:   '*2' },
	{ intell:  '2-10' },
	{ name:    '$color $name from the gods', force: '+4' }
])

//--OBJECTS

var check = {
	MeditateStop : 1

};


var player = {
	name : "Gucci",
	cRank : 0,
	intgainmodifier : 1.0,
	//BODY-STATS
	bodystats : {strength:1.00,dexterity:1.00,intelligence:1.00},
	spiritstats : {ki:0},
	hiddenstats : {SPcondensed : 0},
	hp : 300,
	maxhp : 300,
	gold : 0,
	xp : 0,
	cRank : 0,
	cLevel : 1,
	x : 50,
	y : 0,
	dead : false,
	inventory : 0, 
	weapon : 0,
	armor : 0,
	dead : false, 
	atkrating : 0,
	blacksmithProf : 0,
	mHand : loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0],
    maxint : 50,
	focus : 0,
	buildingmatmultiplier : 1,
	storagespace : 0,
	storagemax : 500,
	woodenplanks : 0,
	researchbench : 0,
	primitivetools : 0
};

var BreakthroughChance = 0




//RANKNAMES
// cRank 0 = Earthly Body
// cRank 1 = Foundation Building
// more to add

var cRankNames = ["Earthly Body", "Foundation Building"]

function getLevelRank(){
		document.getElementById("player.name").innerHTML = player.name;
		document.getElementById("cRankName").innerHTML = cRankNames[player.cRank];
		document.getElementById("cLevel").innerHTML = player.cLevel;
}



var monster = {
	hp : 0,
	maxhp : 0,
	level : 0,
	drops : 0, //add drops from lootrtable
	atkrating : 0,
	armor : 0,
	name : "name",
	breed : "breed"
};

var upgradeCost = {
    Focus : 50,
    nextFocus : 50
}	
	



//Create Inventory List on Combat Page
function InvNames(){
	
	
	var text = "";
	var i;
	for (i = 0; i < loot.branchs.equipment.branchs.inventory.items.length; i++) {
			var temp2 = " <a href=\"#\" onclick=\"equipItem(this.id)\" id=\"invSlotID" + i + "\"\">Equip</a>" + "<br /><hr><br />";
			text += "Slot " + (i + 1) + ": " + loot.branchs.equipment.branchs.inventory.items[i].name + temp2;
	}
	document.getElementById("HUD_inv_1").innerHTML = text;
};

function EquippedItemsList(){
	var text = "";
	
};



//Create Player Body Stats on Home page
function GetPlayerBodyStats(){
	var text = "";
	var i;
	for(i = 0; i < Object.keys(player.bodystats).length; i++) {
		var bodystatsNames = Object.keys(player.bodystats);
		statname = Object.keys(player.bodystats)[i]
		text += "<br />" + statname + " : " + prettify(Object.values(player.bodystats)[i]);
	}
	document.getElementById("HUD_PlayerBodyStats").innerHTML = text;
}


//Create Player Spirit Stats on Home Page
function GetPlayerSpiritStats(){
	var text = "";
	var i;
	for(i = 0; i < Object.keys(player.spiritstats).length; i++) {
		var spiritstatsNames = Object.keys(player.spiritstats);
		statname = Object.keys(player.spiritstats)[i]
		text += "<br />" + statname + " : " + prettify(Object.values(player.spiritstats)[i]);
	}
	document.getElementById("HUD_PlayerSpiritStats").innerHTML = text;

}


function EqpNames(){
	var text = "";
	var i;
	for (i = 0; i < loot.branchs.equipment.branchs.inventory.branchs.equipped.items.length; i++) {
			text += "Slot " + (i + 1) + ": " + loot.branchs.equipment.branchs.inventory.branchs.equipped.items[i].name + "<br />";
	}
	document.getElementById("HUD_inv_1").innerHTML = text;
};


var HUD_inv_1 = 0;
var HUD_eqp_1 = 0;

// -- ACTIONS --



//JQuery Actions
$(document).ready(function() {

//TrainBody

	$( "#TrainBodyButton" ).click(function() {
	var rng = randomIntFromInterval(1,3);
	if(rng == 1){
		player.bodystats.strength += 0.05;
		message = "I gained 0.05 strength! <br />";
		Message();
	}
	else if(rng == 2){
		player.bodystats.dexterity += 0.05;
		message = "I gained 0.05 dexterity! <br />";
		Message();
	}
	else{
		player.bodystats.intelligence += 0.05;
		message = "I gained 0.05 strength! <br />";
		Message();
	}


  });



	//Condense Soul Power


	$( "#condenseSPButton" ).click(function() {
		if(player.spiritstats.soulpower > 50){
			player.spiritstats.soulpower -= 50;
			player.hiddenstats.SPcondensed += 1;
			message = "Condensed 50 soulpower into 1 ki."
		}
		else{
			message = "I don't have enough ki.. <br />";
			Message();
		};
	
  

	});

	//Meditate button
	$( "#StartMeditateButton" ).click(function() {
		if(player.spiritstats.soulpower > 0){
			message = "<a style=\"font-color:blue;\">You start meditating.</a><br />";
			Message();
			check.MeditateStop = 0
		}
	});

	$( "#StopMeditateButton" ).click(function() {
		
			message = "<a style=\"font-color:blue;\">You stop meditating.</a><br />";
			Message();
			StopMeditate();
		
	});

		//Breakthrough level button
		$( "#BreakThroughLevelButton" ).click(function() {
			if(player.spiritstats.soulpower < 250 * (player.cRank+1)|| player.spiritstats.soulpower == null){
				message = "<a>Need more soulpower to breakthrough.</a><br />";
				Message();
			}
			else{
				player.spiritstats.soulpower = 0
				BreakthroughChance = 100 - Math.pow(1.52,player.cLevel)
				document.getElementById("BreakthroughChance").innerHTML = Number(BreakthroughChance);
				if(randomIntFromInterval(1,100) < BreakthroughChance){
					player.cLevel += 1;
					message = "<a style=\"color:green;\">You broke through to the next level!!</a><br />";
					Message();	
				}
				else{
					message = "<a style=\"color:red;\">You failed to break through..</a>"
				}
			}
			
		});

});


//update tooltips
function UpdateToolTips(){
		
}

function Meditate(){
	if(player.spiritstats.soulpower < 1){
		StopMeditate();
	}
	else{
		rng = randomIntFromInterval(1,12)
		player.spiritstats.soulpower -= prettify(0.05 * player.spiritstats.ki);

		if(rng < 5){
			player.bodystats.dexterity += prettify(0.002 * player.spiritstats.ki);
			}
			else if(rng > 4 && rng < 9){
				player.bodystats.strength += prettify(0.002 * player.spiritstats.ki);
			}
			
			else if(rng > 8){
				player.bodystats.intelligence += prettify(0.002 * player.spiritstats.ki);
			}	
	};

};

function StopMeditate(){
	check.MeditateStop = 1;
};

	
function equipItem(x) {
	 var invSlotIDNr = x;
	 var i = invSlotIDNr[9];
	 if(invSlotIDNr = "invSlotID" + i){
		 
		
		var itemEqpSlotTemp = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0];
		if(itemEqpSlotTemp.itemEqpSlot = "mHand"){ 
			var x = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0] //save mHand item temporarily
			loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0] = 	loot.branchs.equipment.branchs.inventory.items[i];		//item in mHand slot becomes invslotid
			loot.branchs.equipment.branchs.inventory.items[i] = x// item slot 1 becomes mHand item
			
			};
	 };
	 // else if(){message = 'Equipped loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0].name'}; //add more  checks with for loops, remove the if else
		
//	var player.inventory = loot.branchs.equipment.branchs.inventory;

	// var itemtemp = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0] //save equipped item temp
	// loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items.splice(0, 1) //remove equipped item
	
	// loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand				//add item to equipslotx
		
};


// -- CRAFTING --


//JQuery crafting
$(document).ready(function() {
	
	$( "#CraftResearchBenchButton" ).click(function() {
		if(player.woodenplanks > 3){
			player.woodenplanks -= 3;
			player.researchbench += 1;
			document.getElementById("InvResearchbench").innerHTML = player.researchbench
			message = "You created 1 research bench for 3 wooden planks.<br />"
			Message();
		}
		else{
			message = "I don't have enough wooden planks. <br />"
			Message();
		};	
	});


});

function GainWoodenPlanks(number){
	var x = number * player.buildingmatmultiplier 
	player.woodenplanks += prettify(x)
};

function craftWoodenPlank(number) {
	if(wood > 19){
		wood -= 20
		GainWoodenPlanks(number);
		message = "I got " + prettify(number * player.buildingmatmultiplier) + " wooden plank(s)!<br />";
		Message();
		document.getElementById("InvWoodenPlanks").innerHTML = prettify(player.woodenplanks)
	}
	else {
		message = "I don't have enough wood.. <br />";
		Message();


	};

};


function craftSpear() {
	if(wood < 50 || stones < 25) {
		message = "It takes 50 wood and 25 stones to build  a spear! <br />";
		Message();
		}
	 else{	
		// rewards = loot.roll('/equipment/craftables/Spears1')
		rewards = loot.loot(craftWoodenSpear.drops)
		if(rewards[rewards.length - 1] != null){
			loot.setModifiers([
				// { name:    'from the shadows' },
				// { name:    'A $color $name from the gods' },
				// { agility: 5 },
				// { force:   '*2' },
				// { intell:  '2-10' },
				{ name: ' $color uncommon $name', weaponAtk: '20-30' }
			])
			
				loot.branch('/equipment/inventory')
					.add(rewards[rewards.length - 1])
					
			wood -= 50, stones -=25;
			message = " You made a "+rewards[rewards.length - 1].name+"<br />";
			Message();
		 }
		 else{
			 message = "Shit! I messed up and made crap! <br />";
			 Message();
			 }
		 
	 };
};


function Think(number) {
    if(intelligence < player.maxint){
        intelligence = intelligence + number;
        document.getElementById("intelligence").innerHTML = Number(intelligence).toFixed(2); 
    };
};

function buyBraincell(){
	
	braincellCost =  Math.floor(10 * Math.pow(1.1,braincells)); //works out cost of braincell
	if(intelligence >= braincellCost){
		braincells = braincells + 1;
		intelligence = intelligence - braincellCost;
		document.getElementById("braincells").innerHTML = braincells;
		document.getElementById("intelligence").innerHTML = intelligence;
        braincellNextCost = Math.floor(10 * Math.pow(1.1,braincells));
	   document.getElementById("braincellCost").innerHTML = braincellNextCost;
	   StatCheck()
	};


};




function Focus(number){
    if(intelligence < 50){
      //do nothing  
        
    }
    else {
        
        
        upgradeCost.Focus = Math.floor(50 * Math.pow(1.1,player.focus));
        player.focus = player.focus + number;
        intelligence -= upgradeCost.Focus;
        var i=0;
        player.maxint += Math.floor(50 * Math.pow(1.1,i));
        i++;
//        document.getElementsByClassName("player.maxint")[0].innerHTML = player.maxint;
        upgradeCost.nextFocus = Math.floor(50 * Math.pow(1.1,player.focus)); //get next focuscost
        document.getElementsByClassName("focusCost")[0].innerHTML = upgradeCost.nextFocus;
        if(player.focus <= 15  && player.focus <= 25) {
            message = "Your mind begins to clear up... </br>"	
            Message();
        } else if(player.focus >= 25 && player.focus <= 50){
            message = "You feel cold..<br />"
            Message();
        } else if(player.focus >= 50){
            message = "<a class='importantmsg'> &nbsp; I manage to open my eyes and can't seem to understand what is happening.. <br /> A dim white light shines through the leaves and a lot of trees are hidden by the darkness.</a></br>";
            Message();
        }
        else {
            message = "Hnngh, focusss!<br />"
            Message();
        }

        }

		
	document.getElementById("player.focus").innerHTML = player.focus;
};

function ChopWood(number){
	if(energy.value >= 10){
		let energy = document.getElementById("energy")
		energy.value -= 10;
		wood += prettify(number * player.buildingmatmultiplier);
		message = "Chopped some trees to get " + prettify(number * player.buildingmatmultiplier) + " wood." 
	}
	else{
		message = "I'm too tired.. <br />";
		Message();
	}

}

//Knowledge (upgrades)

$(document).ready(function() {
	$("#PrimitiveTools").click(function() {
		if(player.spiritstats.soulpower > 199 && player.researchbench > 2 && player.primitivetools == 0){
			player.spiritstats.soulpower -= 200;
			player.primitivetools = 1;
			$("#PrimitiveToolsUnlocked").show();
		}
		else {
			message = "I'm missing some resources for this upgrade. <br />"
			Message();
		};
	});

	$("#MeasuringTools").click(function() {
		if(player.woodenplanks > 4 && player.researchbench > 4 && player.primitivetools == 1 && player.measuringtools == null){
			player.measuringtools = 1
			player.woodenplanks -= 5;
			player.buildingmatmultiplier += 0.15;
			// $("#NextUpgrades").show();
			message = "Using basic ink made from leaves and wooden planks to make measuring tools increased my efficiency in crafting certain resources!<br />";
			Message();
		}
		else {
			message = "I already know this or maybe I'm missing some resources? <br />"
			Message();
		};
	});

});





// this is not used, might use it for reference??
// function ChopWood() {
// 	// let energy = document.getElementById("")
// 	var btn=document.querySelector("button");
// 	TimerStart(1,"#ChopTime")
// 	btn.setAttribute("disabled", "");
// }

//  function makeMoney() {      
//         $("#makeMoney").attr('disabled', 'disabled');
//         fillAgain();
//     }

// function fillAgain() {
// 	setTimeout(function ()
// 	{
// 		if($("#divfillmeUp").find('div').length <= 10)
// 		{
// 			$("#divfillmeUp").append("<div style='background-color: red; width: 10%; height: 1%;float: left'></div>");
// 			fillAgain();
// 		}
// 	},2000)
// }

	
function ERegenPass(number){
	if(food >= 1 && energynum < 100){
		
			let energy = document.getElementById("energy");
			energy.value += number;
			food = food - 0.25;
			document.getElementById("food").innerHTML = food;
		}
	else(food < 1 && energynum < 100)
	let energy = document.getElementById("energy");
	energy.value += number * 0.1;
		
	 // else if(energy = 100) {
		// message = "You are full!<br />"
		// Message();
};



var rng2 = randomIntFromInterval(0,10);

function Wander(){
	if (energynum < 11) {
		message = "I'm too tired..<br />"
		Message();
	} else {
		let energy = document.getElementById("energy")
		energy.value -= 10;
		var rng = randomIntFromInterval(0,10);
		var rng2 = randomIntFromInterval(0,10);
		if (rng > 3) {
			if (rng2 >= 4) {
				WSReq = 1;
				wandergain = randomIntFromInterval(0,10) * prettify((player.bodystats.dexterity*1.15 - player.bodystats.dexterity));
				wood += wandergain;
				var msg1 = "You gained"
				var msg2 = "wood! <br />"
				message = msg1 + " " + wandergain + " " + msg2
				Message();	
				} else { 
					wandergain = randomIntFromInterval(0,10); prettify((player.bodystats.strength*1.15 - player.bodystats.strength))
					WSReq = 1;
					var msg1 = "You gained"
					var msg2 = "stones!<br />"				
					message = msg1 + " " + wandergain + " " + msg2
					stones += wandergain;
					Message();
			}
		
		}else{
			message="I scout out the area, but find nothing of use.<br />"
			Message();
		};
	};
	// document.getElementById("WSReq").innerHTML = WSReq;	
};

function Forage(number){
	if(forageTimer <= 10) {	
		forageTimer += 15;
		food = food + number;
		let energy = document.getElementById("energy")
		energy.value -= 8;
		document.getElementById("food").innerHTML = food

		} else {
		message = "I should wait a little bit longer..<br />";
		Message();
	}
}


//--FUNCS--

//prettify
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


//save-load buttons navbar
$(document).ready(function(){
    $("#NavSaveButton").click(function(){
		//$(this).hide();
		if (confirm('Are you sure you want to save? This will overwrite any existing save.')) {
			save();
			message =  "<h1 style=\"color:red;\">Saved!</h1>";
			Message();
		} else {
			message = "Saving canceled. <br />"
			Message();
		}
       
    });

    $("#NavLoadButton").click(function(){
		//$(this).hide();
		if (confirm('Are you sure you want to load? This will overwrite your current game.')) {
			load();
			message =  "<h1 style=\"color:red;\">Game Loaded!</h1>";
			Message();
		} else {
			message = "Loading save file canceled. <br />"
			Message();
		}
	});
});



//Monster Breeds
var MonsterBreeds = [
	'Orcs',
	'Goblins',
]

//random monster names

var MonsterNames = { 
	Orcs : {
		FirstNames : ['Abzag', 'Abzrolg', 'Abzug', 'Agganor', 'Aghurz'],
		LastNames : ['Abimfash', 'Adkul', 'Adlugbuk', 'Agazu', 'Agdesh', 'Aglash']
	},
	Goblins : {
		FirstNames : ['Gobber', 'Goober', 'Goobler'],
		LastNames : ['Guburu', 'Gulungu', 'Gururu']
	}

};


//startfight

function startFight(){
	if(player.hp < 25){
		message = "I need to recover more HP! <br />"
		Message()
	}
	else{
	
	var maxhp = randomIntFromInterval(150,200);
	var breedrng = randomIntFromInterval(0,MonsterBreeds.length-1)
	if(breedrng == 0){
		var breed = MonsterBreeds[0];
		var randomFirstName = MonsterNames[breed].FirstNames[randomIntFromInterval(0,MonsterNames[breed].FirstNames.length-1)];
		var randomLastName = MonsterNames[breed].LastNames[randomIntFromInterval(0,MonsterNames[breed].LastNames.length-1)]; 
		
		monster = {
			hp : maxhp,
			maxhp : maxhp,
			level : 1,
			drops : {soulpower : player.spiritstats.ki * 2}, //add drops from lootrtable
			atkrating : randomIntFromInterval(5,15),
			armor : 0,
			name : randomFirstName + " " +  randomLastName,
			breed : breed
			};
	
		document.getElementById("monster.maxhp").innerHTML = monster.maxhp;
		document.getElementById("monster.hp").innerHTML = monster.hp;
		document.getElementById("monster.level").innerHTML = monster.level;
		document.getElementById("monster.breed").innerHTML = monster.breed;
		document.getElementById("monster.name").innerHTML = monster.name;
		}
		else if(breedrng == 1){
			var breed = MonsterBreeds[1];
			var randomFirstName = MonsterNames[breed].FirstNames[randomIntFromInterval(0,MonsterNames[breed].FirstNames.length-1)];
			var randomLastName = MonsterNames[breed].LastNames[randomIntFromInterval(0,MonsterNames[breed].LastNames.length-1)]; 
			
			monster = {
				hp : maxhp,
				maxhp : maxhp,
				level : 1,
				drops : {soulpower : player.spiritstats.ki * 2}, //add drops from lootrtable
				atkrating : randomIntFromInterval(5,15),
				armor : 0,
				name : randomFirstName + " " +  randomLastName,
				breed : breed
				};
		
			document.getElementById("monster.maxhp").innerHTML = monster.maxhp;
			document.getElementById("monster.hp").innerHTML = monster.hp;
			document.getElementById("monster.level").innerHTML = monster.level;
			document.getElementById("monster.breed").innerHTML = monster.breed;
			document.getElementById("monster.name").innerHTML = monster.name;
			}
	}

	
	



};

//get player total attackrate
function GetPlayerAtkRt() {
	var atk1 = Number(loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0].weaponAtk)
	var totalAtk = atk1 + Math.floor(player.bodystats.strength * 0.2) + (player.spiritstats.ki * 0.1) + (player.cLevel * 10 + (Math.pow(player.cRank+1, 4) - 1));
	player.atkrating = totalAtk;
	document.getElementById("player.atkrating").innerHTML = player.atkrating;
};	


//Weapon
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function TimerStart(number,actionID) {
    var Minutes = 60 * (number),
        display = document.querySelector(actionID);
    startTimer(Minutes, display);
};

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}



function ShowCraftPage() {
	$("#GUI_MainPage").hide();
	$("#GUI_CraftPage").show();
	$('#GUI_CombatPage').hide();
	$('#GUI_WorldPage').hide();
	$("#GUI_KnowledgePage").hide();
	
};

function ShowCombatPage() {
	$(document).ready(function(){
		$('#GUI_CraftPage').hide();
		$("#GUI_MainPage").hide();
		$("#GUI_CombatPage").show();
		$("#GUI_CombatPage").removeAttr("style");
		$('#GUI_WorldPage').hide();
		$("#GUI_KnowledgePage").hide();
		
	});
};		

function ShowMainPage() {
	$('#GUI_CraftPage').hide();
	$('#GUI_MainPage').show();
	$('#GUI_CombatPage').hide();	
	$('#GUI_WorldPage').hide();
	$("#GUI_KnowledgePage").hide();		
};

function ShowWorldPage() {
	$('#GUI_WorldPage').show();
	$('#GUI_CombatPage').hide();
	$('#GUI_CraftPage').hide();
	$("#GUI_MainPage").hide();
	$("#GUI_KnowledgePage").hide();

  
;}

function ShowKnowledgePage() {
	$('#GUI_WorldPage').hide();
	$('#GUI_CombatPage').hide();
	$('#GUI_CraftPage').hide();
	$("#GUI_MainPage").hide();
	$("#GUI_KnowledgePage").show();
;}


//---TOOLTIPS---
$(document).ready(function(){
	$('.tooltipster').tooltipster({
		theme: 'tooltipster-borderless',
		side: 'right'
	});
	

});

$(document).ready(function () {
    $('#navbar-nav a').on("click", function () {
        $('#navbar-nav a').find("a").removeClass('active');
        $(this).addClass('active');
    });
});

//--Message stuff--

function Message(){
	document.getElementById("myLog").innerHTML+=message;
	document.getElementById("craftLog").innerHTML+=message;
	document.getElementById("combatLog").innerHTML+=message;
	document.getElementById("knowledgemsgbox").innerHTML+=message;
	MessageScroll();
//	CheckMessage();
}

function MessageScroll() {
	var objDiv = document.getElementById("messageboxID");
	objDiv.scrollTop = objDiv.scrollHeight;
    document.getElementById('craftLog').scrollTop = document.getElementById('craftLog').scrollHeight;
    document.getElementById('combatLog').scrollTop = document.getElementById('combatLog').scrollHeight;
//    
//    $(".autoscroll").scrollTop($(".autoscroll")[0].scrollHeight);
//    $(".autoscroll2").scrollTop($(".autoscroll")[1].scrollHeight);
    
}

// function CheckMessage(); {
	// document.getElementById("wandergain").innerHTML = wandergain;
// }



//
//{
//            focus : player.focus,
//            hp : player.hp
//            }, 

//--SAVING--
function saveitems(){
	var saveitems1 = loot.branchs.equipment.branchs.inventory.items;
	var saveitems2 = loot.branchs.equipment.branchs.inventory.branchs.equipped.items;
	localStorage.setItem("saveitems1",JSON.stringify(saveitems1)); 
	localStorage.setItem("saveitems2",JSON.stringify(saveitems2)); 
};

function loaditems(){
	loot.branchs.equipment.branchs.inventory.items = JSON.parse(localStorage.getItem("saveitems1"));
	loot.branchs.equipment.branchs.inventory.branchs.equipped.items = JSON.parse(localStorage.getItem("saveitems2"));
};


function save(){
    saveitems();
    
	var save = {
        player : player,
		intelligence: intelligence,
		braincells: braincells,
		braincellNextCost: braincellNextCost,
		braincellCost: braincellCost,
		food: food,
		stones: stones,
		WSReq: WSReq,
		wood: wood,
		upgradeCost: upgradeCost
//        loot : loot
	}
	localStorage.setItem("save",JSON.stringify(save)); 
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save")); 
	if (typeof savegame.intelligence !== "undefined") intelligence = savegame.intelligence; 
	if (typeof savegame.braincells !== "undefined") braincells = savegame.braincells;
	if (typeof savegame.braincellNextCost !== "undefined") braincellNextCost = savegame.braincellNextCost;
	if (typeof savegame.braincellCost !== "undefined") braincellCost = savegame.braincellCost;
	if (typeof savegame.player.focus !== "undefined") player.focus = savegame.player.focus; 	
	if (typeof savegame.stones !== "undefined") stones = savegame.stones;
	if (typeof savegame.wood !== "undefined") wood = savegame.wood;
	if (typeof savegame.WSReq !== "undefined") WSReq = savegame.WSReq;
	if (typeof savegame.food !== "undefined") food = savegame.food;
	if (typeof savegame.player !== "undefined") player = savegame.player;
    if (typeof savegame.upgradeCost !== "undefined") upgradeCost = savegame.upgradeCost;
// 	if (typeof savegame.loot !== "undefined") loot = savegame.loot;
    loaditems();

	
	
	
	document.getElementById("intelligence").innerHTML = Number(intelligence).toFixed(2);
	document.getElementById("braincells").innerHTML = Number(braincells).toFixed(2);
	document.getElementById("braincellCost").innerHTML = Math.floor(10 * Math.pow(1.1,braincells));
	document.getElementById("player.focus").innerHTML = Number(player.focus).toFixed(2);
	document.getElementById("food").innerHTML = Number(food).toFixed(2);
	document.getElementById("stones").innerHTML = Number(stones).toFixed(2);
	document.getElementsByClassName("wood").innerHTML = Number(wood).toFixed(2);

}


//CHEATS

function cheat(){
	player.bodystats.strength = 500;
	wood = 5000;
	stones = 5000;
};
	
//--LoopChecks--

function intpscheck() {
	document.getElementById("intps").innerHTML = intps + (braincells*0.25);
}

//--KnowledgeUnlock Checks--
function KnowledgeCheck(){
	if(player.primitivetools == 1){
		$("#PrimitiveToolsUnlocked").show();
		$("#PrimitiveToolsUnlocked2").show();
		$("#PrimitiveTools").attr("disabled", true);
	}
	else{
		$("#PrimitiveToolsUnlocked").hide();
		$("#PrimitiveToolsUnlocked2").hide();
	}
};


// --ActionChecks--	
	
function ActionCheck() {
	if (braincells < 5) {
		$("#Look").hide();
	}
	else {
		$("#Look").show();
	}
	if (braincells < 5) {
		$(".focusdesc").hide();
	}
	else {
		$(".focusdesc").show();
	}
	if (braincells < 10) {
		$("#WanderUnlocked").hide();
	}
	else {
		
		$("#WanderUnlocked").show();
	}
	if (player.focus > 2 && braincells > 9) {
       
		$("#ForageUnlocked").show();
	}
	else {
		$("#ForageUnlocked").hide();
	}
	if (player.spiritstats.ki > 1) {
		// document.getElementById("CraftPageUnlocked").classList.add('nav-item nav-link');
		$(document).ready(function(){	
			$("#CraftPageUnlocked").show();
			$("#CombatPageUnlocked").show();
		});
	}
	else {
		// document.getElementById("CraftPageUnlocked").classList.add('nav-item nav-link disabled');
		$(document).ready(function(){
			$("#CraftPageUnlocked").hide();
			$("#CombatPageUnlocked").hide();
		});
	}
	if (player.researchbench > 1) {
		// document.getElementById("CraftPageUnlocked").classList.add('nav-item nav-link');
		$(document).ready(function(){	
			$("#KnowledgePageTab").show();
		});
	}
	else {
		// document.getElementById("CraftPageUnlocked").classList.add('nav-item nav-link disabled');
		$(document).ready(function(){
			$("#KnowledgePageTab").hide();
		});
	}
	if (player.cRank > 0) {
		// document.getElementById("CraftPageUnlocked").classList.add('nav-item nav-link');
		$(document).ready(function(){	
			$("#WorldPageTab").show();
		});
	}
	else {
		// document.getElementById("CraftPageUnlocked").classList.add('nav-item nav-link disabled');
		$(document).ready(function(){
			$("#WorldPageTab").hide();
		});
	}		
};	

function WSReqCheck() {
	if (WSReq == 0){
		$('#woodandstonesreq').hide();
	}
	else {
		$('#woodandstonesreq').show();
	}
};

function StatCheck() {
	if(intelligence < braincellCost) {		//Disable buy braincell button
            document.getElementById('buybc').disabled = true;
        } else {
            document.getElementById('buybc').disabled = false;
		};
	
		//player ki check
	player.spiritstats.ki = Math.floor((player.bodystats.strength + player.bodystats.strength + player.bodystats.intelligence)/10) + player.hiddenstats.SPcondensed;

	if(player.spiritstats.ki > 0){
		if(isNaN(player.spiritstats.soulpower) == true ){
			player.spiritstats.soulpower = 0.05
		}
		
		if(player.spiritstats.soulpower < player.spiritstats.ki * 50)
		player.spiritstats.soulpower = player.spiritstats.soulpower + Number(player.spiritstats.ki) * 0.05;
		
	}

	//Add STR to maxhp
	player.maxhp = 300 + prettify(player.bodystats.strength * 1.05)



};

function InvCheck() {
	document.getElementById("food").innerHTML = food;
	let energy = document.getElementById("energy");
	energynum = energy.value;
    document.getElementById("energynum").innerHTML = energynum;
	document.getElementsByClassName("wood")[0].innerHTML = Number(wood).toFixed(2);
	document.getElementById("stones").innerHTML = Number(stones).toFixed(2);
	document.getElementById("player.atkrating").innerHTML = Number(player.atkrating).toFixed(0); 
	document.getElementById("player.hp").innerHTML = Number(player.hp).toFixed(1);
	document.getElementById("player.maxhp").innerHTML = Number(player.maxhp).toFixed(1);
	document.getElementById("food").innerHTML = food;
	document.getElementById("HUD_inv_1").innerHTML = HUD_inv_1;
	document.getElementById("player.atkrating").innerHTML = player.atkrating;
	document.getElementById("player.mHand.name").innerHTML = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0].name;
	document.getElementById("player.mHand.weaponAtk").innerHTML = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0].weaponAtk;
	document.getElementsByClassName("stones")[0].innerHTML = Number(stones).toFixed(2);
    document.getElementsByClassName("player.maxint")[0].innerHTML = Number(player.maxint).toFixed(2);
    document.getElementsByClassName("focusCost")[0].innerHTML = upgradeCost.nextFocus;
	document.getElementById("player.storagespace").innerHTML = Number(player.storagespace).toFixed(2);
	document.getElementById("player.storagemax").innerHTML = Number(player.storagemax).toFixed(2);
	document.getElementById("InvResearchbench").innerHTML = player.researchbench;
	document.getElementById("BreakthroughChance").innerHTML = (100 - Math.pow(1.52,player.cLevel)).toFixed(1);

	
};
// --BATTLE--

function RestPlayer(){
	if(player.hp < player.maxhp){
		player.hp += 50;
		if(player.hp > player.maxhp){
			player.hp = player.maxhp;
				}
	}
	else{
		message = "I can't rest more than this.. <br />";
		Message();
	};

}


function attackMonster() {
	if(player.hp < 25){
		message = "I think I might need some more health to fight.. <br />"
		Message();
	}
	else{

		
		if(monster.hp > 0){
			var playermindamage = Math.floor( parseInt(player.atkrating) + 1.2 * player.cLevel - parseInt(player.armor) ) * 0.8
			var playermaxdamage = Math.floor( parseInt(player.atkrating) + 1.2 * player.cLevel - parseInt(player.armor) ) * 1.2
			var monstermaxdamage = Math.floor(parseInt(monster.atkrating) + 1.2 * monster.level - parseInt(player.armor)) * 1.2
			var monstermindamage = Math.floor(parseInt(monster.atkrating) + 1.2 * monster.level - parseInt(player.armor)) * 0.8
			var playerdamage = randomIntFromInterval(playermindamage,playermaxdamage)
			var monsterdamage = randomIntFromInterval(monstermindamage,monstermaxdamage)
			
			message = player.name + " attacked " + monster.name + " for " + playerdamage + " damage! <br />";
			Message();
			message = monster.name + " attacked " + player.name + " for " + monsterdamage + " damage! <br />";
			Message();
			
			player.hp -= monsterdamage;
			monster.hp -= playerdamage;
			
			document.getElementById("monster.hp").innerHTML = monster.hp
			if(monster.hp <= 0) {
				player.spiritstats.soulpower += monster.drops.soulpower
				message = "You killed the " + monster.name + "<br />" + "You got " + monster.drops.soulpower + "soulpower! </br>"
				Message();
				startFight();
				message = "You found a new monster: " + monster.name + "<br />"
				Message();
			}
		}
		else if(monster.hp <= 0){
				player.spiritstats.soulpower += monster.drops.soulpower
				message = "You killed the " + monster.name + "<br />" + "You got " + monster.drops.soulpower + "soulpower! </br>"
				Message();
				startFight();
				message = "You found a new monster: " + monster.name + "<br />"
				Message();
			};
		
	};
};



// Monster Function
// var monsters = function(attack, health){
	// this.health = health;
	// this.attack = attack;
// };


//LOOP




window.setInterval(function(){
	

	player.storagespace = wood + player.woodenplanks + stones + food;
	Think(braincells*0.25);
	StatCheck();
	InvCheck();
	ActionCheck();
	intpscheck();
	WSReqCheck();
	ERegenPass(1);
	if(forageTimer > 1){forageTimer -= 1;}
//	ItemNameCheck();
	rngcolorgen();
	InvNames();
	GetPlayerAtkRt();
	GetPlayerBodyStats();
	GetPlayerSpiritStats();
	getLevelRank();
	KnowledgeCheck();
	if(check.MeditateStop == 0){Meditate()}

}, 250);