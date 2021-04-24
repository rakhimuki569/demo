let data = [
    {name:"ramesh", age:33},
    {name:"rakesh", age:33},
    {name:"suresh", age:null},
    {name:"mahesh", age:undefined},
    {name:null, age:undefined},

]
// const newarr=data.filter((elem)=>{
//  return elem.age
// });
// console.log(newarr);


/// filter method are use to filter null and undefined becauge null == undefined is true but null === undefined is false


const newarr=data.filter((elem)=>{
    console.log(elem.age);
    return elem.age != undefined;
   });
   console.log(newarr);