// initially from http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial

function sayHello() {
    console.log('[DEBUG] hello as of 7/24/18 - auto deploy test');
}

var GLOBAL_quoteOfTheDay = "";
var GLOBAL_quoteOfTheDayAuthor = "";
var GLOBAL_imageOfTheDay = "";
var GLOBAL_imageOfTheDayAuthor = "";

var myPastGREwords = {};
var myGREwordDictionary = {
	// list from https://www.graduateshotline.com/gre-word-list.html
	

	'introspection' 	:	"examining one's own thoughts and feelings",
	'yarn' 	:	"tale story fibers for knitting",
	'arrogance' 	:	"proud; superior manner of behaviour",
	'divergence' 	:	"getting farther apart from a point",
	'allegiance' 	:	"duty support loyalty",
	'vigorous' 	:	"strong energetic",
	'dwarf' 	:	"person much smaller the usual size",
	'livid' 	:	"Furiously angry, enraged",
	'rejuvenation' 	:	"becoming young in nature or appearance",
	'fragrant' 	:	"sweet-smelling",
	'judicious' 	:	"sound in judgment; wise",
	'hospitable' 	:	"liking to give hospitality",
	'odor' 	:	"smell",
	'scribble' 	:	"write hastily",
	'ameliorate' 	:	"improve; make better",
	'poseur' 	:	"a person who attempts to impress by acting unlike himself",
	'sawdust' 	:	"tiny bits of wood",
	'narcissism' 	:	"Self-love",
	'dullard' 	:	"a stupid, insensitive person",
	'succumb' 	:	"yield, die",
	'sluggard' 	:	"lazy slow-moving person",
	'flop' 	:	"fail/move/fall clumsily",
	'ingest' 	:	"take in by swallowing",
	'reiterate' 	:	"say or do again several times",
	'derivative' 	:	"unoriginal; obtained from another source",
	'defer' 	:	"postpone",
	'eloquence' 	:	"fluent speaking skillful use of language",
	'clot' 	:	"half-solid lump formed from liquid",
	'commuter' 	:	"person who travels regularly",
	'weigh' 	:	"measure hoe heavy something is",
	'steeply' 	:	"rising or falling sharply",
	'torque' 	:	"twisting force causing rotation",
	'benefactor' 	:	"person who has given help",
	'moderation' 	:	"quality of being limited; not extreme",
	'plea' 	:	"request",
	'invincible' 	:	"too strong to be defeated",
	'enduring' 	:	"lasting",
	'flimsy' 	:	"lacking solidarity, strength",
	'tadpole' 	:	"form of a frog when it leaves the egg",
	'turmoil' 	:	"trouble disturbance",
	'sanity' 	:	"health of mind soundness of judgment",
	'cryptic' 	:	"secret with a hidden meaning",
	'gallant' 	:	"brave,behaves well with women",
	'endorse' 	:	"write one's name on the back of",
	'sponge' 	:	"porous rubber for washing live at once expense",
	'volatile' 	:	"changeable inconstant fickle unstable explosive",
	'alloy' 	:	"to debase by mixing with something inferior",
	'reconcile' 	:	"settle a quarrel restore peace",
	'fission' 	:	"splitting or division (esp. of cells)",
	'commemorate' 	:	"keep the memory of",
	'gait' 	:	"a manner of walking, stepping, or running",
	'dormant' 	:	"in a state of inactivity but awaiting development",
	'shard' 	:	"A piece of broken pottery",
	'chisel' 	:	"steel tool for shaping materials",
	'encapsulate' 	:	"enclose in capsule",
	'complaisant' 	:	"trying to please; obliging",
	'grievous' 	:	"causing grief or pain; serious dire grave",
	'hypocrisy' 	:	"falsely making oneself appear to be good",
	'enzyme' 	:	"catalyst",
	'eradicate' 	:	"get rid of pull up by the roots",
	'infuriate' 	:	"fill with fury or rage",
	'Lambaste' 	:	"attack verbally",
	'sanction' 	:	"approval (by authority) penalty",
	'engulf' 	:	"swallow up",
	'euphoria' 	:	"elation state of pleasant excitement",
	'renowned' 	:	"celebrated; famous",
	'colloquial' 	:	"involving or using conversation.",
	'evoke' 	:	"call up bring out",
	'mischievous' 	:	"harmful; causing mischief",
	'implicit' 	:	"implied though; not plainly expressed",
	'abysmal' 	:	"extreme bad",
	'dote' 	:	"show much fondness center one's attention",
	'riddle' 	:	"puzzling person or thing",
	'misogynist' 	:	"one who hates women/females",
	'disproof' 	:	"proof to the contrary",
	'sadastic' 	:	"Cruel",
	'impromptu' 	:	"without preparation",
	'inclined' 	:	"directing the mind in a certain direction",
	'erratic' 	:	"irregular in behaviour or opinion",
	'meticulous' 	:	"giving great attention to details",
	'ambivalent' 	:	"having both of two contrary meanings",
	'pertain' 	:	"belong as a part have reference",
	'auxiliary' 	:	"helping; supporting",
	'constrict' 	:	"make tight or smaller",
	'luminary' 	:	"star; light-giving body"
	// ossified	turned to bone; hardened like bone; Inflexible
	// tonic	something giving strength or energy
	// perish	be destroyed decay
	// presentiment	anticipatory fear; premonition
	// indistinct	not easily heard; seen clearly marked
	// dupe	cheat make a fool of
	// abstruse	difficult to comprehend; obscure
	// turbulence	being uncontrollably violent
	// connoisseur	a person with good judgement (e.g.. in art)
	// aberration	straying away from what is normal
	// extralegal	outside the law
	// pest	destructive thing or a person who is nuisance
	// parenthesis	sentence within another one something separated
	// sophisticated	complex; subtle; refined
	// ail	to cause pain, uneasiness, or trouble to.
	// limp	lacking strength; walking unevenly
	// arcane	known or understood by very few
	// mite	A very small amount, portion, or particle
	// edify	instruct; correct morally
	// recuperate	become strong after illness loss exhaustion
	// satiate	satisfy fully
	// yeoman	man owning small estate; middle-class farmer
	// fidelity	loyalty accuracy
	// pluck	pull the feathers off pick (e.g.. flowers)
	// perjury	willful FALSE statement unlawful act
	// paradigm	a model example or pattern
	// gullible	easily gulled
	// sobriety	quality or condition of being sober
	// tractable	easily controlled or guided
	// writ	written order
	// mesmerize	hypnotize
	// predominate	have more power than others
	// articulate	speak distinctly; connect by joints
	// fleet	number of ships; quick-moving
	// solvent	of the power of forming a solution
	// dislodge	move force from the place occupied
	// partisan	one-sided committed to a party biased or prejudiced
	// spear	weapon with a metal point on a long shaft
	// vivacious	lively high-spirited
	// beguile	mislead or delude; cheat; pass time
	// coagulation	change to a thick and solid state
	// foolproof	incapable of failure or error
	// liberality	free giving; generosity
	// elaborate	worked out with much care in great detail
	// brass	yellow metal (mixing copper and zinc)
	// permeate	spread into every part of
	// malleable	yielding easily shaped; moldable; adapting
	// suffice	be enough
	// lampoon	publicly mock or ridicule
	// immutable	that cannot be changed
	// forgery	counterfeit
	// patron	regular customer person who gives support
	// cordial	warm and sincere
	// retrograde	receding
	// cumbersome	burdensome; heavy and awkward to carry
	// sheath	cover for the blade of a weapon or a tool
	// repel	refuse to accept/cause dislike
	// unscathed	unharmed unhurt
	// superimpose	put something on the top
	// boisterous	noisy; restraint
	// implosion	collapse; bursting inward
	// centurion	leader of a unit of 100 soldiers
	// knit	draw together; unite firmly
	// pivotal	of great importance (others depend on it)
	// enigma	something that is puzzling
	// buoyant	able to float; light-hearted
	// jabber	talk excitedly; utter rapidly
	// treacherous	not to be trusted, perfidious
	// bewilder	puzzle; confuse
	// stride	walk with long steps
	// garrulous	too talkative
	// redeem	get back by payment compensate
	// calipers	metal supports attached to the legs measuring instrument
	// impede	hinder; get in the way of
	// resuscitation	coming back to consciousness
	// apartheid	brutal racial discrimination
	// concur	agree in opinion happen together
	// indulgent	inclined to indulge
	// recitals	a number of performance of music
	// woo	try to win
	// misanthrope	person who hates mankind
	// evasive	tending to evade
	// eulogy	formal praise panegyric
	// foster	nurture; care for
	// pilferer	to steal, especially in small quantities
	// refine	make or become pure cultural
	// dexterity	skill (esp. in handling)
	// bogus	sham; counterfeit; not genuine
	// incongruous	out of place; not in harmony or agreement
	// multifarious	varied; motley; greatly diversified
	// skit	short piece of humorous writing
	// repulsive	causing a feeling of disgust
	// hapless	unlucky

	// TODO - another flat file for the list best practice
	// TODO - this is only first list of 5; https://www.graduateshotline.com/gre-word-list.html
}

