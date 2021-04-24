let arr1  =[2,4,5,7];
// let sum = arr1.reduce((accum,curr)=>{
//    return accum*curr;
// },2)
// console.log(sum);
let avg = arr1.reduce((accum,curr,index,array)=>{
    let total = accum += curr;
    if(index == array.length-1){
        return total/array.length;
    }
  return total;
})
console.log(avg);