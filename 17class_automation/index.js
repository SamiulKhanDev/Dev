const puppeteer = require('puppeteer');

const loginLink = "https://www.hackerrank.com/auth/login";
const EMAIL = "sayibe8275@shackvine.com";
const PASSWORD = "12345678";
let page;
const browserOpenPromise = puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
  })

browserOpenPromise.then(function (browserInstant)
{
    return browserInstant.newPage();
}).then(function (newTab)
{
    page = newTab;
    return newTab.goto(loginLink);
}).then(function ()
{
    return page.type("#input-1", EMAIL, {delay:50});
    
}).then(function ()
{
    return page.type("#input-2", PASSWORD, {delay:50});
}).then(function ()
{
    return page.click("button[data-analytics='LoginPassword']", {delay:50});
})


