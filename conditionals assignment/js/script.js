// Dylan Hunter
// 10-12-2015
// scalable data infrastructures 01


// variables
var work = prompt("do you have to work the next day");

// condition of work if no input is enter a re-enter prompt will be shown

if (work == "") {

    prompt("you forgot to input some information \n please enter yes or no");

// condition if you have to work this will show the ability of making it to work based on weather conditions

}else if (work == "yes") {

    console.log("this is a check to see if snow will affect your ability to work tomorrow");

}else {
// condition if no work you can still use the code to see about the weather conditions

    console.log("you do not have to work tomorrow, continue to see if it will snow");
}
// conditions of the temperature, and if no information is entered a re-enter will be shown

var temp = prompt("enter the expected temperature in fahrenheit");


if (temp == "") {

    prompt("you forgot to input some information \n please enter in a value");

}else if (temp <= 32) {

    console.log ("it is cold enough to snow");

}else {

    console.log("it is not cold enough to snow");

}
// condition of precipitation, if no entry a re- enter prompt will be shown. If rain and temperature conditions have the ability to snow.
var rain = prompt("is it expected to rain?");

if (rain == "") {

    prompt ("you forgot to input some information \n please enter in yes or no, is there a chance of rain?");

} else if ( rain == "yes" && temp <= 32) {

    console.log("the conditions show the ability for snow to develop");

}else {

    console.log("there is no precipitation for snow to develop");

}
// condition if there is a chance of rain enter roughly how much to determine an estimate of snowfall accumulation.

if (rain == "yes") {

    var amountOfRain = prompt("how much is the expected rain fall in inches");

}else {

    console.log("");
}
// calculation for the amount of snow that is possible

var amountOfSnow = amountOfRain * 10;



(temp <= 32 && rain == "yes") ? console.log("it will snow about " + amountOfSnow + " inches") : console.log("it will not snow");











