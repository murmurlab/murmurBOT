const puppeteer = require('puppeteer');



(async () => {

  const browser = await puppeteer.launch({
    headless: false
  });
  const page0 = await browser.newPage()

  async function spawn(){
    await page0.goto('https://starblast.io',{waitUntil: 'load', timeout: 0});

    await page0.evaluate(e=>{
      localStorage.setItem("ECPKey","1de11-8ab9b")
      localStorage.setItem("ECPVerified","yes")
    })

    await page0.goto('https://starblast.io/#450',{waitUntil: 'load', timeout: 0});
    await page0.waitForSelector('#play')
    await page0.click("#play")

      setTimeout(()=>{
        page0.mouse.click(213, 200)
      },20000)
  
  }





  /* const browser = await puppeteer.launch({
    headless: false
  }); */
  const page = await browser.newPage();
  await page.goto('https://starblast.io',{waitUntil: 'load', timeout: 0});
  
  await page.evaluate(e=>{
    localStorage.setItem("ECPKey","1de11-8ab9b")
    localStorage.setItem("ECPVerified","yes")
  })

  await page.goto('https://starblast.io/#450',{waitUntil: 'load', timeout: 0});
  
  await page.waitForSelector("#play")
  await page.click("#play")
  
  console.log("clicked play");

  setTimeout(() => {
    page.mouse.click(213, 200)
    console.log("girdi oyuna")
  }, 10000);

    
  as = function gonder(x,y){
    page0.mouse.click(x,y)
  }

  console.log("gonder declared");
  
  await page.evaluate((gecir)=>{
    console.log(gecir);
    document.getElementById("canvaswrapper").addEventListener("mousedown",(e)=>{
    console.log(e.clientY);
    xek=e.clientX
    yek=e.clientY
      })
  },as)
  
  


  spawn()
  //https://starblast.io/#8287@206.189.197.152:3034
  //await browser.close();
})();