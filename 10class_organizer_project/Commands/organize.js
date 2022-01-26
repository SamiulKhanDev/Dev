const fs = require("fs");
const path = require("path");
const types = require('../typeUtility');
function organizeFn(dirPath)
{
    let folderPath;
    const doseFolderPathValid = fs.existsSync(dirPath);
    if (doseFolderPathValid)
    {
        folderPath = path.join(dirPath, "organized_filles");
        if (fs.existsSync(folderPath) == false)
        {
            fs.mkdirSync(folderPath); 
        }
        else
        {
            console.log("Folder already exists".red);
                
        }
    }
    else {
        console.log("Please provide a valid path".red);
        return
    }
    organizeHelper(dirPath, folderPath);
}

function organizeHelper(src, dest)
{
    const filesInTheFolder = fs.readdirSync(src);
    filesInTheFolder.forEach(file => { 
        const filePath = path.join(src, file);
        const isFile = fs.lstatSync(filePath);
        if (isFile.isFile())
        {
            const fileCategory = getCategory(file);
            const folderPath = path.join(dest, fileCategory);
            const ifExists = fs.existsSync(folderPath);
            if (ifExists == false)
            {
                fs.mkdirSync(folderPath);    
            }

            const newFileDes = path.join(folderPath, file);
            
            // console.log(folderPath);
            fs.copyFileSync(filePath, newFileDes);
            console.log(`${file.toUpperCase()} copied to ${folderPath.toUpperCase()}`.green);
            fs.unlinkSync(filePath);

        }
        
    })
    
}

function getCategory(file)
{
    const extname = path.extname(file).slice(1);
    if (types.hasOwnProperty(extname))
    {
        return types[extname];

    }
    return "Unknown"
    
}


module.exports = {
    "organizeFnKey":organizeFn
}