// function InvNames(){
	// var text = "";
	// var i;
	// for (i = 0; i < loot.branchs.equipment.branchs.inventory.items.length; i++) {
			// text += "Slot " + (i + 1) + ": " + loot.branchs.equipment.branchs.inventory.items[i].name + "<br />";
	// }
	// document.getElementById("HUD_inv_1").innerHTML = text;
// };

	
function equipItem() {
	 var invSlotID = document.getElementById("id")
	 var i;
	 for (i = 0; i <
	 if(invslotID = invSlotID1){
		 
		
		var itemEqpSlotTemp = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0];
		if(itemEqpSlotTemp.itemEqpSlot = "mHand"){ 
			var x = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0] //save mHand item temporarily
			loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0] = 	loot.branchs.equipment.branchs.inventory.items[0];		//item in mHand slot becomes invslotid1
			loot.branchs.equipment.branchs.inventory.items[0] = x// item slot 1 becomes mHand item
			
			};
	 };
	 // else if(){message = 'Equipped loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0].name'}; //add more  checks with for loops, remove the if else
		
//	var player.inventory = loot.branchs.equipment.branchs.inventory;

	// var itemtemp = loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items[0] //save equipped item temp
	// loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand.items.splice(0, 1) //remove equipped item
	
	// loot.branchs.equipment.branchs.inventory.branchs.equipped.branchs.mHand				//add item to equipslotx
		
};
