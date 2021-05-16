var myClass = /** @class */ (function () {
    function myClass(fname1, lname1, ages) {
        this.fname = fname1,
            this.lname = lname1,
            this.age = ages;
    }
    myClass.prototype.getName = function () {
        console.log("My Name is " + this.fname + " " + this.lname + ".  my age is " + this.age);
    };
    return myClass;
}());
var obj1 = new myClass("Muki", "Sharma");
obj1.getName();
