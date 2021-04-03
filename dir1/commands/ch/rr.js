const ext = require('../ext/ext.js')
module.exports = { 
	name: 'help', 	
	description: 'helping', 	
	execute(ch,msg) {
		console.log(`executing`)
		ch.send(`Çok Yakında...`)
	},
}