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
var WanderUnlocked = 0;
var ForageUnlocked = 0;

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

//itemcategories
var itemcat = ["Swords", "Armor"];

var itemDB = {
	itemID : [],
};

var player = {
	name : "Gucci",
	hp : 300,
	maxhp : 300,
	gold : 0,
	xp : 0,
	level : 1,
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
    focus : 0
	// get atkrating () {
    // return  this.inventory.weapons.atkrating;
  // }
};



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
        document.getElementById("intelligence").innerHTML = intelligence; 
    };
};

function buyBraincell(){
	
	braincellCost = Math.floor(10 * Math.pow(1.1,braincells)); //works out cost of braincell
	if(intelligence >= braincellCost){
		braincells = braincells + 1;
		intelligence = intelligence - braincellCost;
		document.getElementById("braincells").innerHTML = braincells;
		document.getElementById("intelligence").innerHTML = intelligence;
	};
	braincellNextCost = Math.floor(10 * Math.pow(1.1,braincells));
	document.getElementById("braincellCost").innerHTML = braincellNextCost;
	StatCheck()

};




function LookAround(number){
    if(intelligence < 50){
      //do nothing  
        
    }
    else {
        intelligence -= focusCost
        player.focus = player.focus + number
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

function ChopWood() {
	// let energy = document.getElementById("")
	var btn=document.querySelector("button");
	TimerStart(1,"#ChopTime")
	btn.setAttribute("disabled", "");
}

 function makeMoney() {      
        $("#makeMoney").attr('disabled', 'disabled');
        fillAgain();
    }

function fillAgain() {
	setTimeout(function ()
	{
		if($("#divfillmeUp").find('div').length <= 10)
		{
			$("#divfillmeUp").append("<div style='background-color: red; width: 10%; height: 1%;float: left'></div>");
			fillAgain();
		}
	},2000)
}

	
function ERegenPass(number){
	if(food >= 1 && energynum < 100){
		
			let energy = document.getElementById("energy");
			energy.value += number;
			food = food - 0.25;
			document.getElementById("food").innerHTML = food;
		}
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
			WSReq = 1;
			if(rng2 > 4) {
				wandergain = randomIntFromInterval(0,10);
				wood += wandergain;
				var msg1 = "You gained"
				var msg2 = "wood! <br />"
				message = msg1 + " " + wandergain + " " + msg2
				Message();	
				} else { 
					wandergain = randomIntFromInterval(0,10);
					var msg1 = "You gained"
					var msg2 = "stones!<br />"				
					message = msg1 + " " + wandergain + " " + msg2
					stones += wandergain;
					Message();
			}
		}
	}
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

//save-load buttons navbar
$(document).ready(function(){
    $("#NavSaveButton").click(function(){
        //$(this).hide();
        save();
        message =  "<h1 style=\"color:red;\">Saved!</h1>";
        Message();
    });

    $("#NavLoadButton").click(function(){
        //$(this).hide();
        load();
        message =  "<h1 style=\"color:red;\">Game Loaded!</h1>";
        Message();
    });
});






//startfight

function startFight(){
	var maxhp = randomIntFromInterval(150,200)
	monster = {
		hp : maxhp,
		maxhp : maxhp,
		level : 1,
		drops : 0, //add drops from lootrtable
		atkrating : randomIntFromInterval(5,15),
		armor : 0,
		name : "Test Monster",
		breed : "Orc"
		};
	document.getElementById("monster.maxhp").innerHTML = monster.maxhp;
	document.getElementById("monster.hp").innerHTML = monster.hp;
	document.getElementById("monster.level").innerHTML = monster.level;
	document.getElementById("monster.breed").innerHTML = monster.breed;
	document.getElementById("monster.name").innerHTML = monster.name;

	
};

//get player total attackrate
function GetPlayerAtkRt() {
	var atk1 = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0].weaponAtk
	var totalAtk = atk1;
	player.atkrating = totalAtk	
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
}

function ShowCombatPage() {
	$('#GUI_CraftPage').hide();
	$("#GUI_MainPage").hide();
	$("#GUI_CombatPage").show();
}		

function ShowMainPage() {
	$('#GUI_CraftPage').hide();
	$('#GUI_MainPage').show();
	$('#GUI_CombatPage').hide();	
}
// function GUI_Switch() {
	// if (GUI.MainScreen == MainPage ){
		// $('#GUI_MainPage').show();
	// }
	// else if (GUI.MainScreen == CraftPage ){
		// $('#GUI_MainPage').hide();
		// $('#GUI_CraftPage').show();

	// }
	// else {
		// $('#GUI_MainPage').hide();
	// }
// };


//--Message stuff--


