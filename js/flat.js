//ECMAScript 2020 New Features 🤩 Convert 2D, 3D, 4D Array To 1D Array in JavaScript - flat method
let arr=[
    ["open1","open2"],
    ["open3","open4"],
    ["open5","open6"],
    ["open7","open8",["open9","open10"]]
]
let flatarr = arr.flat(2);
console.log(flatarr);