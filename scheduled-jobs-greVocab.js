// initially from http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial

function sayHello() {
    console.log('[DEBUG] hello as of 7/27/18 - START_HERE_');
}

var GLOBAL_quoteOfTheDay = "";
var GLOBAL_quoteOfTheDayAuthor = "";
var GLOBAL_imageOfTheDay = "";
var GLOBAL_imageOfTheDayAuthor = "";
var GLOBAL_greVocab_word= "";
var GLOBAL_greVocab_definition="";
var GLOBAL_dogBreedOfTheDay;

//////////////////////////////////////
/////////
///////.    Network Calls
/////////
//////////////////////////////////////

function classScheduleContent(){

	var returnValue = 		'<h3>Class Schedule Spring 2018</h3>';

	var today = new Date();
	if(today.getDay() == 0) 	// sunday - return everything to get an overview
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Sunday</b><br>' +
							// '&ensp;&ensp;&ensp;&ensp;		     <b>Monday</b><br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; PHYS182(Physics 3)       1:00pm-2:15pm @ RGB 102 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL351(Microbiology)    2:30pm-3:45pm @ TBE A-107 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL351(Microbiology)    4:00pm-5:15pm @ WHI 197 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; UTA    (Histology)       5:00pm-8:00pm @ WHI 203 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;		     <b>Tuesday</b><br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL490(Biogeography) 	    8:30am-9:45m @ WHI105 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL468(Histology UTA) 	    1:00pm-3:50pm @ WHI202 <br>' +
							// // '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL480(Biological Modeling) 4:00pm-5:15pm @ TBE B-176 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;		     <b>Wednesday</b><br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; PHYS182(Physics 3)       1:00pm-2:15pm @ RGB 102 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL351(Microbiology)    2:30pm-3:45pm @ TBE A-107 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL351(Microbiology)    4:00pm-5:15pm @ WHI 197 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;		     <b>Thursday</b><br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL490(Biogeography) 	    8:30am-9:45am @ WHI105 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL468(Histology UTA) 	    1:00pm-3:50pm @ WHI202 <br>' +
							// '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL480(Biological Modeling) 4:00pm-5:15pm @ TBE B-176 <br>' +
							'';
	else if (today.getDay() == 1) // monday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Monday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; PHYS182(Physics 3)       1:00pm-2:15pm @ RGB 102 <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL351(Microbiology)    2:30pm-3:45pm @ TBE A-107 <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL348(Anatomy)    		4:00pm-5:15pm @ WHI 197 <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; UTA    (Histology)       5:00pm-8:00pm @ WHI 202 <br>' +
							'';
	else if (today.getDay() == 2) // tuesday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Tuesday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; CHEM474(Biochem 1)       10:00pm-11:15pm @ CBC A108 <br>' +
							'';
	else if (today.getDay() == 3) // wednesday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Wednesday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL351L(Microbio Lab)   8:00pm-11:15am @ RGB 102 <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; PHYS182(Physics 3)       1:00pm-2:15pm @ RGB 102 <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL351(Microbiology)    2:30pm-3:45pm @ TBE A-107 <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL348(Anatomy)    		4:00pm-5:15pm @ WHI 197 <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; UTA    (Histology)       5:00pm-8:00pm @ WHI 202 <br>' +
							'';
	else if (today.getDay() == 4) // thursday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Thursday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; CHEM474(Biochem 1)       10:00pm-11:15pm @ CBC A108 <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; PHYS182L(Physics Lab)    4:30pm-7:15pm @ RGB 257 <br>' +
							'';
	else if (today.getDay() == 5) // friday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Friday</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; BIOL347(Anatomy Lab)     2:30pm-5:15pm @ WHI 202 <br>' +
							'';
	else if (today.getDay() == 6) // saturday
		returnValue = 		returnValue +
							'&ensp;&ensp;&ensp;&ensp;		     <b>Saturday</b><br>' +



							'&ensp;&ensp;&ensp;&ensp;		     <b></b><br>' 		// last sentenct

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

	console.log ("  ------> [crafting sendgrid object]");
	var helper = require('sendgrid').mail;
	var from_email = new helper.Email('greVocabMockup@hongboDailyEmailDigest._todoUpdateThisCounter');
	var to_email = new helper.Email('vanrichard@gmail.com');
	var subject = '[#GREvocabulary] ' + GLOBAL_greVocab_word;
	console.log ("  ------>    subject: %s", subject);

	var contentString = 	'[ start of message hongbo ]<br>' + 
							'<br>' +
							'<b>GRE Word of the DAY</b><br>' +
							'&ensp;&ensp;&ensp;&ensp;<b>' + GLOBAL_greVocab_word +'</b>: ' + GLOBAL_greVocab_definition + '<br>' +
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
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://www.nature.com/">Nature</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://singularityhub.com/">Singlularity Hub</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="http://www.sciencemag.org/">Science</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="http://advances.sciencemag.org/">Science Advances</a> <br>' +
							'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &gt;&ensp; Lecture: <a href="https://academic.oup.com/bioinformatics">Bioinformatics</a> <br>' +
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
	  console.log (" \n");
	  console.log ("  --> begin sendEmail() callback");
	  console.log ("  ---> response.statusCode: " + response.statusCode);
	  console.log ("  ---> response.body:" );
	  console.log(response.body);
	  console.log ("  ---> response.headers:" );
	  console.log(response.headers);
	  console.log ("  --> end sendEmail() callback");


	  console.log (" ...  < END ASYNCRONOUS CALLS > \n\n");
	});


	console.log ("  ---> end sendEmail() function");

}


