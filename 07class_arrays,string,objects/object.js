// //js objects



// //to declare an obj




// // let obj = {};//this is an object,in js objects are just key value pair like hashmap in java

// // let person =
// // {
// //     name: "Samiul",
// //     age: 15,
// //     show: function ()
// //     {
// //         console.log(this.name);
            
// //     }
// // }


// // person.show();

// // const car = 
// // {
// //     nameOfThis: "Ferrari",
// //     model: "f15 eagle",
// //     "year of release": 2001,
// //     origin: "USA",
// //     show: function ()
// //     {
// //         console.log(this.nameOfThis+" "+this.model+" "+this.origin);
            
// //     }

// //     // cal: (function (a ,b) { 
// //     //         console.log(a*b);
            
// //     // })(10,9)
    
// // }

// // // car.show();
// // // car.cal;

// // // car.nameOfThis = "lambo"
// // console.log(car.name);


let cap = 
{
    FirstName: "Steve",
    LastName: "Rogers",
    Friends: ["Bucky", "Hulk", "Thor"],
    age: 202,
    isAvenger: true,
    calCulateMyAge: (function (a, b) {
        return a * b;
    })(10, 9),
   
    address:
    {
        state: "New York",
        pin:711316
    },
    sayHi: function ()
    {
         console.log("Hello world");    
    }
    ,
    size: function ()
    {
        let count = 0;
        for (let key in this)
        {
            count++;
        }

        return count;
    }
}

// console.log(cap);

// //to access the property we can use dot notation or bracket notation;

// //example
// console.log(cap.FirstName);
// console.log(cap["FirstName"]);

// console.log(cap.address.state);
// console.log(cap.sayHi());
// console.log(cap["address"]["state"]);

//for in loop;


// console.log(cap.size());
// cap.home = "shield";
// console.log(cap.size());
// for of will not work for objects

//update a value in cap

cap.isAvenger = false;
//insert a value in cap;

cap.moves = ["age of ultruen"];

console.log(cap);

//to delete a property  use "delete"

delete cap.moves;
console.log(cap);

//if you declare a obj with const you can update the values also;

let nameOfThis = "samiul"
let data = 
{
    nameOfThis: nameOfThis
}

console.log(data.nameOfThis);














