// const addFunc = function (a,b)
// {
//  console.log(a+b);
// }
// const addFunc = (a,b)=>
// {
//     console.log(a + b);
// }
// // addFunc(1, 2);
// const func = () => { 
//     console.log(this);
    
// }
// func();

let person = {
    name: "Adam",
    age: 122,
    show: function ()
    {
        console.log(this);
            
    },
    showArrow: () => {
        // console.log(this);
        // console.log(person.age+" "+person.name);
    }
}

person.showArrow();

//for arrow function 'this'' is an empty object dosen,t matter where is the arrow function is;
//but if a key has a normal function and insdie that a arrow functtion then it will have access to object itself in 'this'