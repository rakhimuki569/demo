// ES6 Object Destructuring explained.  
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
//  or properties from objects, into distinct variables

const bioData ={
    names:"mukesh",
    age:33,
    deg:"B.Tech"
}
let {names,age,deg} = bioData;
console.log(`my name is ${bioData.names} . my age is ${bioData.age}`);
console.log(`my name is ${names} . my age is ${age}`);