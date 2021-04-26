// pass by value

let a =10;
let b =a;
b=14;
console.log(a);
console.log(b);
//pass by refss
 let obj1={
     name:"Ram",
     age:"22"
 }
 let obj2 = obj1;
 obj2.deg ="M.tech";
 console.log(obj1);
 console.log(obj2);

 let arr1 =[1,2,3]
 let arr2 =[].concat(arr1);
 arr2.push(3);
 console.log(arr2);
 console.log(arr1);