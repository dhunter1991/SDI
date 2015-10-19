// dylan hunter
// scalable data infrastructures 01
// 10/19/2015


var getRandom = function (min,max) {
    var number = Math.floor(Math.random() * max) + min;
    return number;
}
// numbers for the florida lottery
var f = getRandom(1, 53);
// console log for the florida lottery numbers
console.log(f);
// variable for the power ball main numbers
var p = getRandom(1,59);
// console log for the power ball main numbers
console.log(p);
// variable for the power ball
var pB = getRandom(1,35);
// console log for the power ball
console.log(pB);












