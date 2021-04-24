//let name = ['Muki','sharma','technical']
//1:Add javascript at end(create)
//2:tell me tha output of the splice method(read)
//3:update sharma to SHARMA (Update)
//4: delete technical' from array.(Delete).
//* do it by only one method
let names = ['Muki','sharma','technical']
//console.log(names);
//const newNames = names.splice(3,0)
//:read
//const newNames = names.splice(names.length,0)
//:add
//const newNames = names.splice(names.length,0,'javascript')
// if only one element is removed, an arrayof one element is return,-- if noelement are removed an empty array is returned
//:update
//const newNames = names.splice(1,1,"SHARMA")
//delete
const newNames = names.splice(1,2)
console.log(newNames);
console.log(names);
