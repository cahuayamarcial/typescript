"use strict";
/* Basic Types
 * For programs to be useful, we need to be able to work with some of the simplest units of data:
 * numbers, strings, structures, boolean values, and the like.
 * In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.
 */
// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var dinary = 10;
var octal = 484;
// String
var color = "blue";
color = "red";
// Array
var list = [1, 2, 3];
// Tuple
var x;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// Void
function warnUser() {
    console.log("This is my warning message");
}
// Null and Undefined
var u = undefined;
var n = null;
/*** Variable Declarations ***/
function f(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    return b;
}
function f(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f(false, 0); // returns '0'
f(true, 0); // returns '100'
