function sum(a){
    return function(b){
        return function(c){
            console.log(a+b+c)
        }
    }
}
sum(2)(2)(2)

//Currying is a technique of evaluating 
// a function with multiple arguments, into a sequence of functions with a single argument.
// In other words, when a function, instead of taking all arguments at one time, takes the first one and 
// return a new function that takes the second one and returns a new function which takes the third one,
//  and so forth until all arguments have been fulfilled.
// That is when we turn a function call add(1,2,3) into add(1)(2)(3). By using this technique, the little
//  piece can be configured and reused with ease.
// Why it’s useful?
// Currying helps you to avoid passing the same variable again and again.
// It helps to create a higher-order function. It is extremely helpful in event handling. See the blog 
// post for more information.
// Little pieces can be configured and reused with ease.