
do{
var hand = prompt("Enter rock, paper, or scissors (stop to end)");
	if(hand == "rock"){
		alert("Paper, I win");
	}
	else if(hand == "paper"){
		alert("Scissors, I win");
	}
	else if(hand == "scissors"){
		alert("Rock, I win");
	}
	else if(hand == "stop"){// prevent universal guess again
	}
	else{
		alert("Guess again");
	}
}
while(hand != "stop");
	


