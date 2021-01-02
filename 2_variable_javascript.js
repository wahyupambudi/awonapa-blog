// create wahyupambudi | awonapa

// create variabel with Var
var infoVar = "Create Variable with var";
console.log(infoVar);

// create variabel with let
let infoLet = "Create Variable with let";
console.log(infoLet);

// create variabel with const
const infoConst = "Create Variable with const";
console.log(infoConst);


// change value in variable

// change value in var
infoVar = "Change Variable in var";

// change value in let
infoLet = "Change Variable in let";

// change value in var
// infoConst = "Change Variable in const";

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

