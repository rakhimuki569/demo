let arr=[
    ["open1","open2"],
    ["open3","open4"],
    ["open5","open6"],
    ["open7","open8"],
]
console.log(arr);
let flatarr= arr.reduce((accum,curr)=>{
   return accum.concat(curr);
});
console.log(flatarr);
console.log(flatarr[0])