const puppeteer = require('puppeteer');

const puppeteerWillLaunchBrwoser = puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
  });//headless= true,means it's working will not be visible

puppeteerWillLaunchBrwoser
.then(function (browserInsatant)
{
    console.log("browser opened");
    
    return browserInsatant.newPage();
            
}).then(function (newTabInstant)
{
    console.log("tab opened");
    return newTabInstant.goto("https://www.pepcoding.com");
    
}).then(function (websiteInstant) { 
    
    console.log("maze kar");
    
})

