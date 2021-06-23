var Name = "Swastik"
var Spaces = "Swastik Lath"
var s = Spaces.trim();
var LastName = "Lath"
var p = Name.toLowerCase();
var IndexT = Name.lastIndexOf("s");
var Seracg = Name.search("Swa");
var Sloce = Name.substring(1);
var CharacAt = Name.charAt(0);
var Split = Name.split(" ");
var Hi = ["Hi I am", "Hola I am", "Hello I am"];

var l = Hi.length;

var printIt = Math.floor(Math.random() * l);

console.log(Hi[printIt]);

const rand = Math.random().toString().substr(2, 8);

var dice = Math.floor(Math.random() * 6) + 1

// const random = (length = 8) => {
//     return Math.random().toString(16).substr(2, length);
// };


function load() {
    // console.log(Name.concat(" ").concat(LastName));
    // console.log(l);
    // console.log(p.replace("swastik", "WhiteHatJr._Swastik"));
    // console.log(IndexT);
    // console.log(Seracg);
    // console.log(Sloce);
    // console.log(Spaces.length);
    // console.log(s.length);
    // console.log(CharacAt);
    // console.log(Split);
    // console.log(printIt);
    // console.log(rand);
    // console.log(random());
    // console.log(dice);


    console.log(Name);
    console.log("This is what i learne from My Class(77)");

    console.log(Math.ceil(1.1) + " This is the example of Math.Ceil()");
    console.log(Math.floor(1.99) + " This is the example of Math.floor()");
    console.log(Math.round(1.50) + " This is the example of Math.round()");
    console.log(Math.max(100, 200) + " This is the example of Math.max()");
    console.log(Math.min(100, 200) + " This is the example of Math.min()");
    console.log(Math.pow(2, 3) + " This is the example of Math.pow()");
    console.log(Math.sqrt(16) + " This is the example of Math.sqrt()");
    console.log(Math.round(1.50) + " This is the example of Math.round()");
}