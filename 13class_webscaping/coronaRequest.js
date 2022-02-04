const request = require("request");
const cheerio = require("cheerio");


request("https://www.worldometers.info/coronavirus/", function (error, res, html)
{
    if (error)
    {
        console.log(error);
            
    }
    else
    {
        //entire html of the website that i am scraping;
        handleHtml(html);
    }
})


function handleHtml(html)
{

    //cheerio.load(html) converts the html to cheerio's format in selTool var;
    let selTool = cheerio.load(html);//selTool usually gets refer as $;
    let contentArr = selTool(".maincounter-number span");//will return the span inside the maincounter-number class in a array;

    // let len = contentArr.length;
    // for (let idx = 0; idx < len; idx++)
    // {
    //     let data = selTool(contentArr[idx]).text();
    //     console.log(data);
    // }

    for (let content of contentArr)
    {
        let data = selTool(content).text();//have to convert the content to text using selTool().taxt();
        console.log(data);
        
    }



}