var myGREwordsSeenMOCK = {


	// updating list on 5/30/2018 <everything below had been sent over random occurances over many months>
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
	'amalgamate'		:   "mix; combine; unite societies",
	'xenophile'			:   "a person who is attracted to foreign peoples cultures",
	'drowsiness'		:   "feeling sleepy half asleep",
	'stray'				:   "wander lose one's way",
	'disrobe'			:   "undress",
	'acumen'			:   "Keen, quick, accurate insight or judgment",
	'suffocate'			:   "cause or have difficulty in breathing",
	'sporadic'			:   "happening from time to time",
	'scent'				:   "smell (especially pleasant)",
	'sequence'			:   "succession connected line of",
	'audacious'			:   "Bold",
	'affinity'			:   "close connection; relationship",
	'animosity'			:   "strong dislike",
	'heterogeneous'		:   "made up of different kinds",
	'fragile'			:   "easily injured broken or destroyed",
	'legacy'			:   "Bequest or inheritance",
	'massacre'			:   "cruel killing of a large number of people",
	'appease'			:   "make quiet or calm",
	'submerge'			:   "put under water liquid sink out of sight",
	'adulteration'		:   "making unpure; poorer in quality",
	'combustion'		:   "process of burning",
	'premature'			:   "doing or happening something before the right time",
	'shunned'			:   "avoided, kept away from",
	'anguish'			:   "severe suffering",
	'apt'				:   "well-suited; quick-witted",
	'conceal'			:   "hide keep secret",
	'grumble'			:   "to complain",
	'indigenous'		:   "native",
	'offhand'			:   "Without preparation or forethought",
	'loll'				:   "rest to sit or stand in a lazy way hang (dog's tongue)",
	'correlate'			:   "have a mutual relation",
	'somersault'		:   "rolling backward or forward (not sideways) movement",
	'abscond'			:   "to go away suddenly (to avoid arrest)",
	'edible'			:   "fit to be eaten/not poisonous",
	'extinguish'		:   "end the existence of/wipe or put out",
	'inquest'			:   "Legal or judicial inquiry, especially before a jury and especially made by a coroner into the cause of someone.s death",
	'surcharge'			:   "additional load/charge",
	'accolade'			:   "praise; approval",
	'conjoin'			:   "to join together",
	'timid'				:   "shy easily frightened",


	
	'opaqueness'		:   "dullness/not allowing light to pass through",
	'disallow'			:   "efuse to allow or accept as a correct",
	'abide'				:   "be faithful; to endure",
	'impermeable'		:   "that cannot be permeated",
	'console'			:   "give comfort or sympathy to",
	'warrant'			:   "authority written order guarantee",
	'acclaimed'			:   "welcomed with shouts and approval",
	'extinct'			:   "no longer active",
	'reminiscent'		:   "suggest something in the past",
	'catalyst'			:   "substance that causes speeding up",
	'embezzle'			:   "use in a wrong way for one's own benefit",
	'shallow'			:   "little depth; not earnest",
	'clientele'			:   "customers",
	'brittle'			:   "easily broken",
	'negligent'			:   "taking too little care",
	'affable'			:   "polite and friendly",
	'salvage'			:   "the saving of property from loss",
	'moribund'			:   "in a dying state; near death",
	'relapse'			:   "fall back again",
	'dangle'			:   "hand or swing loosely",
	'ascend'			:   "go or come up",
	'asterisk'			:   "the mark * (e.g.. omitted letters)",


	// all words that have been send over the wire naturally at 7:30am as of 8/22/2017


	'malevolent'		:   "malicious; evil; having or showing ill will",			// 10/8
	'renovate'			:   "restore something to better condition",
	'abide'				:   "be faithful; to endure",
	'philanthropist'	:	"one who loves mankind",
	'curriculum'		:   "course of study",
	'catalyst'			:   "substance that causes speeding up",
	'legacy'			:   "Bequest or inheritance",
	'massacre'			:   "cruel killing of a large number of people",
	'acclaimed'			:   "welcomed with shouts and approval",
	'affable'			:   "polite and friendly",
	'entice'			:   "attract, lure",
	'introvert'			:   "one who turns towards himself",
	'warrant'			:   "authority written order guarantee",
	'connote'			:   "Suggest or imply in addition to the precise, literal meaning",
	'braggart'			:   "boastful",
	'brittle'			:   "easily broken",										// 9/20
	'surcharge'			:   "additional load/charge",
	'accolade'			:   "praise; approval",
	'audacious'			:   "Bold",
	'amalgamate'		:   "mix; combine; unite societies",
	'acumen'			:   "Keen, quick, accurate insight or judgment",
	'disallow'			:   "efuse to allow or accept as a correct",
	'equilibrium'		:   "state of being balanced",
	'indigenous'		:   "native",												// 9/12
	'scent'				:   "smell (especially pleasant)",
	'ambiguous'			:   "doubtful; uncertain",
	'extinguish'		:   "end the existence of/wipe or put out",
	'premature'			:   "doing or happening something before the right time",
	'antidote' 			:	"medicine used against a poison or a disease",
	'sporadic'			:   "happening from time to time",
	'suffocate'			:   "cause or have difficulty in breathing",
	'loll'				:   "rest to sit or stand in a lazy way hang (dog's tongue)",
	'fragile'			:   "easily injured broken or destroyed",
	'stray'				:   "wander lose one's way",
	'somersault'		:   "rolling backward or forward (not sideways) movement",
	'affinity'			:   "close connection; relationship",


	'endeavor'			:   "to make an effort, to try very hard",
	'aggravate'			:   "make worse; irritate",
	'gerontocracy'		:   "government ruled by old people",						// 8/25
	'agile'				:   "active; quick-moving",									// 8/24
	'ambidextrous'		:   "able to use the left hand or the right equally well",	// 8/23
	'adorn'				:   "add beauty; decorate"									// 8/22
}


