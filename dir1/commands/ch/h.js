
module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg,args,users,lobies,Discord) {
		console.log(`executing`)
		let ext = require('../ext/ext.js')
		msg.channel.send(ext.b)
		
	},
}