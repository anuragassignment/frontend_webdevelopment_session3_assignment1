var Greeter = (function () {
    function Greeter(name, lsname) {
        this.firstname = name;
        this.lastname = lsname;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.firstname + " " + this.lastname);
    };
    return Greeter;
}());
var John = new Greeter("John", "Doe");
John.greet();
//# sourceMappingURL=greeter.js.map