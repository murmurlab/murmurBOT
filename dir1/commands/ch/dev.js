const ext = require('../ext/ext.js')
const Canvas = require('canvas')
module.exports = {
  name: 'help',   
  description: 'helping',   
  execute(ch,msg,args,users,lobies,Discord) {
    console.log(`executing`)
    console.log(ch.users)
    switch(args[1]){
        case "cl":
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
          /*asdsadssadasdasdasdasdasdasdasdas
          dsalşad lasdklas d asdşl kadsl 
          */
          ch.send(`deleted ${lobies[args[2]]} named loby`)
        break;
        case "users":{
        
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
 }
        case "lobies":{
        let l=[]
        let t=``
        Object.keys(lobies).forEach((k,i)=>{
          l[i]=[k,[]]
          t+=`${k}
`
          Object.keys(lobies[k]).forEach((v,p)=>{
            t+=`-${v}`
            if (typeof lobies[k][v]=="object") {
              console.log("object",lobies[k][v]);
              if (Object.keys(lobies[k][v])[0]) {
                Object.keys(lobies[k][v]).forEach(d=>{
                    console.log("bu",v);
                    console.log(d);
                    if (v=="maps") {
                      t+=`
--${d||"yok"} ${typeof lobies[k][v][d]||"yok"}
`
                    }else{
                      t+=`
--${d||"yok"} ${JSON.stringify(lobies[k][v][d])||"yok"}
`
                    }
                })
              }else{
                t+=` {}
`
              }
              
            }else{
              l[i][1][p]=[v,lobies[k][v]]
              t+=` ${lobies[k][v]}
`
            }
          })
        })
        console.log(t);
        
        let e2 = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .addFields(
          { name: 'Devletistan Lobies',value:`
          ${t}
          `},
          { name: '\u200B', value: '\u200B' },
          )
        ch.send({embed:e2})
        break;
        }
        case "cm":{
        //ch.send(`samet monopoly si yapmayı unutma`)
        //amiral battı
        //samet solitare oyunu kaynar kazanlı olan 
          if(args[2]==undefined)return ch.send(`specify map name => cm mapname`)
          if(args.length<5)return ch.send(`specify map color => cm mapname color1 color2 ...`)
          if(!users[msg.author.id])return ch.send(`you use before crelob`)
          if(lobies[users[msg.author.id].lobiname].maps[args[2]])return ch.send(`you already have a map this name`)
          ch.send(`creating at ${msg.author.id}`)

          let cremap=(x,y)=>{
            let map=[]
            for(let yf=0;yf<y;yf++){
                map[yf]=[]
              for(let xf=0;xf<x;xf++){
                map[yf].push([0,false,false])
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
                xmax:x,
                ymin:0,
                ymax:y
                }
              }
            )
            console.log(map.length);
            for(let i=3,a=0;i<args.length;i++,a++){
              map[y][args[i]]=[]
              map[y+1].colours++
              map[y+1].coloursq[a]=args[i]
            }
            for(let i=3;i<args.length;i++){
              map[y]["border"+args[i]]=[]
            }
            return map
          }

          lobies[users[msg.author.id].lobiname].maps[args[2]]=cremap(20,20)
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
          
          
          console.log(lobies[users[msg.author.id].lobiname].maps[args[2]])
          
        break;
        }
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
        if(!users[msg.author.id])return ch.send("you not registered. You use before 'crelob'")
        if(!lobies[users[msg.author.id].lobiname].maps[args[2]])return ch.send(`you don't have the map named ${args[2]}`)
        switch(args[3]){
          case "quadra":
          
          break;
          case "auto":
          
          break;
          case "randomize":{
            let selmap = function selmap(){
              let mapin =  lobies[users[msg.author.id].lobiname].maps[args[2]],
              renkler=mapin[mapin.length-2],
              bilgiler=mapin[mapin.length-1]
    
              return {
                map:mapin,
                up:renkler,
                down:bilgiler
              }
             }
            if(selmap().down.colours<args[4])return ch.send(`your maps not have ${args[4]} color`)
            //renk sayısından fazla "renk konumu koordinat randomu*" seçmememek için

          

          
          let b=[]
          //args[4] ün gereği kaç kişi oynuyacaksa okadar random seçmek için 
          for(let i=0,a;i<selmap().down.colours;i++){
            a = [Math.floor(Math.random()*selmap().down.zone.xmax),Math.floor(Math.random()*selmap().down.zone.ymax)]
            if (b[0]) {
              while (b.some(e=>e[0]==a[0]&&e[1]==a[1])) {
                a = [Math.floor(Math.random()*selmap().down.zone.xmax),Math.floor(Math.random()*selmap().down.zone.ymax)]
              }
            }
            b.push(a)
            }
          console.log(b)
          for(let i=0;i<b.length;i++){  
            selmap().up[selmap().down.coloursq[i]].push(b[i])
            selmap().map[b[i][0]][b[i][1]][2]=true
            selmap().up["border"+selmap().down.coloursq[i]].push(b[i])
          }

         

          const blokxy= 20
          let canvas,ctx

    let ciz = function ciz(a,b,c){
      const cxxx = (a*c)+blokxy
      const cyyy = (b*c)+blokxy
      canvas = new Canvas.createCanvas(cxxx,cyyy)
      ctx = canvas.getContext("2d")
      ctx.beginPath();
      ctx.fillStyle = "white"
      ctx.fillRect(0,0,cxxx,cyyy)
      
      ctx.fill()
      console.log(a,b,c)
      for(let c2=0;c2<(a*c)+blokxy;c2+=c){
        for(let c1=0;c1<(b*c)+blokxy;c1+=c){
          ctx.beginPath();
          ctx.lineWidth = "1"
          ctx.strokeStyle = "red";
          ctx.strokeRect(c1, c2, c, c);
          //console.log(c2,c1)
        }
      }
      ctx.beginPath()
      ctx.font = ""+15+"px Arial";
      ctx.fillStyle = "black";
      for(let y=0;y<a;y++){
        ctx.fillText(y , cxxx-20 ,(y*blokxy)+20 );
      }
      for(let x=0;x<b;x++){
        ctx.fillText(x , x*blokxy ,cyyy );
      }
    }
    ciz(selmap().down.zone.xmax,selmap().down.zone.ymax,blokxy)
    let attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
    ch.send("sa", attachment)
            let al = function al(x,y,col,fill){

              if (fill) {
                let x1=x*20,y1=y*20
                ctx.beginPath();
                //ctx.lineWidth = "7"
                ctx.fillStyle = col;
                ctx.fillRect(x1, y1, blokxy, blokxy);  
              } else {
                let x1=x*20,y1=y*20
                ctx.beginPath();
                ctx.lineWidth = "7"
                ctx.strokeStyle = col;
                ctx.strokeRect(x1, y1, blokxy, blokxy);  
              }

            }
    
            al(3,3,"blue")
            attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
            ch.send("sa", attachment)
            let sec1 = function sec1(){
              for(let sira=0;selmap().down.coloursq[sira]!==undefined;sira++){
                let reng = selmap().up[selmap().down.coloursq[sira]]
                console.log("reng    ",reng);
                //kişi başı 11 kare diye...
                for(let finish=0;finish<50;/*finish++*/){
                  //secik: rengin sahip oldupu karelerin rasgele birisinin koordinatlarını seçer
                  let secik=reng[Math.floor(Math.random()*reng.length)]
                  
                  
                  console.log("rasgele sahip kare ",secik)
                  console.log("tüm sahip kareler ",reng);
                  let koords = selmap().map
                  //console.log(koords)
                  let morp = Math.round(Math.random())*2-1
                  let xory = Math.round(Math.random()*1)

                  let secikob={
                    x:"none",
                    y:"none",
                    e:"none"
                  }
                  if (((0>secik[0]-1)||(0>secik[1]-1))||((selmap().down.zone.xmax-1<secik[0]+1)||(selmap().down.zone.ymax-1<secik[1]+1))) {
                    if (0>secik[0]-1) {
                      secikob.x="-"
                      secikob.e=true
                    }
                    if (0>secik[1]-1) {
                      secikob.y="-"
                      secikob.e=true
                    }
                    if (selmap().down.zone.xmax-1<secik[0]+1) {
                      secikob.x="over"
                      secikob.e=true
                    }
                    if (selmap().down.zone.ymax-1<secik[1]+1) {
                      secikob.y="over"
                      secikob.e=true
                    }
                  }
                  (morp>0&&secikob.x=="none")
                  console.log(secikob);
                  if (((koords[secik[0]+1]&&koords[secik[0]+1][secik[1]])&&(koords[secik[0]+1][secik[1]][1]!==true))||((koords[secik[0]-1]&&koords[secik[0]-1][secik[1]])&&(koords[secik[0]-1][secik[1]][1]!==true))||((koords[secik[0]]&&koords[secik[0]][secik[1]+1])&&(koords[secik[0]][secik[1]+1][1]!==true))||((koords[secik[0]][secik[1]-1]&&koords[secik[0]][secik[1]-1])&&(koords[secik[0]][secik[1]-1][1]!==true))) {
                    
                    if (xory==1  /*x bura */) {
                      /* if (secikob.e==true&&secikob.x=="over") {
                        
                      } */
                      if (koords[secik[0]+morp][secik[1]]) {
                        if (koords[secik[0]+morp][secik[1]][1]==false) {
                          lobies[users[msg.author.id].lobiname].maps[args[2]][secik[0]+morp][secik[1]][1]=true
                          lobies[users[msg.author.id].lobiname].maps[args[2]][lobies[users[msg.author.id].lobiname].maps[args[2]].length-2][selmap().down.coloursq[sira]].push([secik[0]+morp,secik[1],selmap().down.coloursq[sira]])
                          finish++
                        }
                      }
                    }else{
                      if (lobies[users[msg.author.id].lobiname].maps[args[2]][secik[0]][secik[1]+morp]) {
                        if (lobies[users[msg.author.id].lobiname].maps[args[2]][secik[0]][secik[1]+morp][1]==false) {
                          lobies[users[msg.author.id].lobiname].maps[args[2]][secik[0]][secik[1]+morp][1]=true
                          lobies[users[msg.author.id].lobiname].maps[args[2]][lobies[users[msg.author.id].lobiname].maps[args[2]].length-2][selmap().down.coloursq[sira]].push([secik[0],secik[1]+morp,selmap().down.coloursq[sira]])
                          lobies[users[msg.author.id].lobiname].maps[args[2]][secik[0]][secik[1]+morp]
                          if (((selmap().map[secik[0]][secik[1]+morp+1]&&!selmap().map[secik[0]][secik[1]+morp+1][1])||!selmap().map[secik[0]][secik[1]+morp+1])||
                              ((selmap().map[secik[0]][secik[1]+morp-1]&&!selmap().map[secik[0]][secik[1]+morp-1][1])||!selmap().map[secik[0]][secik[1]+morp-1])||
                              ((selmap().map[secik[0]+1][secik[1]+morp]&&!selmap().map[secik[0]+1][secik[1]+morp][1])||!selmap().map[secik[0]+1][secik[1]+morp])||
                              ((selmap().map[secik[0]-1][secik[1]+morp]&&!selmap().map[secik[0]-1][secik[1]+morp][1])||!selmap().map[secik[0]-1][secik[1]+morp])) {
                                selmap().map[secik[0]][secik[1]+morp][2]=true
                            }
                          //sınırlist -
                          //sınırdepo -
                          //aldığın karenın sağ sol ön arka karelerinin herangi birinin sınırlarını kapattıysan o kareyi rengin sınır karelerinden çıkar ve haritada o karenin sınır işaretini kaldır  
                          finish++ 
                          
                        }
                      }
                    }
                  }//--
                }
              }
              console.log(selmap().map);
/*               console.log(selmap().up.red);
              console.log(selmap().up.green); */
            }
            let sec2 = function sec2(){
              Object.keys(selmap().down.coloursq).forEach(e=>{
                selmap().up[selmap().down.coloursq[e]].forEach(a=>{
                  al(a[0],a[1],selmap().down.coloursq[e],false)
                })
                //sınırları düşük ton renklemek
                selmap().up["border"+selmap().down.coloursq[e]].forEach(a=>{
                  al(a[0],a[1],selmap().down.coloursq[e],true)
                })
              })
            }
            sec1()
            sec2()
            //let secili
            attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
            ch.send("sa", attachment)
          break;
          }
          default:
          ch.send(`use second argument => diskriminator [diskriminators]. Available diskriminators: [quadra,auto,randomize [number of devlet]]`)
          }
        break;
        case "randomizer":
        
        break;
        case "c":{
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
      }
        default:
        ch.send(ext.c)
      }
  },
}