
const https = require('https');

const options = { 
	hostname: 'nodejs.org',
	path: '/en/feed/vulnerability.xml',
	port: 443,
	method: 'GET'
}

const req = https.request(options, res => {

	if (res.statusCode !== 200) {
		console.error('Anfrage fehlgeschlagen');
		return;
	}

	res.on('data', data => {
		console.log(data.toString());
	});
});


req.on('error', error => {console.error(error);});
req.end();


