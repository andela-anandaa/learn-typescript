class Student {
    fullName: string;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

function greeter(person: string) {
    return 'Hello, ' + person;
}

var user = 'Jane Doe';

// user = [10, 5, 6]

console.log(greeter(user));

interface Person {
    firstName: string;
    lastName: string;
}

function greeter_(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var p = { firstName: "John", lastName: "Doe" };

console.log(greeter_(p));

var s = new Student("George", "M. ", "Doe");

console.log(greeter_(s));


