// ===============================
// create wahyupambudi | awonapa
// ===============================

// create variabel with Var
var infoVar = "Create Variable with var";
console.log(infoVar); //Create Variable with var

// create variabel with let
let infoLet = "Create Variable with let";
console.log(infoLet); //Create Variable with let

// create variabel with const
const infoConst = "Create Variable with const";
console.log(infoConst); //Create Variable with const


// Reassign

// reassign in var
var infoVar = "Change Variable in var";
console.log(infoVar); //Change Variable in var

// reassign in let
let infoLet = "Change Variable in let";
console.log(infoLet); //SyntaxError: Identifier 'infoLet' has already been declared

// reassign in const
const infoConst = "Change Variable in const";
console.log(infoConst); //SyntaxError: Identifier 'infoConst' has already been declared


// Hoisting

// hoisting in var
a = 2;
var a;
console.log(a); // 10

// // hoisting in let
b = 4;
let b;
console.log(b); // ReferenceError: Cannot access 'b' before initialization

// // hoisting in const
c = 6;
const c;
console.log(c); // SyntaxError: Missing initializer in const declaration

// Scope

// scope in var
var aa = 9;
if(true) {
    var bb = 10;
}
console.log(bb); // 10

// scope in let
let cc = 99;
if(true) {
    let dd = 100;
}
console.log(dd); // ReferenceError: dd is not defined

// scope in const
const ee = 99;
if(true) {
    const ff = 100;
}
console.log(ff); // ReferenceError: ff is not defined