function Message(){
	document.getElementById("myLog").innerHTML+=message;
	document.getElementById("craftLog").innerHTML+=message;
	document.getElementById("combatLog").innerHTML+=message;
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


//--SAVING--
function save(){
	var save = {
        player : {
            focus : player.focus,
            hp : player.hp
            }, 
		intelligence: intelligence,
		braincells: braincells,
		braincellNextCost: braincellNextCost,
		braincellCost: braincellCost,
		food: food,
		stones: stones,
		WSReq: WSReq,
		wood: wood
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
	
 	
 	

	
	
	
	document.getElementById("intelligence").innerHTML = intelligence;
	document.getElementById("braincells").innerHTML = braincells;
	document.getElementById("braincellCost").innerHTML = Math.floor(10 * Math.pow(1.1,braincells));
	document.getElementById("player.focus").innerHTML = player.focus;
	document.getElementById("food").innerHTML = food;
	document.getElementById("stones").innerHTML = stones;
	document.getElementsByClassName("wood").innerHTML = wood;

}
	
//--LoopChecks--

function intpscheck() {
	document.getElementById("intps").innerHTML = intps + (braincells*0.25);
}



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
		WanderUnlocked = 1
		$("#WanderUnlocked").show();
	}
	if (player.focus > 39 && braincells > 9) {
		$("#ForageUnlocked").show();
	}
	else {
		ForageUnlocked = 1
		$("#ForageUnlocked").hide();
	}
	if (player.focus > 50 && braincells > 25) {
		// document.getElementById("CraftPageUnlocked").classList.add('nav-item nav-link');
		$("#CraftPageUnlocked").show();
	}
	else {
		// document.getElementById("CraftPageUnlocked").classList.add('nav-item nav-link disabled');
		$("#CraftPageUnlocked").hide();
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
	if(intelligence < braincellCost) {
            document.getElementById('buybc').disabled = true;
        } else {
            document.getElementById('buybc').disabled = false;
        };
};

function InvCheck() {
	document.getElementById("food").innerHTML = food;
	let energy = document.getElementById("energy");
	energynum = energy.value;
    document.getElementById("energynum").innerHTML = energynum;
	document.getElementsByClassName("wood")[0].innerHTML = wood;
	document.getElementById("stones").innerHTML = stones;
	document.getElementById("player.atkrating").innerHTML = player.atkrating; 
	document.getElementById("player.hp").innerHTML = player.hp;
	document.getElementById("player.maxhp").innerHTML = player.maxhp;
	document.getElementById("HUD_inv_1").innerHTML = HUD_inv_1;
	document.getElementById("player.atkrating").innerHTML = player.atkrating;
	document.getElementById("player.mHand.name").innerHTML = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0].name;
	document.getElementById("player.mHand.weaponAtk").innerHTML = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0].weaponAtk;
	document.getElementsByClassName("stones")[0].innerHTML = stones;
    document.getElementsByClassName("player.maxint")[0].innerHTML = player.maxint;
	
	
	
};
// --BATTLE--

function attackMonster() {
	if(monster.hp > 0){
		var playermindamage = Math.floor( parseInt(player.atkrating) + 1.2 * player.level - parseInt(player.armor) ) * 0.8
		var playermaxdamage = Math.floor( parseInt(player.atkrating) + 1.2 * player.level - parseInt(player.armor) ) * 1.2
		var monstermaxdamage = Math.floor(parseInt(monster.atkrating) + 1.2 * monster.level - parseInt(player.armor)) * 1.2
		var monstermindamage = Math.floor(parseInt(monster.atkrating) + 1.2 * monster.level - parseInt(player.armor)) * 0.8
		// message = playerdamage + "testing </br>"
		// Message();
		var playerdamage = randomIntFromInterval(playermindamage,playermaxdamage)
		var monsterdamage = randomIntFromInterval(monstermindamage,monstermaxdamage)
		
		message = player.name + " attacked " + monster.name + " for " + playerdamage + " damage! <br />";
		Message ();
		message = monster.name + " attacked " + player.name + " for " + monsterdamage + " damage! <br />";
		Message();
		
		player.hp -= monsterdamage;
		monster.hp -= playerdamage;
		
		document.getElementById("monster.hp").innerHTML = monster.hp
		if(monster.hp < 0){
			message = "You killed the " + monster.name + "<br />"
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
	
	Think(braincells*0.25);
	StatCheck();
	InvCheck();
	ActionCheck();
	intpscheck();
	WSReqCheck();
	ERegenPass(1);
	forageTimer -= 1;
//	ItemNameCheck();
	rngcolorgen();
	InvNames();
	GetPlayerAtkRt();

	
}, 1000);
