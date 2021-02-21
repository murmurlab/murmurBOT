const Discord = require("discord.js")

const a = new Discord.MessageEmbed()
 .setColor('#ff00ff')
 .setTitle('murmurbot help')
 .setURL('https://disboard.org/tr/server/692070157572636733')
 .setAuthor('murmurbot', 'https://cdn.discordapp.com/avatars/707222049755496458/56b98273b152972a9302688cf8868c69.png?size=2048', 'https://instagram.com/murmurmanx')
 .setDescription('Bilgilendirme Yazısı')
 .setThumbnail('https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048')
 .addFields(
    { name: 'Dininizi belirtebilirsiniz', value: `☪️ müslüman 
✝️ hristiyan 
☮️ ateist
❓ agnostik
🔒 deist
⛔ sanane babo
💬 diğer <#794387257091948584>`},
    { name: '\u200B', value: '\u200B' },
    )
  .addField('Inline field title', 'Some value here', true)
  .setImage('https://cdn.discordapp.com/avatars/774754600997617704/ed56e63a09c357c60ad3a0f063791130.png?size=128')
  .setTimestamp()
  .setFooter('Some footer text here', 'https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048'); 


const b = new Discord.MessageEmbed()
 .setColor('#00ffbb')
 .setTitle('murmurbot help')
 .setURL('https://disboard.org/tr/server/692070157572636733')
 .setAuthor('murmurbot', 'https://cdn.discordapp.com/avatars/707222049755496458/56b98273b152972a9302688cf8868c69.png?size=2048', 'https://instagram.com/murmurmanx')
 .setDescription('Yardım menüsü komut listesi')
 .setThumbnail('https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048')
 .addFields(
    { name: 'Komutlar CH', value: 'Burada sunucu kanalında kullanılan komutların ne işe yaradığı yazar' },
    { name: '\u200B', value: '\u200B' },
    { name: ';h', value: 'Bu menüyü açar.', inline: true },
    { name: ';pp', value: 'Senin profil fotoğrafını, etiketler isen; etiketlenenin profil fotoğrafını atar.', inline: true },
    { name: ';re', value: `Çıkış yapıp, Discord'dan bağlantısını kesip ve istemciyi yıktıktan*(1) sonra birinci parametre olarak verilen hesabın anahtarı ile giriş yapar. | *(1) Logs out, terminates the connection to Discord, and __destroys__ the client.(https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=destroy)`, inline: true },
    { name: ';q', value: 'İstemciyi yıkar*(1) | *(1) Bir önceki komut acıklama metninde bahsedilmiştir.', inline: true },
    { name: ';kik', value: 'İlk etiketlenen kullanıcıyı sunucudan atar.', inline: true },
    { name: ';x', value: 'İlk parametre ve sonrasını, yazılan kanalda yazı olarak gönderir; ilk parametre tamsayı içeriyorsa; ilk parametre kadar ikinci parametreden sonrasını gönderir', inline: true },
    { name: ';embed', value: 'Belirlenmiş gömülü yazıyı atar.', inline: true },
    { name: ';del', value: 'Gönderdikten sonra ilk parametre kadar mesaj siler.', inline: true },
    { name: ';xp', value: 'Tadilat var.', inline: true },
    { name: ';devletistan', value: 'Kare,toprak kapmaca.', inline: true },
    { name: ';rr', value: 'Baretsiz girilmez.', inline: true },
  
    { name: '\u200B', value: '\u200B' },
    { name: 'Komutlar DM', value: 'Burada direkt mesaj kanalında kullanılan komutların ne işe yaradığı yazar' },
    { name: ';reply', value: 'İlk parametre olarak girilen id´ye sahip olan kullanıcıya mesaj atabilir, dosya gönderebilirsiniz. Mesaj gelirse gönderenin id, etiket ismi ve mesajı mesaj olarak belirlenmiş kişi veya kişilere döner konsola mesajı ve id´yi yazar.', inline: true },

  )
  //.addField('Inline field title', 'Some value here', true)
  .setImage('https://cdn.discordapp.com/avatars/774754600997617704/ed56e63a09c357c60ad3a0f063791130.png?size=128')
  .setTimestamp()
  .setFooter('murmurlab sunar.', 'https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048'); 


const c = new Discord.MessageEmbed()
 .setColor('#ff0000')
 .setTitle('murmurbot help')
 .setURL('https://disboard.org/tr/server/692070157572636733')
 .setAuthor('murmurbot', 'https://cdn.discordapp.com/avatars/707222049755496458/56b98273b152972a9302688cf8868c69.png?size=2048', 'https://instagram.com/murmurmanx')
 .setDescription('Devletistan Geym')
 .setThumbnail('https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048')
 .addFields(
    { name: 'Komuts', value: `damage_modifier:
    diskriminator:
    randomizer:
    create:`},
    { name: '\u200B', value: '\u200B' },
    )
  .addField('Inline field title', 'Some value here', true)
  .setImage('https://cdn.discordapp.com/avatars/774754600997617704/ed56e63a09c357c60ad3a0f063791130.png?size=128')
  .setTimestamp()
  .setFooter('Some footer text here', 'https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048'); 

module.exports = {
  a,
  b,
  c
}