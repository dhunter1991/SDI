// dylan hunter
// scalable data infrastructures 01
// 10/19/2015
// functions assignment

// variable prompt for the user to choose which lottery numbers they want to check

var floridaLottery = prompt("will you be checking numbers for the florida lottery yes or no?\n If no you will be checking the Powerball lottery numbers.");

// variable for the florida lottery numbers
var floridaNumbers;
// variable used for the powerball numbers

var PbNumbers;

// while loop to check to make sure a yes or no value is entered to run code

function lotteryValidation (yes) {

// variable used to measure how many times the user clicks through the prompt

    var timesClick = 1;

    while (floridaLottery === "") {

// this prompt will only be shown when nothing is entered into the text field as either yes or no

        yes = prompt("you did not enter anything \n please enter yes for florida lottery and no for Powerball.");

// incrementer for the value of how many times the user clicks through the prompt

        timesClick++;

// when the user has clicked through 3 times this code will appear in the console

        if(timesClick === 3){

            console.log("Enough! I geuss you do not want to check the lottery numbers!");

// break statement will jump out of this loop and continue with the rest of the code

            break;
        }
    }

    return yes;
}

floridaLottery = lotteryValidation(floridaLottery);

// function for random numbers generator

var RandomNumGen = function (min,max) {   // defining

    // math function for a random number between a maximum and a minimum

        var number = Math.floor(Math.random() * max) + min;

// sends value out of the function

        return number;
}

// numbers generator for the florida lottery

var florida = RandomNumGen(1, 53); // invoking

// numbers generator for the Powerball lottery

var powerBall = RandomNumGen(1,59); // invoking

// number generator for the Powerball

var pB = RandomNumGen(1,35); // invoking


// if else statement to determine which numbers will be printed out to the console

if (floridaLottery == "yes") {

// variable for the array of numbers that will be entered through the for loop for the florida lottery numbers

    var floridaNumbers = [];

// for loop to create an array of florida lottery numbers with a not operator so no two numbers in the array will equal each other

    for (var i = 0; i < 6; i++)

    // random numbers generator using the getRandom function for numbers between 1 and 53

        floridaNumbers [i] = RandomNumGen(1,53);


    // console log of the number array and string concentrated statement of which numbers they are

    console.log("these are the florida lottery numbers! " + floridaNumbers);

// else statement for if the user has chosen no and are looking for Powerball numbers

    }else {

    if (floridaLottery == "no") // checks to see if the user entered no

// variable for random numbers used in the powerball lottery

        var PbNumbers = [];

// for statement to create array of Powerball lottery numbers with a not operator for no two numbers to equal each other

    for (var i = 0; i < 5; i++)

// random numbers array using the function above for finding numbers and using the parameters of numbers between 1 and 59 for the powerball lottery

        PbNumbers [i] = RandomNumGen(1, 59);

// console log of the powerball numbers using string concentration to say which numbers they are, also using variable PB for the powerball

        console.log("these are the Powerball numbers " + PbNumbers + " PB number " + pB);
}





