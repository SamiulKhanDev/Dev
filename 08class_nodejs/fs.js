//file system module;
const fs = require('fs');

//we will read write delete and update in a file

//1 read file

// const value = fs.readFileSync("./1.txt");//value if in buffer format by default;
// const code = fs.readFileSync("./os.js")
// console.log(code.toString());
// console.log(value.toString());

//2 writing to a file
// fs.writeFileSync("./2.txt", "hello word");//this will delete all  other data in that file will only write "hello world",if the file dosen,t exits then it will create the file first,then will write in it;


//3 updating or appending in file
//to append in a file you have to use appendFileSync

// fs.appendFileSync("./1.txt", " appending data to the file")
// fs.appendFileSync("./3.txt", "file not present") //if file not present will create one;

//4 delete a file
// fs.unlinkSync('./3.txt');//unlinkSync is to delete file;
// fs.unlinkSync("./5.txt");//if file not present will throw error;

//
//
//now lets talk about directory
//create ,delete,check a directory exits or not,directory stats,content inside directory

//1 create
// fs.mkdirSync('./mydir');//this will create a direct in './' address named "mydir";//if the directory already exits it will not create again ans throw error;

//2 delete dir
// fs.mkdirSync("./rmdir");
// fs.rmdirSync('./rmdir');//we remove rmdir inside './' address,if the dir not exits will throw error;

//3 check if folder/file exists and it returns true or false;

// let isPresentFolder = fs.existsSync("./mydir");//mydir is present inside './' path so returns true;
// console.log(isPresentFolder);
// let isPresentFile = fs.existsSync("./1.txt");//1.txt is present inside './' path so returns true;
// console.log(isPresentFile);

// let isPresentFile1 = fs.existsSync("./3.txt");//3.txt is not present inside './' path so returns false;
// console.log(isPresentFile1);

//4 check status of file or folder

// let dataFolder = fs.lstatSync("./mydir");//return details of this folder as a json object
// console.log(dataFolder);
// console.log(dataFolder.isFile());//will say if it is a file or not;
// let dataFile = fs.lstatSync("./1.txt");
// console.log(dataFile);
// console.log(dataFile.isDirectory());//will say if it is a folder or not;



























