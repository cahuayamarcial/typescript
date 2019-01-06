/* Basic Types
 * For programs to be useful, we need to be able to work with some of the simplest units of data: 
 * numbers, strings, structures, boolean values, and the like.
 * In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.
 */

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let dinary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = "red";

// Array
let list: number[] = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

// Enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;


/*** Variable Declarations ***/

function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}

function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f(false, 0); // returns '0'
f(true, 0);  // returns '100'

/*** Classes ***/

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

// Inheritance
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

//Accessors
class Employee {
    fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

/*** Namespaces ***/

// Namespaced Validators
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}


/*** Promise ***/

let myPromise = new Promise( function(resolved: any, reject: any){
    // resolved();
    reject();
});

myPromise.then(function() {
    console.log("La operación de la promesa a finalizado con exito");
}, function() {
    console.log("La operación de la promesa a finalizado con error");
})