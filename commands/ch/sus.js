const ext = require('../ext/ext.js')
module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg) {
		console.log(`executing`)
		 
		  if(!msg.member.hasPermission(`MANAGE_MESSAGES`))return ch.send(`you dont have mute permission`)
		  if(!msg.mentions.users.first())return ch.send(`tag a user`)
		  if(!args[2])return ch.send(`specify a time`)
		  let muser =msg.mentions.members.first()
		  //console.log(muser)
		  
		  let time = args[2]
		  let muterole 
		  muterole = msg.guild.roles.cache.find((r)=>r.name==`sus`)
		  console.log(muterole)
		  console.log(`${muser}`)
		  if (!muterole) {
		    
		     async ()=>{
		     	const muterole = await msg.guild.roles.create(
		           {
		            data:
		            {
		              name: `sus`,
		              color: `black`
		              //permissions: []
		            },
		            reason: 'a',
		          }).catch(e=>console.log(e))
		          
		            console.log(muterole)
		            msg.guild.channels.cache.forEach(async(ch) => {
										    console.log(ch.name);
												  await  ch.updateOverwrite(muterole, { SEND_MESSAGES: false });
												  
												  })
		          
		          ch.send(`awaiti gecti`)
		      }
		    
		  }
		  
		  try {
		    /* code */
		    muser.roles.add(muterole)
		  } catch (e) {console.log(e);}
		  ch.send(`${muser.toString()} has been muted ${time}`)
		  
		    setTimeout(()=>{
		      muser.roles.remove(muterole)
		      ch.send(`${muser.toString()} has been unmuted`)
		    },time)
		    console.log(time);
		    
		  
		  
	},
}