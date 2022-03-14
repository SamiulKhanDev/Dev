const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        "name": "selectedAnswer",
        choices:["choice1" ,"choice2"]
    }
]).then(function (ans)
{
    switch (ans.selectedAnswer)
    {
        case "choice1":
            console.log("i chooses choice1");
            break;
        case "choice2":
            console.log("i chooses choice2");
            break;
        
            
    }
    
}).catch(function (err)
{
    console.log(err);
    
})