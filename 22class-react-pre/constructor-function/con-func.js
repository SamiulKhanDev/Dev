function Car(name, model, color)
{
    this.name = name;
    this.model = model;
    this.color = color;
}


const car1 = new Car("BWM", 2017, "white");
console.log(car1.color);

//now new will assign "this" of Car to a empty obj;
