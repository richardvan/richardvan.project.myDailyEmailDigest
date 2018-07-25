// initially from http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial

function sayHello() {
    console.log('Hello 1');
    console.log('Hello 2');
    console.log('Hello 3');
    console.log('Hello 4');
}


function sendEmail(){
	var helper = require('sendgrid').mail;
	var from_email = new helper.Email('herokuDailyEmailDigest@shrouded-brook.com');
	var to_email = new helper.Email('vanrichard@gmail.com');
	var subject = '[myDailyEmailDigest] for ___todo_date_update___';
	var content = new helper.Content('text/plain', 'Hello, Hong, just put in daily dog breed on 7/24/18');
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
	});


}