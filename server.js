//sj

const {Client, Intents, MessageEmbed} = require("discord.js")

const client = new Client({
	intents: [Intents.FLAGS.GUILDS]
	
})
const fs = require('fs')
//const client = global.client = new Discord.Client({fetchAllMembers: true});
const config = require("./config.json")
//const ext = require("./ext.js")
const { prefix, ownerID } = require("./config.json")

var atan, dmme, chch, mejas
client.on("ready", () => {
  setup()
  client.user.setStatus(`idle`)

  //client.user.setActivity(`Ais`,{type:`LISTENING`})

  client.user.setPresence({ activities: [{ name: `
 mur[;h]murmur╔╗╔══╦══╗
╔══╦╦╦╦╦══╦╦╦╦╣║║╔╗║╔╗║
║║║║║║╔╣║║║║║╔╣╚╣╠╣║╔╗║
╚╩╩╩═╩╝╚╩╩╩═╩╝╚═╩╝╚╩══╝
  `, type: 'STREAMING', status: 'idle'}] })
    /*.then(console.log)
    .catch(console.error);*/
    console.log(client.presence)

  console.log("ready!")
})
let users = {
  "431079005941137418": {
    "oninloby": { "lobik": true },
    "lobi": 1,
    "lobiname": "lobik"
  }
}
let lobies = {
  "lobik": {
    "maps": {

    },
    "owner": "431079005941137418",
    "members": {},
    "numofmem": 0,
    "queue": {},
    "queued": 0,
    "onlines": 0
  }
}
/* function user (pusername,pzone){
            this.username = pusername
            this.zone = pzone
          } */
//client.guilds.update()
client.guilds.fetch().then((members) => {
 console.log(members);
 // code...
})
//console.log(client.guilds.cache)
//console.log(client.users)
console.log('event adding')
client.on("message", async (msg) => {
	console.log('onMsg')
  if (msg.channel.type == "DM") {
  	console.log('dmmed')
    if (msg.author.bot) return
    console.log('msg owner is not bot')
    if (msg.author == dmme) {
    	console.log('msg owner is ahmet')
      if (!msg.content.startsWith(prefix)) return console.log('prefix yok')
      const command = msg.content.slice(prefix.length).split(" ").shift()
      const args = msg.content.slice(prefix.length + command.length).split(" ")
      switch (command) {
        case "reply":
          if (!args[1] || !args[2]) return dmme.send('id or message is missing')
          var atac
          if (msg.attachments.size > 0) {
            atac = msg.attachments.first()
          }
          client.users.fetch(args[1])
            .then(thisuser => thisuser.send(args.slice(2).join(' '), atac))
            .catch(error => dmme.send(`invalid user ||${error.toString()}||`))
          break;
        case "share": {
        	console.log(args[1], args[2])
          if (!args[1] || !args[2]) return dmme.send(`server or channel is missing`)
          client.guilds.fetch()
          .then(g=>{
          	console.log(g)
          	
          	let cl = client.guilds.cache.find(e => {
          		return e.name == args[1] || e.id == args[1]
          	})
          	console.log(cl)
          	let cha = cl.channels.cache.find((e) => { return e.name == args[2] || e.id == args[2] })
          	cha.send({content: args.slice(3).join(" ")})
          })
          

          break;
        }
        case 'ad': {
        	
        	break
        }
        default:
          dmme.send("invalid command")
      }
      return
    }
    var atac2
    if (msg.attachments.size > 0) {
      atac2 = msg.attachments.first()
    }
    atan = msg.author
    mejas = msg.content
    console.log(mejas + " " + atan.id)
    let embeb = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('murmurbot help')
      .setURL('https://disboard.org/tr/server/692070157572636733')
      .setAuthor('murmurbot', 'https://cdn.discordapp.com/avatars/707222049755496458/56b98273b152972a9302688cf8868c69.png?size=2048', 'https://instagram.com/murmurmanx')
      .setDescription(atan.toString())
      .setThumbnail('https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048')
      .setFooter(atan.id, 'https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048');
		if(msg.attachments.size > 0){
    dmme.send(msg.content, {
      embed: embeb,
      files: [atac2]
    })}else{
    	dmme.send(msg.content, {
      embed: embeb,
      files: []
    })
    }

    return
  }
  if (msg.author.bot) return
  if (!msg.content.startsWith(prefix)) return
  const command = msg.content.slice(prefix.length).split(" ").shift()
  const args = msg.content.slice(prefix.length + command.length).split(" ")
  const ch = msg.channel
  //msg.channel.send(command)
  //msg.channel.send(args)
  const commands = fs.readdirSync('dir1/commands/');
  const chk = fs.readdirSync('./dir1/commands/ch')
  const dmk = fs.readdirSync('./dir1/commands/dm')
  console.log(commands, chk)
  console.log(command)
  const name = chk.find(n => n == command + '.js')
  if (name) {
    const cmd = require(`./dir1/commands/ch/${name}`)
    if (!cmd.execute) return ch.send('empty command file')
    cmd.execute(ch, msg, args, users, lobies, Discord, client, relogin, dmme, chch)
  } else {
    const e = new MessageEmbed()
      .setColor('#ffff00')
      .setTitle('murmurbot help')
      .setURL('https://disboard.org/tr/server/692070157572636733')
      .setAuthor('murmurbot', 'https://cdn.discordapp.com/avatars/707222049755496458/56b98273b152972a9302688cf8868c69.png?size=2048', 'https://instagram.com/murmurmanx')
      .setDescription(msg.author.toString() + "  ;h")
      .setThumbnail('https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048')
      .setFooter("powered by murmurLAB", 'https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048');

    ch.send({ embed: e })
  }
})
console.log(client._events.message.toString())

function relogin(ch, acc) {
  if (config.tokens[acc] === undefined) {
    console.log(config.tokens[acc])
    ch.send("böyle bir token yok")
    return
  }
  ch.send("relogining to " + acc)
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + config.tokens[acc].slice(config.tokens[acc].length / 1.1))
  ch.send("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + config.tokens[acc].slice(config.tokens[acc].length / 1.1))
    .then(() => client.destroy())
    .then(() => client.login(config.tokens[acc]))
    .then(() => ch.send(`logged in ${acc}`))
}

function setup() {

  client.users.fetch('431079005941137418').then((thisuser) => dmme = thisuser)
  chch = client.channels.cache.get('692070158281212019')
}

client.login(config.tokens.lokums)
