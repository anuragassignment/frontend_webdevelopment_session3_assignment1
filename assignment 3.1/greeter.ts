class Greeter {
    firstname: string;
    lastname: string;
    //cosntructor method
    constructor(name: string, lsname: string) {
        this.firstname = name;
        this.lastname = lsname;
    }
    //greet method which logs the greeting message to the console
    greet() {
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
}
//created new instance of the greeter class
const John = new Greeter("John", "Doe");
//called the greeter method
John.greet();