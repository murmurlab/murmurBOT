
module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg,args,users,lobies,Discord) {
		console.log(`executing`)
		const kikuser = msg.mentions.users.first()
		const member = msg.guild.member(kikuser)
		if(!member)return msg.reply(";kik @kullanıcı")
		console.log(msg.member.hasPermission("KICK_MEMBERS"))
		if(!msg.member.hasPermission("KICK_MEMBERS"))return ch.send("yetkin yok")
		member
		.kick()
		.then(()=>ch.send(`:wave: ${kikuser.tag} has been successfully kicked :point_right:`))
		.catch(()=>ch.send(`yetkim yok`))
		//console.log(client.guild.me.hasPermission("KICK_MEMBERS"))
	},
}