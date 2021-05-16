//  let namets =(fname)=>{
//      console.log(fname);
     
//  }
//  namets(22);


// let namets =(fname:string)=>{
//     console.log(fname);
    
// }
// namets("mukiDon");

// let namets =(namepro)=>{
//     console.log(namepro.lname);
    
// }
// namets({
//     fname:"mukiDon",
// lname:"sharma"});


/// interface
interface Namepro{
    fname:string,
    lname:string;
}
let namets =(namepro:Namepro) =>{
    console.log(namepro.fname);
    
}
namets({
    fname:"Mukesh",
lname:"sharma"});