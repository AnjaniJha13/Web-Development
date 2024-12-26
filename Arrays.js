/*
let arr = [1,2,3,4,5,7]
//Index -- 0,1,2,3,4,5,6

arr[0] = 5666;
console.log(arr);
console.log(arr,typeof arr);
console.log(arr.length);

console.log(arr[0]);
console.log(arr[7]);

//Arr to String
console.log(arr.toString());

//Join 
console.log(arr.join("and"));

//Pop
arr.pop();

//Push
arr.push(15);
arr.push("Hey");    /* Push(last) - unshift(first)
                       Pop(last)  - shift(first)        */

//Shift
// arr.shift();

// //Unshift
// arr.unshift();

// //Concatenate
// let a1 = [1,2,3];
// let a2 = [4,5,6];
// let a3 = [7,8,9];
//a1.Concat(a2,a3); concat is not a func. error

//Sort
// let a=[7,9,5]
// a.sort()

// //Splice - removing elements
// let num =[1,2,3,4,5]
// num.splice(1,2)

//slice
//remove

//Loops

// let a =[1,93,5,6,88]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value, index , arr)=>{
//     console.log(value, index, arr)
// })

// let obj ={
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (obj.hasOwnProperty.call(obj,key)) {
//         const element = obj[key];
//         console.log(key,element)
//     }
// }

// for (const value of a) {
//     console.log(value)
// }
 let arr =[1,13,5,7,11];
// let newArr = []
// for (let index=0; index<arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)

//}

//map

 let newArr = arr.map((e, index, arr)=>{
     return e**2
 })

console.log(newArr)

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanSeven))