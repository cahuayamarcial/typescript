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
enum Color {Red, Green, Blue}
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



