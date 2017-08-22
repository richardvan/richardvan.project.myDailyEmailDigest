// initially from http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial

function sayHello() {
    console.log('Hello 1');
    console.log('Hello 2');
    console.log('Hello 3');
    console.log('Hello 4');
}


var myGREwordDictionary = {
	// list from https://www.graduateshotline.com/gre-word-list.html
	'introspection' 	:	"examining one's own thoughts and feelings",
	'philanthropist'	:	"one who loves mankind",
	'antidote' 			:	"medicine used against a poison or a disease",
	'strive'			:   "to make great efforts, to struggle",
	'ambidextrous'		:   "able to use the left hand or the right equally well",
	'retrospective'		:   "Looking back on past",
	'precursors'		:   "a person or thing that precedes, as in a process or job",
	'introvert'			:   "one who turns towards himself",
	'gerontocracy'		:   "government ruled by old people",
	'ambiguous'			:   "doubtful; uncertain",
	'braggart'			:   "boastful",
	'aggravate'			:   "make worse; irritate",
	'entice'			:   "attract, lure",
	'alleviate'			:   "make (pain) easier to bear",
	'adorn'				:   "add beauty; decorate",
	'equilibrium'		:   "state of being balanced",
	'abhor'				:   "to hate; to detest",
	'connote'			:   "Suggest or imply in addition to the precise, literal meaning",
	'endeavor'			:   "to make an effort, to try very hard",
	'agile'				:   "active; quick-moving",
	'renovate'			:   "restore something to better condition",
	'curriculum'		:   "course of study",
	'malevolent'		:   "malicious; evil; having or showing ill will",
	'amalgamate'		:   "mix; combine; unite societies"
}


/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNextGREword(){

	console.log ("  ------> calling getNextGREword()");

	var keyToGet = 	getRandomInt(0, Object.keys(myGREwordDictionary).length - 1);
	var returnValue = Object.keys(myGREwordDictionary)[keyToGet];

	console.log ("  ------> returnValue: %s", returnValue);

	return returnValue;
}


function sendEmail(){
	console.log ("  ----> calling sendEmail()");

	var currentGREword = getNextGREword();

	var helper = require('sendgrid').mail;
	var from_email = new helper.Email('testing hehe <herokuDailyEmailDigest@shrouded-brook.com>');
	var to_email = new helper.Email('vanrichard@gmail.com');
	var subject = '[#GREvocabulary] ' + currentGREword;
	console.log ("  ------> subject: %s", subject);

	var contentString = 	'Hello Hong,<br>' + 
							'<br>' +
							'<b>GRE Word of the DAY</b><br>' +
							'<b>' + currentGREword +'</b>: ' + myGREwordDictionary[currentGREword] + 
							'<br>' +
							'<br>' +
							'<br>' +
							'Other stuff to remember<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     check out rosalind.info (add in link)' + 
							'&ensp;&ensp;&ensp;&ensp;&#9634;     do another ochem module (end this on __todo_check final date' + 
							'&ensp;&ensp;&ensp;&ensp;&#9634;     chinese learning (todo_add my name)<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     breath horizontally - (todo_add more pictures, details, sheet)<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     daily quote - (todo_add similiar dictionary to grevocab)<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     read<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     chinese learning (todo_add my name)<br>' +
							'';

	var content = new helper.Content('text/html', contentString);
	console.log ("  ------> contentString: %s", contentString);

	var mail = new helper.Mail(from_email, subject, to_email, content);

	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON(),
	});

	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	  console.log ("  ----> end sendEmail() callback");
	});


	console.log ("  ----> end sendEmail() function");
}
getNextGREword();
sendEmail();