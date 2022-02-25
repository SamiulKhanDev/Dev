//promises in js
//promises has 4 stages ,
//i)pending
//ii)fullfil or
//iii)reject
//iv)settled(after promise gets reject or fulfilled);


//fs module also have a promises keyword

const fs = require("fs");

// console.log("start");


// //pending stage
// const promise = fs.promises.readFile("../.gitignore");
// //then handles fullfil stage
// promise.then(function (data)
// {
//     console.log(data.toString());
    
// })

// //catch handle reject stage
// promise.catch(function (err)
// {
//     throw new Error("There is an error");
    
// })

// console.log("end");


// let data =promise.then(function (data)//data will be promise
// {
//     return data.toString();
    
// })

// console.log(data);


//constructing promises in js

//promise is essentially a object,so we need a constructor for this,constructor takes a function which takes to more callbacks resolve() and reject(); 

// const promise = new Promise(function (resolve, reject)
// {
//     let a = "samiul";
//     let b = "smiul";

//     if (a === b)
//     {
//         resolve();//resolve is attached to then;
//     }
//     else
//     {
//         reject();//reject is attached to catch;
//     }
// });

// promise
// .then(function ()
// {
//     console.log("equal");
    
// })
// .catch(function ()
// {
//         console.log("error");
        
// })
// let myPromise = new Promise(function(resolve , reject){
//     let a = 'pepcoders'
//     let b = 'Pepcoders'

//     if(a===b){
//            resolve('The values are Equal')//the value inside resolve parenthesis will be returned if promise gets fulfilled
//            // resolve function is responsible for fulfillment of Promise
//     }

//     else{
//         reject('NO , The values are Not Equal')//the value inside resolve parenthesis will be returned if promise gets rejected
//         //reject is attached to catch;
//     }
// })

// myPromise.then(function(result){
//      console.log(" " + result)
// })


// myPromise.catch(function (result) {
//     console.log(" " + result)
// })

//promises cb goes to microtask queue,and loop gives more priority to microtask queue over call back queue
