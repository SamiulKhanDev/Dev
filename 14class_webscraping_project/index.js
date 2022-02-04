const request = require('request');
const cheerio = require('cheerio');
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(url, callback);

function callback(error, response, html)
{
    if (error)
    {
        console.log(error);
            
    }
    else
    {
        // console.log(html);
        extractLink(html);
            
    }
}

function extractLink(html)
{
    const $ = cheerio.load(html);
    const anchorElement = $('a[data-hover="View All Results"]');
    const link = anchorElement.attr("href");
    
    const homapageLink = "https://www.espncricinfo.com";

    const fullLink = homapageLink.concat(link);
    console.log(fullLink);
    
}