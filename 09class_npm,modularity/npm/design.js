const figlet = require('figlet');

figlet("hello world", {
    font: 'Ghoulish'
   
}, function (err, data)
{
    if (err)
    {
        console.log("something went wrong");
        return;
    }
console.log(data);


 })