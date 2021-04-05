const ext = require('../ext/ext.js')
const Canvas = require('canvas')
module.exports = { 
  name: 'help',   
  description: 'helping',   
  execute(ch,msg,args,users,lobies,Discord) {
    console.log(`executing`)
    console.log(ch.users)
    switch(args[1]){
        case "crelob":
        if(!users[msg.author.id]){
          users[msg.author.id]={
            
          }
        }
        if(users[msg.author.id].lobi==1)return ch.send(`you already have 1 lobby (max 1 lobby)`)
        if(args[2]==undefined)return ch.send(`use name => crelob lobyname`)
        if(!lobies[args[2]]){
          lobies[args[2]]={}
          users[msg.author.id].oninloby={}
          users[msg.author.id].oninloby[args[2]]=true
          lobies[args[2]].maps={}
          lobies[args[2]].owner=msg.author.id
          lobies[args[2]].members={}
          lobies[args[2]].numofmem=0
          lobies[args[2]].queue={}
          lobies[args[2]].queued=0
          lobies[args[2]].onlines=0
          users[msg.author.id].lobi=1
          users[msg.author.id].lobiname=args[2]
          ch.send(`created loby => ${args[2]}`)
        }else{ch.send(`this loby already exists`)}
        break;
        case "del":
          if(args[2]==undefined)return ch.send(`specify loby name => del lobi`)
          if(!lobies[args[2]]){return ch.send(`this loby not found 404 :=)`)}
          if(lobies[args[2]]['owner']!==msg.author.id){return ch.send(`this loby's owner not you`)}
          
          if(users[lobies[args[2]]['owner']]['oninloby'][args[2]]){
            delete users[lobies[args[2]]['owner']]['oninloby'][args[2]]
          }
          users[lobies[args[2]]['owner']]['lobi']=0
          users[lobies[args[2]]['owner']]['lobiname']=undefined
          delete lobies[args[2]]
          
          ch.send(`deleted ${lobies[args[2]]} named loby`)
        break;
        case "users":
        
        let ul= []
        Object.keys(users).forEach((k,i)=>{
          ul.push([k,[]])
          Object.keys(users[k]).forEach(kk=>{
            if(kk=="oninloby"){
              //console.log(kk)
              
              let xss = [kk,[]]
              ul[i][1].push(xss)
              //console.log(xss)
              
              Object.keys(users[k][kk]).forEach(kx=>{
                let xc = [kx,users[k][kk][kx]]
                ul[i][1][0][1].push(xc)
                //console.log(xc)
              })
            }else{
              let xc = [kk,users[k][kk]]
              ul[i][1].push(xc)
              //console.log(xc)
            }
            
          })
        })
        //ch.send(JSON.stringify(ul))
        let te=``
        for(let i=0;i<ul.length;i++){
te+=`
${ul[i][0]}
${ul[i][1][0]}
${ul[i][1][1]}
${ul[i][1][2]}

`
        }
        
        let e = new Discord.MessageEmbed()
 .setColor('#00ff00')
 .setTitle('murmurbot help')
 .setURL('https://disboard.org/tr/server/692070157572636733')
 .setAuthor('murmurbot', 'https://cdn.discordapp.com/avatars/707222049755496458/56b98273b152972a9302688cf8868c69.png?size=2048', 'https://instagram.com/murmurmanx')
 .setDescription('Bilgilendirme Yazısı')
 .setThumbnail('https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048')
 .addFields(
    { name: 'Devletistan Users',value:`
    ${te}
    `},
    { name: '\u200B', value: '\u200B' },
    )
  .addField('USER LİST', 'murmurmurmurmurmurmur', true)
  .setImage('https://cdn.discordapp.com/avatars/774754600997617704/ed56e63a09c357c60ad3a0f063791130.png?size=128')
  .setTimestamp()
  .setFooter('powered by murmurLAB', 'https://cdn.discordapp.com/avatars/431079005941137418/bf21251b3fd7a7236cac55af470e5a8f.png?size=2048'); 

        ch.send({embed:e})
        break;
        case "lobies":
        let e2 = new Discord.MessageEmbed()
        
        break;
        case "cremap":
        //ch.send(`samet monopoly si yapmayı unutma`)
          if(args[2]==undefined)return ch.send(`specify map name => cremap mapname`)
          if(!users[msg.author.id])return ch.send(`you use before crelob`)
          if(lobies[users[msg.author.id].lobiname].maps[args[2]])return ch.send(`you already have a map this name`)
          ch.send(`creating at ${msg.author.id}`)

          cremap=(x,y)=>{
            map=[]
            for(let yf=0;yf<y;yf++){
                map[yf]=[]
              for(let xf=0;xf<x;xf++){
                map[yf].push([0,false])
              }
        
            }
            map.push(
                //colors
                {
                    
                },
                //info
                {
                  colours:0,
                  coloursq:{
                    
                  },
                  zone:{
                    xmin:0,
                    xmax:10,
                    ymin:0,
                    ymax:10
                  }
                }
            )
            return map
          } 

          lobies[users[msg.author.id].lobiname].maps[args[2]]=cremap(10,10)
          /*
          [
            //0
            [
              [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //1
            [
              [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //2
            [
              [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //3
            [
              [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //4
            [
              [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //5
            [
              [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //6
            [
              [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //7
            [
              [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //8
            [
              [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //9
            [
            [0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false],[9,false]
            ],
            //colors
            {
            
            },
            //info
            {
              colours:0,
              coloursq:{
                
              },
              zone:{
                xmin:0,
                xmax:10,
                ymin:0,
                ymax:10
              }
            }
          ]
          */
          for(let i=3,a=0;i<args.length;i++,a++){
            
            lobies[users[msg.author.id].lobiname].maps[args[2]][10][args[i]]=[]
            lobies[users[msg.author.id].lobiname].maps[args[2]][11].colours++
            lobies[users[msg.author.id].lobiname].maps[args[2]][11].coloursq[a]=args[i]
          }
          
          console.log(lobies[users[msg.author.id].lobiname].maps[args[2]])
          console.log(lobies[users[msg.author.id].lobiname].maps)
          
        break;
        case "login":
        if(!users[msg.author.id]){
          
          users[msg.author.id]={
            'oninloby':{},
            'lobi':null,
            'lobiname':null
          }
          ch.send(`No user to enter was found. => user is creating & entering`)
        }
        if(args[2]==undefined)return ch.send(`which lobby??? => login lobyname`)
        if(!lobies[args[2]])return ch.send(`loby not found`)
        if(lobies[args[2]].members[msg.author.id]){
          if(users[msg.author.id].oninloby[args[2]]==true){return ch.send(`you already in the loby`)}
          lobies[args[2]].onlines++
          users[msg.author.id].oninloby[args[2]]=true
          return ch.send(`welcome again`)
        }
        
        users[msg.author.id].oninloby[args[2]]=true
        lobies[args[2]].numofmem++
        lobies[args[2]].onlines++
        lobies[args[2]].queue[lobies[args[2]].numofmem]=msg.author.id
        lobies[args[2]].members[msg.author.id]={}
        ch.send(`welcome to this loby`)
        break;
        case "queue":
        
        break;
        case "q":
        if(args[2]==undefined)return ch.send(`please specify a loby name`)
        if(users[msg.author.id].oninloby[args[2]]){
          users[msg.author.id].oninloby[args[2]]=false
          lobies[args[2]].onlines--
          
          ch.send(`quitted loby => ${args[2]}`)
        }
        
        break;
        case "damage_modifier":
        
        break;
        case "diskriminator"://ayırtaç vb.
        if(!lobies[users[msg.author.id].lobiname].maps[args[2]])return ch.send(`you don't have the map named ${args[2]}`)
        switch(args[3]){
          case "quadra":
          
          break;
          case "auto":
          
          break;
          case "randomize":
          if(lobies[users[msg.author.id].lobiname].maps[args[2]][11].colours<args[4])return ch.send(`your maps dont have ${args[4]} color`)
          //renk sayısından az "renk konumu koordinat randomu" seçmememek için
          
          
          let b=[]
          //args[4] ün gereği kaç kişi oynuyacaksa okadar random seçmek için 
          for(let i=0,a;i<args[4];i++){
            a = [Math.floor(Math.random()*10)+1,Math.floor(Math.random()*10)+1]
            
            b.push(a)
            }
          console.log(b)
          for(let i=0;i<b.length;i++){
            lobies[users[msg.author.id].lobiname].maps[args[2]][10][lobies[users[msg.author.id].lobiname].maps[args[2]][11].coloursq[i]].push(b[i])
          }
    

    
          const blokxy= 20
          let canvas,ctx

    function ciz(a,b,c){
      const cxxx = a
      const cyyy = b
      canvas = new Canvas.createCanvas(cxxx,cyyy)
      ctx = canvas.getContext("2d")
      ctx.beginPath();
      ctx.fillStyle = "white"
      ctx.fillRect(0,0,a,b)
      
      ctx.fill()
      console.log(a,b,c)
      for(let c2=0;c2<a;c2+=1){
        for(let c1=0;c1<b;c1+=1){
          ctx.beginPath();
          ctx.lineWidth = "1"
          ctx.strokeStyle = "red";
          ctx.strokeRect(c1, c2, 1, 1);
          //console.log(c2,c1)
        }
      }
    }
    ciz(lobies[users[msg.author.id].lobiname].maps[args[2]].length-2,lobies[users[msg.author.id].lobiname].maps[args[2]][0].length,blokxy)
    let attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
    ch.send("sa", attachment)
            function al(x,y,col){
              ctx.beginPath();
              ctx.lineWidth = "1"
              ctx.strokeStyle = col;
              ctx.strokeRect(x, y, 1, 1);
            }
    
            al(3,3,"blue")
            attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
            ch.send("sa", attachment)
            function sec1(){
              for(let sira=0;lobies[users[msg.author.id].lobiname].maps[args[2]][11].coloursq[sira]!==undefined;sira++){
                let reng = lobies[users[msg.author.id].lobiname].maps[args[2]][10][lobies[users[msg.author.id].lobiname].maps[args[2]][11].coloursq[sira]]
              
                
                for(let finish=0;finish<11;){
                  let secik=reng[Math.floor(Math.random()*reng.length)]
                  
                  console.log(secik)
                  let koords = lobies[users[msg.author.id].lobiname].maps[args[2]]
                  //console.log(koords)
                  /*hepsini boyle yap 2d array ulasma teknigi*/console.log(koords[secik[0]+1][secik[1]])
                  console.log(koords[secik[0]-1,secik[1]])
                  console.log(koords[secik[0],secik[1]+1])
                  console.log(koords[secik[0],secik[1]-1])
                  
                  if((koords[secik[0]+1,secik[1]]&&koords[secik[0]+1,secik[1]].length)||(koords[secik[0]-1,secik[1]]&&koords[secik[0]-1,secik[1]].length)||(koords[secik[0],secik[1]+1]&&koords[secik[0],secik[1]+1].length)||(koords[secik[0],secik[1]-1]&&koords[secik[0],secik[1]-1].length)){
                    if(koords[secik[0]+1,secik[1]]&&koords[secik[0]+1,secik[1]].length){
                      if(koords[secik[0]+1,secik[1]][1]==false){
                        al(secik[0],secik[1],lobies[users[msg.author.id].lobiname].maps[args[2]][11].coloursq[sira])
                        reng.push([secik[0]+1,secik[1]])
                        koords[secik[0]+1,secik[1]][1]=true
                        finish++
                      }
                    }else if(koords[secik[0]-1,secik[1]]&&koords[secik[0]-1,secik[1]].length){
                      if(koords[secik[0]-1,secik[1]]==false){
                        al(secik[0],secik[1],lobies[users[msg.author.id].lobiname].maps[args[2]][11].coloursq[sira])
                        reng.push([secik[0]-1,secik[1]])
                        koords[secik[0]-1,secik[1]]=true
                        finish++
                      }
                    }else if(koords[secik[0],secik[1]+1]&&koords[secik[0],secik[1]+1].length){
                      if(koords[secik[0],secik[1]+1]==false){
                        al(secik[0],secik[1],lobies[users[msg.author.id].lobiname].maps[args[2]][11].coloursq[sira])
                        reng.push([secik[0],secik[1]+1])
                        koords[secik[0],secik[1]+1]=true
                        finish++
                      }
                    }else if(koords[secik[0],secik[1]-1]&&koords[secik[0],secik[1]-1].length){
                      if(koords[secik[0],secik[1]-1]==false){
                        al(secik[0],secik[1],lobies[users[msg.author.id].lobiname].maps[args[2]][11].coloursq[sira])
                        reng.push([secik[0],secik[1]-1])
                        koords[secik[0],secik[1]-1]=true
                        finish++
                      }
                    }
                  }else{continue}
                }
              }
            }
            function sec2(){
              
            }
            sec1()
            let secili
            attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
            ch.send("sa", attachment)
          break;
          default:
          ch.send(`use second argument => diskriminator [diskriminators]. Available diskriminators: [quadra,auto,randomize [number of devlet]]`)
          }
        break;
        case "randomizer":
        
        break;
        case "c":
        let code=""
        for(let i=2;i<args.length;i++){
          code+=args[i]+" "
        }
        console.log(code);
        let ee="hata yok"
        try{ch.send(`\`\`\`json
${JSON.stringify(eval(code))}
\`\`\``)}catch(e){if (e) {
          ee=e
        }else{ee="hata yok"}}
        ch.send(`
        \`\`\`${ee}\`\`\`
        `)
        break;
        
        default:
        ch.send(ext.c)
      }
  },
}