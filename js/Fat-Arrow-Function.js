// what is Fat Arrow Functions in JavaScript in Hindi 2020? 
// Fat Arrow Function ES6 explained. 
// ES6 fat arrow functions have a shorter syntax compared to function expressions 
// and lexically bind this value. Arrow functions are always anonymous and effectively turn function (arguments) 
// { expression } into arguments fat arrow symbol expression.


// function abc(){
//     let a=10;
//     let b=12;
//     console.log(a+b);

// }
// abc();
 

const abc = (a,b)=> a+b;
console.log(abc(2,4));