//////////////////////////////////////
/////////
///////.    Network Calls
/////////
//////////////////////////////////////

function getFromMongo_GREwordsSeen(){ 

	console.log ("  +++++++> calling getFromMongo_GREwordsSeen()");
	// connect to mongobd

	var returnValue = '';

	// make call to get most recent dictionary of greWordsSent so far
	console.log ("  -------> does nothing for now ");


	console.log ("  +++++++> end getFromMongo_GREwordsSeen()");

}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getPastGREwords(){

	console.log ("  ------> calling getPastGREwords()");
	
	var returnValue = myGREwordsSeenMOCK;
	// var returnValue = myGREwordsSeenNETWORK;
	// dictGREwordsSeen = myGREwordsSeenNETWORK

	console.log ("  ------>    return size: %i", Object.keys(returnValue).length);

	return returnValue;
}


function getPastGREwordsContent(dict){

	console.log ("  ------> calling getPastGREwordscontent()");
	
	var returnValue = "";

	//console.log ("  ------>    dict: %s", JSON.stringify(dict));
	//console.log ("  ------>    dict size: %i", Object.keys(dict).length);


	for (var key in dict) {
	    if (dict.hasOwnProperty(key)) {
			//console.log("  ------>    %s,%s", key, dict[key]);

			returnValue = returnValue + '<b>' + key +'</b>: ' + dict[key] + '<br>';
	    }
	}


	console.log ("  ------>    returnValue: %s", Object.keys(dict).length);

	console.log ("  ------> end getPastGREwordscontent");

	return returnValue;
}


