// dylan hunter
// scalable data infrastructures 01
// 10/19/2015


// variable prompt for the user to choose which lottery numbers they want to check
var floridaLottery = prompt("will you be checking the florida lottery yes or no?\n If no you will be checking the Powerball lottery numbers.");


// function for random numbers generator
var getRandom = function (min,max) {   // defining
    var number = Math.floor(Math.random() * max) + min;
    return number;
}
// numbers for the florida lottery
var f = getRandom(1, 53); // invoking
// console log for the florida lottery numbers
var p = getRandom(1,59);
// console log for the power ball main numbers
var pB = getRandom(1,35);
// variable to stop the while loop
var a = 1;
// while loop made for the user input for the florida lottery numbers
while (floridaLottery == "yes" && a < 2) {
    console.log("these are the florida lottery numbers! " + [getRandom(1,53), getRandom(1,53), getRandom(1,53), getRandom(1,53),getRandom(1,53),getRandom(1,53)]);
    a++
}
// while loop for the power ball numbers with the Powerball
while (floridaLottery === "no" && a < 2) {
    console.log( "the Powerball numbers are " + [getRandom(1, 59), getRandom(1, 59), getRandom(1, 59), getRandom(1, 59), getRandom(1, 59)] + (" and PB ") + getRandom(1, 35));
    a++
}











