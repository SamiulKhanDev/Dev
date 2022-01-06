
function sayHi()
{
    console.log("hi");
    
}

sayHi();


function sum(a, b)
{
    console.log(a+b);
    
}

sum(3, 4);

function multiply(a, b)
{
    console.log(a*b);
    
}

multiply(4, 5);

function division(a, b)
{
    console.log(parseInt(a/b));
    
}

division(5, 3)


function substaction(a, b)
{
    console.log(a-b);
    
}

substaction(12,3)







function args(...a)//var args
{
    let sum = 0;
    for (let i in a)
    {
        sum += a[i];
    }
    return sum;
}

console.log(args(1, 2, 3, 4));

//self invoking function
let iife = (function(a,b) { 
console.log(a+b);

})(1, 2)




//function are treated as first class citizen in js,we can store functions in variables in js
// func()
let func = function ()
{
    console.log("anonymous function");
    
}
func();


function fu(a, b)
{
    console.log(typeof (a));
    console.log(typeof(b));
    
    
}

fu();