function classScheduleContent(){

	var returnValue = 		'<h3>Class Schedule Spring 2018</h3>';

	var today = new Date();
	if(today.getDay() == 0) 	// sunday - return everything to get an overview
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Sunday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; _TODO_by_8_27_mondayFirstDay <br>' +
							// '&ensp;&ensp;&ensp;&ensp;		     <b>Monday</b><br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL304(Molecular Genetics) 	1:00pm-2:15pm @ TBE B-174<br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; CHEM242(Organic Chemistry) 	4:00pm-5:15pm @ RBP102 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;		     <b>Tuesday</b><br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL490(Biogeography) 	    8:30am-9:45m @ WHI105 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL468(Histology UTA) 	    1:00pm-3:50pm @ WHI202 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL480(Biological Modeling) 4:00pm-5:15pm @ TBE B-176 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;		     <b>Wednesday</b><br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL304D(Genetics D)         8:30am-11:15am @ BHS208 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL304(Molecular Genetics) 	1:00pm-2:15pm @ TBE B-174 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; CHEM242(Organic Chemistry) 	4:00pm-5:15pm @ RBP102 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;		     <b>Thursday</b><br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL490(Biogeography) 	    8:30am-9:45am @ WHI105 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL468(Histology UTA) 	    1:00pm-3:50pm @ WHI202 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL480(Biological Modeling) 4:00pm-5:15pm @ TBE B-176 <br>' +
							'';
	else if (today.getDay() == 1) // monday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Monday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; _TODO_by_8_27_mondayFirstDay <br>' +
							'';
	else if (today.getDay() == 2) // tuesday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Tuesday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; _TODO_by_8_27_mondayFirstDay <br>' +
							'';
	else if (today.getDay() == 3) // wednesday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Wednesday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; _TODO_by_8_27_mondayFirstDay <br>' +
							'';
	else if (today.getDay() == 4) // thursday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Thursday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; _TODO_by_8_27_mondayFirstDay <br>' +
							'';
	else if (today.getDay() == 5) // friday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Friday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; _TODO_by_8_27_mondayFirstDay <br>' +
							'';
	else if (today.getDay() == 6) // saturday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Saturday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; _TODO_by_8_27_mondayFirstDay <br>' +
							'';

	return returnValue;
}

