const fs = require("fs");
const path = require("path");
function treeFn(dirPath)
{

    if (dirPath == undefined)
    {
        console.log("Please provide a path,It cannot be empty");
        return;
    }
    const isPathValid = fs.existsSync(dirPath);
    if (isPathValid == false)
    {
        console.log("the provided path dose not exits,please entered a correct path");
        return;
    }

    treeHelper(dirPath," ");
    console.log("TreeView printed".green);
    

}


function treeHelper(dirPath, indent)
{
    const isFile = fs.lstatSync(dirPath).isFile();
    if (isFile)
    {
        const fileName = path.basename(dirPath);
        console.log(`${indent}├── ${fileName}`.green);
        return;
    }
     
    const folderName = path.basename(dirPath);
    const contentInsideTheFolder = fs.readdirSync(dirPath);

    if (contentInsideTheFolder.length == 0) return;
    console.log(`${indent}  └── ${folderName}`.green);

    for (const content of contentInsideTheFolder)
    {
        const contentPath = path.join(dirPath, content);
        treeHelper(contentPath, indent+"\t");
    }
    
}

module.exports = {
    "treeFnKey": treeFn
}