sayHello();			// START_HERE_

console.log (" ...  < BEGIN SYNCRONOUS CALLS > ");
console.log ("  XX> [getting RSS feeds](non-callback)");
var Parser = require('rss-parser');
var parser = new Parser();
// (async () => {

	parser.parseURL('https://www.brainyquote.com/link/quotebr.rss', function(err, feed){

		console.log ("  XXXX> [getting RSS feeds - 1st - quoteOfDay]");
		GLOBAL_quoteOfTheDayAuthor = feed.items[0].title;
		GLOBAL_quoteOfTheDay = feed.items[0].content;
		console.log ("  XXXX> quote:%s", GLOBAL_quoteOfTheDay);
		console.log ("  XXXX> [end getting RSS feed callback - quoteOfDay]");


		nextRSSCall_01();		// is this "callback hell?"
	} );

	function nextRSSCall_01 (err, response, body) {
		parser.parseURL('https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss', function(err, feed){

			console.log ("  XXXX> [getting RSS feeds - 1st - nasaImage]");
			GLOBAL_imageOfTheDayAuthor = feed.items[0].title;
			GLOBAL_imageOfTheDay = feed.items[0].enclosure.url;
			console.log ("  XXXX> imageAuthor:%s", GLOBAL_imageOfTheDayAuthor);
			console.log ("  XXXX> image_nasa:%s", GLOBAL_imageOfTheDay);
			console.log ("  XXXX> [end getting RSS feed callback - nasaImage]");


			sendEmail();

		});
 	};

console.log ("  XX> [end getting RSS feed call] (non-callback)");


console.log ("  XX> [daily dog breed related");
////////////////////////////////////////////////////////////
//  [daily dog breed related]

fs = require('fs');
var CONST_file_dog_breeds_toy = "dog_breeds.txt";

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


console.log ("  XX> [daily GRE word elated");
/////////////////////////////////////////////////////////////
//  [GRE vocab from file elated]

fs = require('fs');
var CONST_file_gre_vocab_words = "gre_vocab_words_source2.txt";		//https://github.com/scottfrazer/gre/blob/master/words.txt

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
	
	GLOBAL_greVocab_word= randomLineArray[0];
	GLOBAL_greVocab_definition= randomLineArray[1];
	// console.log ("    [line.word]:" + randomLineArray[0]);	
	// console.log ("    [line.definition]:" + randomLineArray[1]);	
}

getRandomLineFromGreList(CONST_file_gre_vocab_words);


//  [GRE vocab from file related]
/////////////////////////////////////////////////////////////

console.log ("  XX> [end daily GRE word related");




console.log (" ...  < END   SYNCRONOUS CALLS > ");
console.log (" ...  < BEGIN ASYNCRONOUS CALLS > ");
