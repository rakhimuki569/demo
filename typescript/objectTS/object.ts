class myClass{
    fname:string;
    lname:string;
    age:number;


    getName(){
        console.log(`My Name is ${this.fname}`);
        

    }

}
 let obj1 = new myClass();
 obj1.fname="Mukesh";
 obj1.getName();