function getNextGREword(){

	console.log ("  ------> calling getNextGREword()");

	var returnValue;

	// only return words not seen before
	var nextWord;

	while (true){
		var randomInt = getRandomInt(0, Object.keys(myGREwordDictionary).length - 1);
		nextWord = Object.keys(myGREwordDictionary)[randomInt]
		if (!myPastGREwords.hasOwnProperty(nextWord))
			break;
	};
	returnValue = nextWord;

	console.log ("  ------>    returnValue: %s", returnValue);

	return returnValue;
}


function sendEmail(){
	console.log ("  ---> calling sendEmail()");

	myPastGREwords = getPastGREwords();
	var pastGREwordsContent = getPastGREwordsContent(myPastGREwords);
	var currentGREword = getNextGREword();




	console.log ("  ------> [crafting sendgrid object]");
	var helper = require('sendgrid').mail;
	var from_email = new helper.Email('greVocabMockup@hongboDailyEmailDigest._todoUpdateThisCounter');
	var to_email = new helper.Email('vanrichard@gmail.com');
	var subject = '[#GREvocabulary] ' + currentGREword;
	console.log ("  ------>    subject: %s", subject);

	var contentString = 	'[ start of message hongbo ]<br>' + 
							'<br>' +
							'<b>GRE Word of the DAY</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;<b>' + currentGREword +'</b>: ' + myGREwordDictionary[currentGREword] + '<br>' +
							'<br>' +
							'<b>Quote of the DAY</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;' + GLOBAL_quoteOfTheDay + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;         -<i>' + GLOBAL_quoteOfTheDayAuthor + '</i><br>' +
							'<br>' +
							'<b>Image of the DAY</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;' + GLOBAL_imageOfTheDay + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;         -<i>' + GLOBAL_imageOfTheDayAuthor + '</i><br>' +
							'<br>' +
							'<b>Dog Breed of the DAY</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;' + GLOBAL_dogBreedOfTheDay[2].toString() + '<br>' +						// [0] group; [1] breed; [2] url
							'&ensp;&ensp;&ensp;&ensp;         -<i>' + GLOBAL_dogBreedOfTheDay[1].toString() + '( of ' + GLOBAL_dogBreedOfTheDay[0].toString() + ' group)' + '</i><br>' +
							'<br>' +
							'<h3>My Custom Tools:</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [Root Finder 1.0] <a href="https://richardvan-learn-biology-roots.herokuapp.com/">live</a><br>' +
							'<h3>My Common Links:</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [webcampus] <a href="webcampus.unlv.edu/webapps/login/">webcampus</a><br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [email] <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">gmail</a><br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [reminders] <a href="https://chrome.google.com/webstore/detail/boomerang-for-gmail/mdanidgdpmkimeiiojknlnekblgmpdll?hl=en">boomerang</a><br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [cloud_drive] <a href="https://drive.google.com">google</a><br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [cloud_drive] <a href="https://www.amazon.com/ap/signin?clientContext=133-2459284-1522832&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&siteState=https%3A%2F%2Fwww.amazon.com%2Fclouddrive%2Fref%3Ds9_acss_bw_cg_UASNAVBE_1a1_w%3F_encoding%3DUTF8%26mgh%3D1%26ref_%3DBN_US_C_U_Z_D_CD_CG_417_SINV%26ref_%3Ds9_acss_bw_cg_UASNAVBE_1a1_w%26sf%3D1&marketPlaceId=ATVPDKIKX0DER&pageId=photos_authportal_us&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fclouddrive%2Fauth&openid.assoc_handle=amzn_photos_us&openid.oa2.response_type=token&openid.mode=checkid_setup&openid.ns.oa2=http%3A%2F%2Fwww.amazon.com%2Fap%2Fext%2Foauth%2F2&openid.oa2.scope=clouddrive%3Aretailweb&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.oa2.client_id=iba%3Aamzn1.application-oa2-client.d45dc8aaf8fa47b0966a0dfbc75de512&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.pape.max_auth_age=172800">amazon</a><br>' +
							classScheduleContent() +
							'<br>' +

							'<h3>Resources Links (Fall 2018):</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [_TODO_class_scheduleFirst] <br>' + 
							'<br>' +
							'<h3>Random Learning Links:</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [Educational/Science] <br>' + 
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://avida-ed.msu.edu/avida-ed-application/">Avida</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="http://www.pnas.org/">National Academy of Sciences</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://www.nature.com/">Nature Journal</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://singularityhub.com/">Singlularity Hub</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="http://www.sciencemag.org/">Science Journal</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [Companies] <br>' + 
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://www.unitedneuroscience.com/news/">United Neuroscience</a> <br>' +
							'<br>' +
							'<h3>Resources Links (Spring 2018):</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [chem242_organic_chemistry] <br>' + 
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://drive.google.com/open?id=0ByHKgw81Z5-_eld1YXhLb2FtaDQ">textbook</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://drive.google.com/open?id=0ByHKgw81Z5-_aGJ6YmppZzhMTG8">solutions manual</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="https://drive.google.com/open?id=0ByHKgw81Z5-_WEV0TXRYQU9SMFE">Organic Chemistry as a Second Language</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [biol304_genetics] <br>' + 
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://drive.google.com/open?id=1X4TlQzr0ZDZhKYzdb5VrQKK1PlothBhS">textbook</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://perrylocal.org/herstinm/about-me/class-notes-2/">AP BIOL class-notes-2</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [biol480_biologicalModeling] <br>' + 
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://faculty.unlv.edu/schulte/BIO480/">class website (login:class|pw:notes)</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://drive.google.com/open?id=1eaMxfFkOzY5CxqB14mraH9Qhlql66iwW">textbook</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [biol490_biogeography] <br>' + 
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="_blank">textbook_physical</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [UTA_biol468_histology] <br>' + 
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture:<a href="https://drive.google.com/open?id=0ByHKgw81Z5-_RmFDS1NqTVZiYU0">textbook</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lab:<a href="https://drive.google.com/open?id=0ByHKgw81Z5-_Y3Zwd0hvcDMtVDQ">lab book</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://medcell.med.yale.edu/histology/histology.php">Yale Medicine</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://histology.medicine.umich.edu/full-slide-list">Michigan Medicine</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://www.siumed.edu/~dking2/index.htm">SIU Medicine</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://www.meddean.luc.edu/lumen/MedEd/Histo/frames/histo_frames.html">Loyola Medicine</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://www.histology.leeds.ac.uk/index.php">Leeds Medicine</a> <br>' +
							'<h3>Resources Links (Fall 2017):</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [chem241_organic_chemistry] <br>' + 
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://drive.google.com/open?id=0ByHKgw81Z5-_eld1YXhLb2FtaDQ">textbook</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://drive.google.com/open?id=0ByHKgw81Z5-_aGJ6YmppZzhMTG8">solutions manual</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="https://drive.google.com/open?id=0ByHKgw81Z5-_enlmbkhveDV3UGs">Organic Chemistry as a Second Language (Second Semester)</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [biol434_mammalogy] <br>' + 
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://drive.google.com/open?id=0ByHKgw81Z5-_Y0VOdUdSS2xuajQ">textbook</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://animaldiversity.org/">Animal Diversity Web (info/photos)</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="https://naturalhistory.si.edu/mna/main.cfm?lang=_en">Smithsonian North American Mammals (info/geography)</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://tolweb.org/tree/">Tree of Life (info/phylogeny)</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://www.mammalogy.org/">American Society of Mammalogist</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="https://academic.oup.com/jmammal">Journal of Mammalogy (publications)</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="https://academic.oup.com/mspecies">Mammalian Species (publications)</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://apps.webofknowledge.com/WOS_GeneralSearch_input.do?product=WOS&search_mode=GeneralSearch&SID=2FM1r173p56NZYP85x6&preferencesSaved=">Web of Science(literature search)</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource: <a href="http://vertnet.org/">VertNet (museum collections)</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [coding] problem-a-day:<a href="http://rosalind.info/problems/list-view/">rosalind</a><br>' + 
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [review] flashcards spaced repetition:<a href="https://ankiweb.net/decks/">anki</a><br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [mendeley] <a href="https://www.mendeley.com/library/g">my mendeley</a><br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     [read leisure] kindle chapter, blinkist<br>' +
							'<br>' +
							'<h3>Random TODOs</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     connectTOcommonDATABASE__<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     autoUpdateOfSeenGREword<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     parser to display this list nice html format__<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     daily quote - (todo_add similiar dictionary to grevocab)<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     chinese learning (add more words to learn _todo_online_recommended_ones)<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     breath horizontally - (todo_add more pictures, details, sheet)<br>' +
							'&ensp;&ensp;&ensp;&ensp;&#9634;     check out https://code.visualstudio.com/ to use instead of sublime<br>' +
							'<br>' +
							'<h3>Random Tips to organize:</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	"put first things first" (<a href="https://www.artofmanliness.com/articles/the-7-habits-put-first-things-first/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+TheArtOfManliness+%28The+Art+of+Manliness%29&mc_cid=ef0fb11a16&mc_eid=52eed0baac">AoM</a>)<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	always think "iterate"<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	steps -> short-term goals -> long-term goals -> dreams"<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp; [tip] after each podcast, write down the takeaway to employ in daily like<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp; [tip] write on paper (iterate versions) morning ritual, goals for day, nightly ritual<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp; [tip] weekly review of current week that just happened (daily/weekly planning + robot mode); what went wrong and how to make more efficient<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp; [tip] high quality work = time spent * intensity of focus<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp; [tip] do the hardest thing first thing in the morning off list of task for the day<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp; [tip] pomodoro: 25 min investment into just working on something, no need to finish task<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp; [crashcourse_notes] SQ3R - (survey,question,read,recite,review)<br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; resource:<a href="__todoLINK___">__todo_title_</a> <br>' +
							'<br>' +
							'<br>' +
							'<h3>Quotes</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	[quote] Adapt what is useful, reject what is useless, and add what is specifically your own.  -Bruce Lee <br>' +
							'<br>' +
							'<br>' +


							'<h3>List of past words sent thus far!</h3>' + 
							pastGREwordsContent + 
							'<br>' +
							'<br>' +
							'<h3>[ -- To Update This Email --]</h3>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#1.) open sublime and terminal' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#2.) homebrew install git' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#3.) homebrew install node' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#4.) git clone https://github.com/richardvan/richardvan.project.myDailyEmailDigest.git' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;		 <DO NOT USE> git clone https://github.com/richardvan/richardvan.project.myDailyEmailDigest.git' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;		 <DO NOT USE> have automatic deploy enabled on heroku-github integration;' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;		 <DO NOT USE> hook is called once a commit to github branch happens; then is commited to heroku; then deployed' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#5.) cd <repo cloned>' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#5.) npm update' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#5.) npm install <[ex]rss-parser>' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#6.) brew install heroku/brew/heroku' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#6.) heroku login' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#7.) <make updates in sublime>' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#8.) git add .' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#8.) git commit -m <message_in_quotes>' + '<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#8.) git push' + '<br>' +
							'<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#T.) node <[ex]scheduled-jobs-greVocab.js>' + '<br>' +
							'<br>' +
							'&ensp;&ensp;&ensp;&ensp;&gt;&ensp;	#L.) [heroku service] https://dashboard.heroku.com/apps/shrouded-brook-44002' +
							
							'<br>' +
							'<br>' +
							'[ end of message hongbo ]' +



							'';

							



	var content = new helper.Content('text/html', contentString);
	console.log ("  ------>    contentString: %s", contentString);

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
	  console.log ("  ---> end sendEmail() callback");
	});


	console.log ("  ---> end sendEmail() function");

}


