const ext = require('../ext/ext.js')
module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg) {
		console.log(`executing`)
		msg.channel.send("sending...")
		const user = msg.mentions.users.first() || msg.author;
		msg.channel.send(user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))

	},