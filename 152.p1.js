/********************************************************
JavaScript
*********************************************************/

rc = {};	//: A simple namespace so that we don't collide with window
					//: (This is not required but can help you avoid errors)

//******************************************************
// EVENT HANDLERS
//******************************************************

rc.amount = function()	{
	let amt = $("#hun").value,
			cost;

	switch (amt) {
		case "Gargantuan":
			cost = "$250";
			break;
		case "Ravenous":
			cost = "$150";
			break;
		case "Hungry":
			cost = "$50";
			break;
		case "Treat":
			cost = "$25";
			break;
		case "Maybe":
			cost = "$10";
			break;
		default:
			cost = "$500";
	}

	$("#howMuch").textContent = cost;
}



//******************************************************
//--- SETUP EVENT HANDLERS
//******************************************************

$("#cost").addEventListener("click", rc.amount);
