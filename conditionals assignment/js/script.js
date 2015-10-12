// Dylan Hunter
// 10-12-2015
// scalable data infrastructures 01



var work = prompt("do you have to work the next day");

if (work == "") {

    prompt("you forgot to input some information \n please enter yes or no");

}else if (work == "yes") {

    console.log("you have to work tomorrow, this is a check to see if snow will prevent you from working");

}else {

    console.log("you do not have to work tomorrow, continue to see if it will snow");
}

var temp = prompt("if it cold enough to snow, enter the temperature in fahrenheit");


if (temp == "") {

    prompt("you forgot to input some information \n please enter in a value");

}else if (temp <= 32) {

    console.log ("it is cold enough to snow");

}else {

    console.log("it is not cold enough to snow");

}

var rain = prompt("is it expected to rain?");

if (rain == "") {

    prompt ("you forgot to input some information \n please enter in yes or no, is there a chance of rain?");

} else if ( rain == "yes" && temp <= 32) {

    console.log("there is a chance it will snow");

}else {

    console.log("there is no precipitation for snow to develop");

}

if (rain == "yes") {

    var amountOfRain = prompt("how much is the expected rain fall in inches");

}else {

    console.log("");
}

var amountOfSnow = amountOfRain * 10;



(temp <= 32 && rain == "yes") ? console.log("it will snow about " + amountOfSnow + " inches") : console.log("it will not snow");











