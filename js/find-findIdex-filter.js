//if find value from array that use find index
// it is return value of array
// if no value in array so it is return undefined value
// see Exmple
let arr =[2,5,8,130,44];

// Return first value 


// const newarr = arr.find((elem)=>{
//    return elem;
// });
// console.log(newarr);


// return value given condition


// const newarr = arr.find((elem)=>{
//     return elem > 12; 
//  });
//  console.log(newarr);

//return index by findIndex Method

//  const newarr = arr.findIndex((elem)=>{
//     return elem > 12; 
//  });
//  console.log(newarr);

// find all value that given ondition 

// const newarr = arr.filter((elem)=>{
//     return elem ; 
//  });
//  console.log(newarr);

// argument return index and value

const newarr = arr.filter((elem,index ,ar)=>{
    console.log(`${elem} at ${index}`)
    return elem ; 
 });
 console.log(newarr);