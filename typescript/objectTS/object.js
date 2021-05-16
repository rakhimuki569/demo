var myClass = /** @class */ (function () {
    function myClass() {
    }
    myClass.prototype.getName = function () {
        console.log("My Name is " + this.fname);
    };
    return myClass;
}());
var obj1 = new myClass();
obj1.fname = "Mukesh";
obj1.getName();
