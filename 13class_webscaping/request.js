const request = require("request");//ayschronous 
// console.log(request);

request("https://www.worldometers.info/coronavirus/", function (error, res, body)
{
    console.log("Error: ", error);
    console.log("res: ", res && res.statusCode);
    console.log("Body: ",body);

})
