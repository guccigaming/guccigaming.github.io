//Player Function
var players = function(attack, health){
	this.health = health;
	this.attack = attack;
};

//Make Player Here
var player = new players(50, 1000);

//Monster Function
var monsters = function(attack, health){
	this.health = health;
	this.attack = attack;
};

//Make Monsters Here
var dragon = new monsters(100, 200);
var goblin = new monsters(25, 500);
var wizard = new monsters(200, 50);

//Make String Names Here
var names;

//Make randomnumber Here
var randomnumber = Math.floor(Math.random(10)*10);

//Make selectedmonster Here
var selectedmonster;
if (randomnumber >= 0 && randomnumber < 3){
	selectedmonster = dragon;
	names = "dragon";
}
else if (randomnumber > 3 && randomnumber < 6){
	selectedmonster = goblin;
	names = "goblin";
}
else if (randomnumber > 6){
	selectedmonster = wizard;
	names = "wizard";
}
//Battle Script
var battle = 1;
var monsterdead = 0;
var playerdead = 0;
//player goes first, playerturn = 1
var playerturn = 1;
var monsterturn = 0;
while (battle == 1){
//Player's Turn
while (playerturn == 1){
	//Write Player Attack Script	
	selectedmonster.health = selectedmonster.health - Math.ceil(Math.random(player.attack)*10);
	console.log(names + "'s Health is now " + selectedmonster.health);
	playerturn = 0;
	monsterturn = 1;
}
//Monster's Turn
while (monsterturn == 1){
	//Write Monster Attack Script
	player.health = player.health - Math.ceil(Math.random(selectedmonster.attack)*10);
	console.log("Player's Health is now " + player.health);
	playerturn = 1;
	monsterturn = 0;
}
//When Monster Dies
if (selectedmonster.health < 0){
	monsterdead = 1;
	battle = 0;
}
//When Player Dies
if (player.health < 0){
	playerdead = 1;
	battle = 0;
}
}