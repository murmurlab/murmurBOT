const http = require('http')
const a = http.createServer((x,q)=>{
	process.stdout.write('req')
	if(x.method=='POST'){
		process.stdout.write('post')
		q.end('a')
	}
}).listen(8080,'127.0.0.1',c=>{
	process.stdout.write('ok')
})