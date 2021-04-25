// what is Template Literals in ES6 ?
//  ES6 Template Literals.
//   Template literals are string literals allowing embedded expressions. 
//   You can use multi-line strings and string interpolation features with them.
// They were called "template strings" in prior editions of the ES2015 specification.
//  Template literals are enclosed by the backtick (` `)  (grave accent) character instead of double or single quotes.

// Template literals can contain placeholders.
//  These are indicated by the dollar sign and curly braces (${expression}). 
//  The expressions in the placeholders and the text between the backticks (` `) get passed to a function.   

let names ="mukesh";
let surname = "sharma";
// console.log("my name is "+names+"and "+surname);
console.log(`my name is ${names} and ${surname}`);