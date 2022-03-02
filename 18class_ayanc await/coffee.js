function promisifiedForOrder(order)
{

    return new Promise(function (resolve, reject) {
        
        if (order === "Coffee")
        {
            console.log("Coffee order");
            resolve(new Promise(function (resolve, reject)
            {
               
                console.log("Coffee is been processed");
                resolve("order complete")
            }));
            
        }
        else
        {
            reject("Wrong Order");    
        }
    })
}

// promisifiedForOrder("Coffee").then(function (d1)
// {
//     return d1;
    
// }).then(function (d2)
// {
//    console.log(d2);
   
// }).catch(function (err)
// {
//     console.log(err);
    
// })

async function handle(order)
{
    const data = await promisifiedForOrder(order);
    // const dd = await data;
    console.log(data);
    
}

handle("Coffee")
// console.log("no");
