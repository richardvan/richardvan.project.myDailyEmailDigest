fs = require('fs');

var CONST_file_dog_breeds_herding = "dog_breeds_herding.txt";
var CONST_file_dog_breeds_toy = "dog_breeds_toy.txt";

console.log ('\n---TESTING NEW FUNCTION ---');
console.log ("   goal: select random line and email out link for daily dog breed to learn\n");


console.log ("   _todo_ : select random line start");

//note this will be async (aka blocking)
function getRandomLine(filename){

	
	var myArray = fs.readFileSync(filename).toString().split("\n");
	
	console.log ("    [array size]:" + myArray.length);	
	//for(i in myArray) {
	//	console.log(myArray[i]);
	//}
	var randomLine = myArray[Math.floor(Math.random() * myArray.length)];
	var randomLineArray = randomLine.toString().split("\t");
	
	//_todo_ construct the html link for email sender"
	
	console.log ("    [line.title]:" + randomLineArray[0]);	
	console.log ("    [line.link]:" + randomLineArray[1]);	
}

getRandomLine(CONST_file_dog_breeds_toy);

console.log ("   _todo_ : select random line end");