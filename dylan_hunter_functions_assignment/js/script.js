// dylan hunter
// scalable data infrastructures 01
// 10/19/2015
// functions assignment

// variable prompt for the user to choose which lottery numbers they want to check
var floridaLottery = prompt("will you be checking the florida lottery yes or no?\n If no you will be checking the Powerball lottery numbers.");


// function for random numbers generator
var getRandom = function (min,max) {   // defining
    var number = Math.floor(Math.random() * max - min) + min;
    return number;
}
// numbers generator for the florida lottery

var florida = getRandom(1, 53); // invoking

// numbers generator for the Powerball lottery

var powerBall = getRandom(1,59); // invoking

// number generator for the Powerball

var pB = getRandom(1,35); // invoking

// while loop to check to make sure a yes or no value is entered to run code
while (floridaLottery === ""){

    floridaLottery = prompt("you did not enter anything \n please enter yes for florida lottery and no for Powerball.");
}
// variable to stop the while loop

var a = 1; // used to stop the loop

// while loop made for the user input for the florida lottery numbers

if (floridaLottery == "yes") {


    var randomNumbers = [];

    for (var i = 0; i <6; i++)

        randomNumbers [i] = getRandom(1, 53);

        console.log("these are the florida lottery numbers! " + randomNumbers);
    }else{
    var randomPbNumbers = [];

    for (var i =0; i < 5; i++)

        randomPbNumbers [i] = getRandom(1,59);

        console.log("these are the Powerball numbers " + randomPbNumbers + " PB number " + pB);
}

    //console.log("these are the florida lottery numbers! " + [getRandom(1,53), getRandom(1,53), getRandom(1,53), getRandom(1,53),getRandom(1,53),getRandom(1,53)]);
    //a++
//}
// while loop for the power ball numbers with the Powerball
//while (floridaLottery === "no" && a < 2) {
    //console.log( "the Powerball numbers are " + [getRandom(1, 59), getRandom(1, 59), getRandom(1, 59), getRandom(1, 59), getRandom(1, 59)] + (" and PB ") + getRandom(1, 35));
    //a++
//}






