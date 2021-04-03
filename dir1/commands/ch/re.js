module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg,args,users,lobies,Discord,client,relogin) {
		console.log(`executing`)
		relogin(msg.channel,args[1])
	},
}