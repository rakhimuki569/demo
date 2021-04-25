// A higher-order function is a function that takes another function(s) as an argument(s) and/or returns a 
// function to its callers.

// A callback function is a function that is passed to another function with the expectation that the other
//  function will call it.

// So a callback is not necessarily itself a higher-order function, but a function that receives a callback
//  as an argument is.
/// call back function
 const sum =(a,b)=>{
     return a+b;
 }
 console.log(sum(10,20));
 const multi =(a,b)=>{
    return a*b;
}
console.log(multi(10,20));

const sub =(a,b)=>{
    return a-b;
}
console.log(sub(10,20));

/// Master function high order function
const calc = (num1,num2,op) => {
    return op(num1,num2);


}
console.log(calc(3,2,sub));
console.log(calc(3,2,sum));
console.log(calc(3,2,multi));