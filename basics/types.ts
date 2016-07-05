// boolean
let isDone: boolean = false;

// number
let decimal: number = 6
let hex: number = 0xf00d;
let binary: number = 0b1101;
let octal: number = 0o744;

// string
let color: string = "blue";

// array
let list: number[] = [30, 6, 8];

let list_: Array<number> = [7, 8, 0];


// turple
let x: [string, number];

x = ["nandaa", 20];

// list of turples
let y: [string, number][] = [];

y.push(["james", 20], ["tony", 50], ["janet", 45]);

console.log(y[2]);

// enum
enum Color {Red, Green, Blue};
let c: Color = Color.Red;

let green = Color[1];

console.log(green);

// any

let notSure: any = 4;
notSure = "now it's string";
notSure = false; // now boolean

let mix: any[] = [1, true, "free"];

mix[1] = 200;

// void
function warnUser(): void {
    console.warn("Be ye warned!");
}


