// JavaScript Rest parameters explained. 
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array. 
// A function's last parameter can be prefixed with ... which will cause all remaining (user supplied)
//  arguments to be placed within a "standard" javascript array

function abc(...inputs){
    console.log(...inputs);
    let total=0;
    for(let i of inputs){
       
        total += i;
    }
    console.log(total);
}

abc(2,3,5,6,4);