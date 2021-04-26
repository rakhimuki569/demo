// JavaScript Spread Operator explained. Spread Operator in ES6.
// Spread operator allows an iterable to expand in places where 0+ arguments are expected.
//  It is mostly used in the variable array where there is more than 1 value is expected.
//   It allows us the privilege to obtain a list of parameters from an array. 
//   Syntax of Spread operator is the same as the Rest parameter but it works completely opposite of it.
//es5
function sum(a,b,c){
    console.log(a+b+c);
}
//sum(1,2,3);
var arrval = [1,2,7];
sum.apply(null,arrval)
//es6 replace apply method
// sum(...arrval);
let arr1=[1,2,3];
let arr2=[4,5,6,7];
// arr1 = arr1.concat(arr2);
// replace concate method
arr1 = [...arr1,...arr2]


console.log(arr1);

