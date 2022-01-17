function add(a, b)
{
    return a + b;
}
function sub(a, b)
{
    return a - b;
}

function mul(a, b)
{
    return a * b;
}

function div(a, b)
{
    return a / b;
}




module.exports = 
{
    Addition: add,
    Substraction: sub,
    Division: div,
    Multiplication:mul,
}

//module .exports is a object provided by node js
//by which you can export your function in key value pair
//you will use your function with the keys that you have assigned to them



