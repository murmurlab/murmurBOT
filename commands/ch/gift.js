const ext = require('../ext/ext.js')
module.exports = { 
  name: 'help',   
  description: 'helping',   
  execute(ch,msg) {
    console.log(`executing`)
    const chars = "abcdefghijklmnoprstuvyzqwxABCDEFGHIJKLMNOPRSTUVYZQWX1234567890"
    const arr = chars.split("")
    let res = ""
    let res2 = ""
    function send(){
      for(let b=0;40>b;b++){
      for(let a=0;16>a;a++){
      res += arr[Math.floor(Math.random()*arr.length)]
      }
      res2+=`https://discord.gift/${res}
`;
      res="";
      }
      ch.send(res2)
      res2=""
    }
    setInterval(send,3000)
  },}