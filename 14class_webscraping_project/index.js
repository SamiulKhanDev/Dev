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
    // return fullLink;
    getAllMatchesList(fullLink);
    // console.log(scoreCardLinkList);
    
    
}


function getAllMatchesList(fullLink)
{
    request(fullLink, function (error, response, html)
    {
        if (error)
        {
            console.log(error);
        }
        else
        {
            const $ = cheerio.load(html);
            const list = [];
            const scoreCardList = $('a[data-hover="Scorecard"]');
            const homepageLink = "https://www.espncricinfo.com";
            for (let scoreCard of scoreCardList)
            {
                const link = homepageLink.concat($(scoreCard).attr("href"));
                list.push(link);
                
            }

            console.log(list);
            
            
        }
    })
}