// Dylan Hunter
// 10-12-2015
// scalable data infrastructures 01


// variables


// conditions of the temperature, and if no information is entered a re-enter will be shown

var temp = prompt("enter tomorrow's expected temperature in fahrenheit");


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

} else if ( rain == "yes") {

    var amountOfRain = prompt("how much is the expected rain fall in inches");

    // calculation for the amount of snow that is possible

    var amountOfSnow = amountOfRain * 10;

    // condition if there is a chance of rain enter roughly how much to determine an estimate of snowfall accumulation.

    (temp <= 32 && rain == "yes") ? console.log("it will snow about " + amountOfSnow + " inches") : console.log("it will not snow");

    var work = prompt("do you have to work the next day");

    var truck = true;

    if (work == "yes") {
        
        console.log ("there is chance for snow that may effect your ability to make it to work.");

        truck = confirm("do you have a truck that is 4x4 and can make it safely in the snow?  ( ok for yes, cancel for no)");

        console.log("you can safely make it to work in your 4x4 truck");

    }else {

        console.log("congratulations! The snow will not effect your work day. ")
    }


}else {

    console.log("there is no chance for precipitation to develop.");

    var work = prompt("do you have to work the next day");

    if (work == "yes") {
        console.log (" congratulations it should not snow, and your commute to work should be unaffected!");
    }else {
        console.log("Congratulations! you have the day off, but sorry no snow");
    }


}













