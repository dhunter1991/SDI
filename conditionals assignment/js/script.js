var temp = prompt("if it cold enough to snow, enter the temperature in fahrenheit");
var rain = prompt("is it expected to rain?");
var work = prompt("do you have to work the next day");
var truck = prompt("do you have a vehicle that can make it through snow");
var amountOfRain = prompt("how much is the expected rain fall");
var amountOfSnow = amountOfRain * 10;
var snow = temp < 32 + rain;
var noWork = snow + work;

if ("") {
    prompt ("you forgot to input some information \n please enter in a value");
}else{
    console.log(snow);
}

if (temp <= 32) {
    console.log ("it is cold enough to snow");

}else if (truck == "yes"){

    console.log ("you have a vehicle that can make it through the snow");

}else {

    console.log ("you do not have a vehicle that can make it in the snow");
}

(temp <= 32 + rain == "yes") ? console.log ("it will snow") : console.log ("it will not snow");

(truck = "yes") ? console.log ("you have to go work") : console.log ("you do not have to go work");










