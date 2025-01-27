/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...

function findIndex(string) {
    return string.indexOf("j");
}

let index = findIndex(string1);
console.log(index);




/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
function concatenateCharacters(string) {
    let newString = "";
    let desiredString = "COOL"
    for(let char of desiredString) {
        newString += string[string.indexOf(char)];
    }

    return newString;
}

let newString = concatenateCharacters(string2);
console.log(newString);



/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...
function repeatConcatenate(string){
    return string.repeat(3) + " Batman!";
}

console.log(repeatConcatenate(string3));




/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
function getFavoriteFruit(fruits, favoriteFruit) {
    let startIndex = fruits.indexOf(favoriteFruit)
    return fruits.slice(startIndex, startIndex + favoriteFruit.length + 1);
}

console.log(getFavoriteFruit(fruit, "mango"));

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...
function isHeadlineOxygen(headline) {
    if(headline.includes("oxygen")){
        console.log("The string includes the word 'oxygen'");
    } 
    else{
        console.log("The string does not include the word 'oxygen'");
    }
}

isHeadlineOxygen(funnyHeadline1);


// Check the second headline
// Your code here ...
isHeadlineOxygen(funnyHeadline2);


/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...
function getLength(string) {
    return string.length;
}
console.log(getLength(string4));


// b) Print the last character in the string
// Your code here ...
function getLastCharacter(string) {
    return string.at(string.length - 1);
}
console.log(getLastCharacter(string4));
