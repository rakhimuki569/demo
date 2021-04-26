// What is this keyword in javascript in Hindi.
//  What is “this” keyword in JavaScript. 
//  this keyword refers to an object, 
//  that object which is executing the current bit of javascript code.
//   In other words, every javascript function while executing has a reference to its current execution context,
//    called this. Execution context means here is how the function is called.
// console.log(this);
// function abc(){
//     var add =2+5;
//     console.log(add)
//     console.log(this);
// }
// abc();
 const obje ={
     names:"muki",
     sum:function(){
         console.log(this);
     }
 }
 obje.sum();