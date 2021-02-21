module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg,args,users,lobies,Discord) {
		console.log(`executing`)
		ch.messages.fetch({limit:args[1]})
		.then(a=>{
			console.log(`running ${a}`)
			//a.forEach((v,k,m)=>{ch.send(`${v}`)})
			ch.bulkDelete(a)
			})
	},
}