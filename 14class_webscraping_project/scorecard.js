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
    // const teamsName = $('a[class="name-link"]');
    // console.log(venue);
    // console.log(date);
    // console.log(result);
    
    const innings = $(".card.content-block.match-scorecard-table .Collapsible");
    let htmlString = "";
    // let idx = 0;
    for (let i = 0; i < 2;i++)
    {
        htmlString += $(innings[i]).html();    
        const teamName = $(innings[i]).find("h5").text().split("INNINGS")[0].trim();
        const oIndex = (i == 0 ? 1 : 0);
        const opponentName = $(innings[oIndex]).find("h5").text().split("INNINGS")[0].trim();
        // console.log(teamName+" "+opponentName);
       
        
        let allRows = $(innings[i]).find('.table.batsman tbody tr');
        
        for (let j = 0; j < allRows.length; j++)
        {
            let allCols = $(allRows[j]).find("td");
            let isWorthy = $(allCols[0]).hasClass("batsman-cell");
            if (isWorthy)
            {
                let playerName = $(allCols[0]).text();
                let runs = $(allCols[2]).text();
                let balls = $(allCols[3]).text();
                let fours = $(allCols[5]).text();
                let six = $(allCols[6]).text();
                let str = $(allCols[7]).text();
                console.log(playerName +" "+runs+" "+balls+" "+fours+" "+six+" "+str);
            }
        }

        console.log("`````````````````````````````````````````````````");
      
    }

    // console.log(htmlString);
    

    

}

module.exports = extractData;