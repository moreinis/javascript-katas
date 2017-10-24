// initialize variables
var hands=["rock","paper","scissors","stop"];
do {
	cpuNum=Math.round(Math.random()*2);
	userNum=getUserHand(hands):
	winner=evaluateHand(hands,cpuNum,userNum);
	alert("You picked "+hands[userNum]+". CPU picks "+hands[cpuNum]+". Therefore, "+winner+" wins!"
while (userHand!="stop");


function getUserHand(hands) {
	goodHand=false;
	do {
		userHand=prompt("rock, paper, scissors, GO!");
		for(index=0;index<hands.length;index++){
			if (userHand==hands[index]) {
				goodHand=true;
				userNum=index;
			}
		}
		while (goodHand==false);
	}
	return userNum;
}

function evaluateHand(hands,userNum,cpuNum,){
	var winner="cpu";
	if (userHand==cpuHand){
		alert("Draw!");
		winner="none";
	}
	else if (hands[userNum]=="stop"){
		alert("Thank you for playing!");
		winner="none";
	}
	else switch (userHand+cpuHand) {
			case 01:{winner="human";}
				break;
			case 02:
				{
					winner="cpu";
				}
				break;
			case 10:
				{
					winner="cpu";
				}
				break;
			case 12:
				{
					winner="human";
				}
				break;
			case 20:
				{
					winner="cpu";
				}
				break;
			case 21:
				{
					winner="human";
				}
				break;
		}
	return winner;
}