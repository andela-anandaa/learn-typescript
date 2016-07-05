// boolean
var isDone = false;
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 13;
var octal = 484;
// string
var color = "blue";
// array
var list = [30, 6, 8];
var list_ = [7, 8, 0];
// turple
var x;
x = ["nandaa", 20];
// list of turples
var y = [];
y.push(["james", 20], ["tony", 50], ["janet", 45]);
console.log(y[2]);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
var green = Color[1];
console.log(green);
// any
