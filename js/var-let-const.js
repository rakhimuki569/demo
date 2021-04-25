// what is var, let and const in javascript. 
// Differences between var vs let vs const in javascript in Hindi.
//   so, in ECMAScript 2015 let keyword. Let in JavaScript in Hindi.
//    The let statement allows you to declare a variable with block scope. 
// JavaScript const :  
// The const statement allows you to declare a constant (a JavaScript variable with a constant value).
// Constants are similar to let variables, except that the value cannot be changed.


// var myname = "muki";
// console.log(myname);

// let myname = "muki";
// console.log(myname);

// const myname = "muki";
// console.log(myname);

// var myname= "muki";
// myname="mukesh"
// console.log(myname);

// let myname= "muki";
// myname="mukesh"
// console.log(myname);
// const myname= "muki";
// myname="mukesh"
// console.log(myname);

// function myfunction(val){
//     if(val){
//         var names = "Muki";
//         console.log(names);

//     }
// }
// myfunction(true);
// function myfunction(val){
//     if(val){
//         let names = "Muki";
//         console.log(names);

//     }
// }
// function myfunction(val){
    
//     if(val){
//         let names = "Muki";
       

//     }
//     console.log(names);
// }

function myfunction(val){
    var names = "Mukesh";
    if(val){
        var names = "Muki";
       

    }
    console.log(names);
}
myfunction(true);
