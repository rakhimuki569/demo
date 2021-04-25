// New String Methods introduced in 2015. In ES6, four new methods were added to String. 
// These methods are like a boon for programmers when it comes to string manipulation in JavaScript.
//  In day to day programming, we often deal with strings.
//   The first three methods also reduce the dependency on Regular Expression RegExp for certain tasks. 
//   Four ES6 New String Methods are described below:

// 1: startsWith( queryString, position ) Method: 

// 2: endsWith( queryString, length ) Method: 

// 3: includes( queryString, position ) Method: 

// 4: repeat( count ) Method

let names = "mukesh";
console.log(`${names}`.startsWith("m"));
console.log(`${names}`.endsWith("h"));
console.log(`${names}`.includes("muk"));
console.log(` ${names}`.repeat(2));