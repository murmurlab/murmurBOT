const ext = require('../ext/ext.js')
module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg) {
		console.log(`executing`)
		if(Number.isInteger(parseInt(args[1]))){
			if(!args[2])return ch.send(`empty message errrrrrrrrrrrrrooooorrrrrr`)
			for(i=0;i<args[1];i++){
				ch.send(`${args.slice(2).join(" ")}`)}
			}
		else{
			ch.send(`${args.slice(1).join(" ")}`)
		}
	},
}