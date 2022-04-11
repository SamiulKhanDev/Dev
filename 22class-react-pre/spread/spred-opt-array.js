let arr = [1, 2, 3, 4];

// let arr2 = arr;

// as we know that array are non-primitive data typs,so both arr2 and arr uses same address ref ,so if we make any change in any one of them,change will be relflected to both

//to handle this poblem we can use spread;
let arr2 = [...arr];
//now arr2 and arr both have diff address

