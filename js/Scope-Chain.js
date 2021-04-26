// The scope chain is used to resolve the value of variable names in javascript.
//  Without a scope chain, the Javascript engine wouldn't know which value to pick for a certain variable name
//   if there are multiply defined at different scopes. The scope chain in javascript is lexically defined, 
//   which means that we can see what the scope chain will be by looking at the code.
// At the top of the scope, the chain is the global scope, 
// which is the window object in the browser (global in NodeJS). 
// Besides from the global scope, functions have their own scoping of variables.
//  The scope chain can be determined by looking at where functions are defined.

// When resolving a variable, inner functions first look at their own scope. 
// If the variable cannot be found in its own scope it will climb up the scope chain and looks for the 
// variable name in the environment where the function was defined.
var c="vijay";
 function first(){
     var a ="rahul";
     Seconds();
     function Seconds(){
         var b="ramesh"
         console.log(a+b);
         third();
     }
 }
 function third(){
     var d="muki";
    console.log(c+d);
 }
 first();