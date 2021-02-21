const ext = require('../ext/ext.js')
module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg) {
		console.log(`executing`)
		ch.send(`Yükleniyor........`)
		setTimeout(()=>{ch.send(`Kandırdım °__°`)},3000)

	},
}