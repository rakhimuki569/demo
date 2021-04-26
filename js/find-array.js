// data types in Advanced Javascript in Hindi. JavaScript makes an arbitrary distinction between values:
//  Primitive values and Objects. Primitive values include boolean, numbers, strings, null and undefined.
//   While everything else in a JavaScript is said to be an object which means window, JSON, Math, and 
//   even functions and arrays are Objects as well. 
//  Primitive data type vs Non-Primitive data types also covered.

let array =[1,2,3];
console.log(array);
let arr ={
    0:1,
    1:2,
    2:3
}
console.log(arr);
console.log(typeof(array));
console.log(typeof(arr));
console.log(Array.isArray(array));
console.log(Array.isArray(arr));