sayHello();

console.log ("\n");
console.log ("  XX> [getting RSS feeds](non-callback)");
var Parser = require('rss-parser');
var parser = new Parser();
// (async () => {

	parser.parseURL('https://www.brainyquote.com/link/quotebr.rss', function(err, feed){

		console.log ("  XXXXXX> [getting RSS feeds - 1st - quoteOfDay]");
		GLOBAL_quoteOfTheDayAuthor = feed.items[0].title;
		GLOBAL_quoteOfTheDay = feed.items[0].content;
		console.log ("  XXXXXX> quote:%s\n", GLOBAL_quoteOfTheDay);
		console.log ("  XXXXXX> [end getting RSS feed callback - quoteOfDay]\n\n");


		nextRSSCall_01();		// is this "callback hell?"
	} );

	function nextRSSCall_01 (err, response, body) {
		parser.parseURL('https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss', function(err, feed){

			console.log ("  XXXXXX> [getting RSS feeds - 1st - nasaImage]");
			GLOBAL_imageOfTheDayAuthor = feed.items[0].title;
			GLOBAL_imageOfTheDay = feed.items[0].enclosure.url;
			console.log ("  X2XXXXX> imageAuthor:%s\n", GLOBAL_imageOfTheDayAuthor);
			console.log ("  X2XXXXX> image_nasa:%s\n", GLOBAL_imageOfTheDay);
			console.log ("  XXXXXX> [end getting RSS feed callback - nasaImage]\n\n");


			sendEmail();

		});
 	};

