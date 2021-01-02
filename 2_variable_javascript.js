// create wahyupambudi | awonapa

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


// perbedaan antara let dan var
// var itu global jadi bisa di panggil dimana aja
// kalau let itu beda {scope} maka beda juga
if(true){
    var infoVar = "New Value for Var";
    let infoLet = "New Value for Let";
}

console.log(infoVar);
console.log(infoLet);

// hoisting
x = 10;
var x;
console.log(x); // 10

// after hoisting
var x;
x = 10;
console.log(x); // 10

// scope
var a = 9;
if(true) {
    var b = 10;
}
console.log(b); // 10