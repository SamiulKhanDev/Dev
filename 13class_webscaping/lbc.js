const request = require('request');
const cheerio = require('cheerio');
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
request(url, function (error,response,html)
{ 
    if (error)
    {
        console.log(error);
    }
    else
    {
        handleHtml(html);    
    }

})


function handleHtml(html)
{
    const selTool = cheerio.load(html);

    const contentArr = selTool(".d-flex.match-comment-padder.align-items-center .match-comment-long-text p");
    console.log(selTool(contentArr[0]).text());
    
    // console.log(contentArr.length);
    // let i = 0;
    // for (let content of contentArr)
    // {
    //     console.log(i + "->>>>>" + $(content).text());
    //     i++;
            
    // }
    
}


// https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard
// hw