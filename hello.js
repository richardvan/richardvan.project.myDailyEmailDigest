

// console.log ('\n---TESTING NEW FUNCTION ---');
// console.log ("   _todo_ : select random line start");


// /////////////////////////////////////////////////////////////
// //  [daily dog breed related]

// fs = require('fs');
// var CONST_file_dog_breeds_toy = "dog_breeds.txt";

// //  note this will be async (aka blocking)
// function getRandomLine(filename){
// 	var myArray = fs.readFileSync(filename).toString().split("\n");
	
// 	console.log ("    [array size]:" + myArray.length);	
// 	//for(i in myArray) {
// 	//	console.log(myArray[i]);
// 	//}
// 	var randomLine = myArray[Math.floor(Math.random() * myArray.length)];
// 	var randomLineArray = randomLine.toString().split("\t");
	
// 	//_todo_ construct the html link for email sender"
	
// 	console.log ("    [line.group]:" + randomLineArray[0]);	
// 	console.log ("    [line.breed]:" + randomLineArray[1]);	
// 	console.log ("    [line.link]:" + randomLineArray[2]);	
// }

// getRandomLine(CONST_file_dog_breeds_toy);


// //  [end daily dog breed related]
// /////////////////////////////////////////////////////////////

// console.log ("   _todo_ : select random line end");


// console.log ('\n---END TESTING NEW FUNCTION ---\n');



// console.log ('\n---TESTING NEW FUNCTION ---');
// console.log ("   _todo_ : select random gre word from file now");


// /////////////////////////////////////////////////////////////
// //  [GRE vocab from file elated]

// fs = require('fs');
// var CONST_file_gre_vocab_words = "gre_vocab_words_source2.txt";

// //  note this will be async (aka blocking)
// function getRandomLineFromGreList(filename){
// 	var myArray = fs.readFileSync(filename).toString().split("\n");
	
// 	console.log ("    [array size]:" + myArray.length);	
// 	//for(i in myArray) {
// 	//	console.log(myArray[i]);
// 	//}
// 	var randomLine = myArray[Math.floor(Math.random() * myArray.length)];
// 	var randomLineArray = randomLine.toString().split(" - ");
	
// 	//_todo_ construct the html link for email sender"
	
// 	console.log ("    [line.word]:" + randomLineArray[0]);	
// 	console.log ("    [line.definition]:" + randomLineArray[1]);	
// }

// getRandomLineFromGreList(CONST_file_gre_vocab_words);


// //  [GRE vocab from file related]
// /////////////////////////////////////////////////////////////

// console.log ("   _todo_ : select random line end");


// console.log ('\n---END TESTING NEW FUNCTION ---\n');

console.log ('\n---TESTING NEW FUNCTION ---');
console.log ("   _todo_ : select random gre word from file now");


/////////////////////////////////////////////////////////////
//  [GRE vocab from file elated]

fs = require('fs');
var CONST_file_emotions = "emotions_list.txt";

//  note this will be async (aka blocking)
function getRandomLineFromGreList(filename){
	var myArray = fs.readFileSync(filename).toString().split("\n");
	
	console.log ("    [array size]:" + myArray.length);	
	//for(i in myArray) {
	//	console.log(myArray[i]);
	//}
	var randomLine = myArray[Math.floor(Math.random() * myArray.length)];
	var randomLineArray = randomLine.toString().split(" - ");
	
	//_todo_ construct the html link for email sender"
	
	console.log ("    [line.word]:" + randomLineArray[0]);	
	console.log ("    [line.definition]:" + randomLineArray[1]);	
}

getRandomLineFromGreList(CONST_file_emotions);


//  [GRE vocab from file related]
/////////////////////////////////////////////////////////////

console.log ("   _todo_ : select random line end");


console.log ('\n---END TESTING NEW FUNCTION ---\n');