var temp = prompt("if it cold enough to snow, enter the temperature in fahrenheit");
var rain = prompt("is it expected to rain?");
var work = prompt("do you have to work the next day");
var amountOfRain = prompt("how much is the expected rain fall in inches");
var amountOfSnow = amountOfRain * 10;
var snow = temp <= 32 + rain == "yes";



if ("") {
    prompt("you forgot to input some information \n please enter in a value");

}else if (temp <= 32) {
    console.log ("it is cold enough to snow");

}else {

    console.log("it is not cold enough to snow");

}

(rain == "yes") ? console.log ("there is a chance it will snow") : console.log ("it will not snow");


if (temp <= 32 && rain == "yes") {
    console.log("you do not have to go to work");
}else{
    console.log("you have to go work");
}
console.log("the expected snowfall is " + amountOfSnow + " inches");








