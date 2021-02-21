module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg,args,users,lobies,Discord,client) {
		console.log(`executing`)
		client.destroy()
	},
}