const colors = require("colors");
const helpFn = require("../Commands/help").helpKey;
const organizeFn = require('../Commands/organize').organizeFnKey;
const treeFn = require('../Commands/tree').treeFnKey;
const input = process.argv.slice(2);
const command = input[0];
const address = input[1];
switch (command)
{
    case "tree":
        treeFn(address);
        break;
    case "organize":
        organizeFn(address);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Please provided a valid Command");
        break;  
}
