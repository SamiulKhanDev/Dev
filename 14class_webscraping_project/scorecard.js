const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");


request(url, callback);

function callback(error, response, html)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        extractData(html);    
    }
}


function extractData(html)
{
    const $ = cheerio.load(html);
    const description= $(".header-info .description").text().split(",");
    const venue = description[1].trim();
    const date = description[2].trim();
    const result = $(".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text").text();
    const teamsName = $('a[class="name-link"]');
    console.log(venue);
    console.log(date);
    console.log(result);
    for (let name of teamsName)
    {
        console.log($(name).text());
            
    }
    

}