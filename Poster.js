/*
const http = require('http')

const data = new TextEncoder().encode(
  JSON.stringify({
    todo: 'Buy'
  })
)

const options = {
  hostname: 'www.murmurlab.space',
  path: '/devletistan',
  port:80,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
	let str
  res.on('data', d => {
  	//console.log(d)
  	str += d;
    process.stdout.write(str)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
*/
var http = require('http');

var options = {
  host: 'www.murmurlab.space',
  path: '/devletistan',
  method: 'POST'
};

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log("response is:", str, "code", response.statusCode);
    
  });
}

var req = http.request(options, callback);
req.write("hello world!");
req.end();