const puppeteer = require('puppeteer');
const code = require("./code");

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
}).then(function ()
{
    let algoSecClickedPromise = waitAndClick("a[data-attr1='algorithms']", page);
    return algoSecClickedPromise;
}).then(function ()
{
    return waitAndClick("input[value='warmup']", page);
}).then(function ()
{
    let allQuestionsArrayPromises = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
    return allQuestionsArrayPromises;
}).then(function (totalQuestion)
{
    let questionWillBeSolved = questionSolver(page, totalQuestion[0], code.answers[0]);
    return questionWillBeSolved;
    
})

function questionSolver(page, question, answer)
{
    return new Promise(function (resolve, reject)
    {
        let questionWillBeClickedPromise = question.click();
        questionWillBeClickedPromise.then(function ()
        {
            // console.log("question clicked");
            return waitAndClick(".checkbox-input", page);
            
        }).then(function ()
        {
                return  page.type("#input-1",answer,{delay:10})
            
        }).then(function ()
        {
            return page.keyboard.down('Command');
        }).then(function ()
        {
            return page.keyboard.press("A",{delay:100});
        })
    })
}

function waitAndClick(selector, cpage)
{
    return new Promise(function (resolve, reject)
    {
        const waitForNextPage = cpage.waitForSelector(selector);
        waitForNextPage.then(function ()
        {
            let clickModel = cpage.click(selector, { delay: 50 });
            return clickModel;
        }).then(function ()
        {
            resolve()
        })
            .catch(function ()
            {
                reject()
            })
    })
}


