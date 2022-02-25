const fs = require("fs");

// const f1p = fs.promises.readFile("f1.txt");
// const f2p = fs.promises.readFile("f2.txt");
// const f3p = fs.promises.readFile("f3.txt");

// f1p.then(function (data)
// {
//     console.log(data.toString());
//     f2p.then(function (d1)
//     {
//         console.log(d1.toString());
//         f3p.then(function (d2)
//         {
//             console.log(d2.toString());
            
//         })
//     })
    
// })

//improvement


// const fs = require("fs");

// let f1p = fs.promises.readFile("f1.txt");



// function cb(data) {
//   console.log("File Data-> " + data);
//   let f2p = fs.promises.readFile("f2.txt");
//   return f2p
// }

// function cb2(data) {
//   console.log("File Data-> " + data);
//   let f3p = fs.promises.readFile("f3.txt");
//   return f3p
// }

// function cb3(data) {
//   console.log("File Data-> " + data);
// }

// //Improvement ->

// f1p.then(cb).then(cb2).then(cb3).catch(function(err){
//        console.log(err)
// });