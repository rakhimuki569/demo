class myClass{
    fname:string;
    lname:string;
    age:number;

   constructor(fname1:string,lname1:string,ages?:number){
       this.fname = fname1,
       this.lname=lname1,
       this.age = ages

   }
    getName(){
        console.log(`My Name is ${this.fname} ${this.lname}.  my age is ${this.age}`);
        

    }

}
 let obj1 = new myClass("Muki","Sharma");
 
 obj1.getName();