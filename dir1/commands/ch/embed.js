const ext = require('../ext/ext.js')
module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg,args,users,lobies,Discord) {
		console.log(`executing`)
		ch.send(ext.a)
	},
}