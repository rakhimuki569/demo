// Default function parameters allow named parameters to be initialized with default values 
// if no value or undefined is passed. In JavaScript,
//  function parameters default to undefined. However, it's often useful to set a different default value. 
//  This is where default parameters can help.

// In the past, the general strategy for setting defaults was to test parameter values in the function body
//  and assign a value if they are undefined.


// function abc(a,b){
//     console.log(a*b);
// }
// function abc(a,b=1){
//     console.log(a*b);
// }
function abc(a,b){
    b= (typeof b !== "undefined")?b:1;
    console.log(a*b);
}
abc(4);