console.log ("  XX> [end getting RSS feed call] (non-callback)");


console.log ("  XX> [daily dog breed related");
////////////////////////////////////////////////////////////
//  [daily dog breed related]

fs = require('fs');
var CONST_file_dog_breeds_toy = "dog_breeds_toy.txt";

//  note this will be async (aka blocking)
function getRandomLine(filename){
	var myArray = fs.readFileSync(filename).toString().split("\n");
	
	console.log ("    [array size]:" + myArray.length);	
	//for(i in myArray) {
	//	console.log(myArray[i]);
	//}
	var randomLine = myArray[Math.floor(Math.random() * myArray.length)];
	var randomLineArray = randomLine.toString().split("\t");
	
	// regexp to remove the quotes if they are the first and last characters of the string
	// done this way so that saving the data was easier
	randomLineArray[0] = randomLineArray[0].replace(/^"(.*)"$/, '$1');
	randomLineArray[1] = randomLineArray[1].replace(/^"(.*)"$/, '$1');
	randomLineArray[2] = randomLineArray[2].replace(/^"(.*)"$/, '$1');
	
	console.log ("    [line.group]:" + randomLineArray[0]);	
	console.log ("    [line.breed]:" + randomLineArray[1]);	
	console.log ("    [line.link]:" + randomLineArray[2]);	

	return randomLineArray;
}


GLOBAL_dogBreedOfTheDay= getRandomLine(CONST_file_dog_breeds_toy);;




//  [end daily dog breed related]
/////////////////////////////////////////////////////////////
console.log ("  XX> [end daily dog breed related");


// })

