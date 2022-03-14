const inquirer = require("inquirer");
const cp = require("child_process");
// inquirer.prompt([
//     {
//         type: "list",
//         name: "selection",
//         choices:["About","Skills","Academics","Projects","Github"]
//     }
// ]).then(function (ans)
// {
//     switch (ans.selection)
//     {
//         case "About":
//             console.log("About");
//             break;
//         case "Skills":
//             console.log("Skills");
//             break;
//         case "Academics":
//             console.log("Academics");
//             break;
//         case "Projects":
//             console.log("Projects");
//             break;
//         case "Github":
//             cp.execSync(`open -a "Google Chrome" https://github.com/SamiulKhanDev`);
            
//     }
    
// }).catch(function (err)
// {
//     console.log(err);
    
// })


function func()
{
    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            choices:["About","Skills","Academics","Projects","Github"]
        }
    ]).then(function (ans)
    {
        switch (ans.selection)
        {
            case "About":
                console.log("About");
                goBack();
                break;
            case "Skills":
                console.log("Skills");
                goBack();
                break;
            case "Academics":
                console.log("Academics");
                goBack();
                break;
            case "Projects":
                console.log("Projects");
                goBack();
                break;
            case "Github":
                cp.execSync(`open -a "Google Chrome" https://github.com/SamiulKhanDev`);
                goBack();
                
        }
        
    }).catch(function (err)
    {
        console.log(err);
        
    })
    
}

func();

function goBack()
{
    inquirer.prompt([
        {
            type: "list",
            name: "key",
            choices:["goBack","exit"]
        }
    ]).then(function (key)
    {
        if (key.key == "goBack")
        {
            func();    
        }
        else 
        {
            console.log("Process Done");
            
            // process.exit();    
        }
    })
}