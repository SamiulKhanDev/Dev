// const fs = require("fs");
const xlsx = require("xlsx")
// const buffer = fs.readFileSync("./learnjson.json");
// const json = JSON.parse(buffer);//converts json buffer to json directly;if the buffer is not of a json file's then it will throw error
// // console.log(json);//json is an array of objcets,so we can use all array function to it to maintain CRUD operation


// // json.push({
// //     "name":"samiul",
// //     "last name":"khan",
// //     "age":102,
// //     "address":{
// //         "town":"kolkata",
// //         "state":"WB"
// //     },
// //     "friend":["soum"],
// //     "isAvanger":false
// // })
// //will push the new json(has to be json else in the json file it will automatic change to json or it will be same and the structure will be hampered) to  the end of error
// //this update has been done to this file(json var) only,to updte the original file we have do the following steps

// // const stringFy = JSON.stringify(json)//direct write to json is not possible,we have to convert the updated json to string,
// // fs.writeFileSync('./learnjson.json', stringFy);

// // ------------------------------------------------------------------
// // method 2 is to directly require the json

const data = require("./learnjson.json");


// // data.push({
// //         "name":"mia",
// //         "last name":"khan",
// //         "age":102,
// //         "address":{
// //             "town":"kolkata",
// //             "state":"WB"
// //         },
// //         "friend":["soum"],
// //         "isAvanger":false
// // })
// // const stringFy = JSON.stringify(data)
// // fs.writeFileSync('./learnjson.json', stringFy);

// //xlsx methods to convert json to excel file


// write in excel sheet
// let newWB = xlsx.utils.book_new();//add new work book to currenct directory
// let newWS = xlsx.utils.json_to_sheet(data);//converts json data to new work sheet
// xlsx.utils.book_append_sheet(newWB, newWS,"Avengers");//append sheet to work book wth a sheet name
// xlsx.writeFile(newWB,"abc.xlsx");//write the data to work book with the file name;

// read from excel sheet
// let wb = xlsx.readFile("abc.xlsx");//filePath of your excel file, you want to read ,will return an object of all the sheets of the file;
// console.log(wb);
// let excelData = wb.Sheets["Avengers"];//provide the sheet name you want to read;
// let ans = xlsx.utils.sheet_to_json(excelData);//
// console.log(ans)