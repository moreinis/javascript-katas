/* 1.2 - While Loop */

// Conditional where flavor = chocolate or vanilla
// Prompt for flavor, then output "here's your" + flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"
// Continue while flavor not equal to "coffee"

flavor = prompt("What flavor scoop?");
if (flavor == "chocolate " || flavor == "vanilla"){
	alert("Here's your"+flavor);
}
else if (flavor == "strawbery") {
	alert("All out of "+flavor);
}
else {
	alert("No such flavor ");
}