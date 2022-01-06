// //js is dynamically typed lan,as there is no need to specify the type;
// //variable declaration
// //var,let,const

// // "use strict" will enable strict mode 
// //var
// var a;//this will always be declared with an undefined value;
// console.log(a +" "+typeof(a));//print undefined

// a = 3;
// console.log(a+" "+typeof(a));//print 3

// a = "i am string";
// console.log(a+" "+typeof(a));//print string

// a = true;
// console.log(a+" "+typeof(a));//print boolean

// a = null;
// console.log(a + " " + typeof (a));//print null;

// var ch = 'a';//this is also string
// var str = "hfh"//string

// console.log(typeof (ch) + " " + typeof (str));


//problems with var keyword

//1) Redeclartion  problem

// var a = "samiu";
// console.log(a);
// var a = "khan";
// console.log(a);
//this problem can create confusion,bugs,logical error;

//to solve this we use "let"

// let a = "samiul";
// console.log(a);
// let a = "khan";
//let won't allow this,will throw error,but re assign is allowed in "let"

//2) var has global level scope,while let has block level scope;
//example

// for (var i = 0; i < 10; i++)
// {
//     console.log(i);
        
// }
// console.log(i);//i will also avalible here;
// to overcome this use let
//ex 2
// if (true)
// {
//     var a = "2";
//     console.log(a);
// }
//     console.log(a);

// if (true)
// {
//     let a = "ghost";
// }
    
// console.log(a);//a is not present,as let is block scoped,so outside a block it is not present; 

    
// if (true)
// {
//     let b = "jkkja";
//     console.log(b);
    
// }
    
// let b = "ka";
// console.log(b);
// this will work as both the let have different scoping


//const

//const dosent allow redeclearion and reasiggn;







