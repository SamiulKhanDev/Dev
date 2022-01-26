function helpFn()
{
    const helpString = `
    node FO.js branch  "directory path" 
    node Fo.js organize "directory path" 
    node Fo.js help
    `.green;
    console.log(helpString);
    
}

module.exports = {
    "helpKey":helpFn
}