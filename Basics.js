console.log("Addition of two numbers");
//Old javascript - var
//Modern javascruipt - let
//typeof Null - object (Due to old spec)
let a = 5;

let b = 6;
let c ="Hello Duniya";
let _a="Shubham";
//let55a = "Rohan";  -- Not Allowed
a = a + 1;

console.log(a + b);
console.log(typeof a, typeof b, typeof c);

const a1 = 6;
//a1 = a1 + 1;  -- (constant has fixed value) -- Not Allowed

{
    let a = 66;
    console.log(a)
}
console.log(a)

let x = "Happy Lucky";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

let o ={
    "name": "Akshay",
    "job code": 5600,
    "is_skilled": true
}
console.log(o);
o.salary = "100crores"
console.log(o);
o.salary = "500crores"
console.log(o);