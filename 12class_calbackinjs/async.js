const fs = require("fs");
// const data = fs.readFileSync("f1.txt");
// console.log(data.toString());


//aysnchronous fs expect a path and a call back

fs.readFile("f1.txt", callback);
function callback(error,data)
{
    if (error)
    {
        console.log(error);
        
    }
    else
    {
        console.log(data.toString());
        
    }
}

// steps
//1 first a functions goes to call stack;
//2 node js decided if it is a synchronous or asynchronous function,
//3 if synchronous then it will be invoked imidieatly
//4 if not then it will be moved to api list
//5 from there in a random order it will go to callback queue;
//6 after the thread ends,event will will push the functions from call backQueue to call stack
//and it will continue until callback queue is also exhausted;

