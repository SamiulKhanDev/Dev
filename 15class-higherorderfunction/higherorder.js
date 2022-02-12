
// Higher order functions are the functions that operate on other functions
// Higher order functions in JS are for Arrays,

// In simple words a higher order function is a function that recieves a function as an arugument
// or returns the function as output 





let arr = [1, 2, 3, 4];




// Map

// map is itself a function which is predefined in js
//map takes a callback function as an Argumenet
//map will call the callback function as many times as the elemets of the array
//map will return a new Array and won't effect the original array
// the call back in map work upon instructions;


// let cubeArray = arr.map(cube);

// function cube(n)
// {
//     return n * n * n;
// }


// // console.log(arr);
// // console.log(cubeArray);

// let namesArr = ['Shivam Verma', 'Shubham Samrat', 'Ashish Kumar']

// function ln(name)
// {
//     return name.split(" ");
// }
// let firName = namesArr.map(ln);
// // let lastname = namesArr.map(ln)

// // console.log(firName);
// // console.log(lastname);
// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
// const inrtToUsd = 74;

// let inr = transactions.map(func);

// function func(n)
// {
//     return parseFloat((n / inrtToUsd).toFixed(2));
// }
// //toFixed(num) return the decimal with num place after decimal

// console.log(inr);


//Filter
//the call back in filter work upon condition;
// Filter returns a new Array conataining Array Elements that satisfies a particular condition

// if the condition stands true it will filter out those elements in a new Array and will discard all the other Elements

// It works on Boolean value where condition is true or false


// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

// const profit = transactions.filter(function (n)
// {
//     return n > 0;
// })

// console.log(profit);


//Filtered map chaining of method chaining 
// let arr = [
//     { name: "A", age: 14, gender: "M" },
//     { name: "B", age: 34, gender: "M" },
//     { name: "C", age: 24, gender: "F" },
//     { name: "D", age: 44, gender: "F" },
//     { name: "E", age: 44, gender: "M" },
//     { name: "I", age: 28, gender: "F" },
//     { name: "G", age: 36, gender: "M" },
//     { name: "H", age: 47, gender: "F" }
// ];


// let ans = arr.filter(function (n)
// {
//     return n.gender === 'F';
// }).map(function (n) {
//     return n.age;
// })

// console.log(ans);

//Find
//find returns the first elements that statifyes the condition
// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

// const data = transactions.find(function (n)
// {
//     return n > 0;
// })
// console.log(data);

//Some
//return true if at least for one ele the condition matches,like find,here only the boolean returns;
// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
//Every
//return true if all elements matches the condition ,like find,here only the boolean returns;
// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];











