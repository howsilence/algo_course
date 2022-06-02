// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//common variations of this question:
// What is the most common character in the string?
// Does string A have the same characters as string B(is it an anagram)?
// Does the given string have any repeated characters in it?
// All of these use the same technique as maxChar

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of str){
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        };
    };

    for (let char in charMap) {
        if (charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    };

    return maxChar
};


// solution explanation
// function maxChar(str) {

//     //we first start by initializing an empty object to hold our string key-value pairs
//     const charMap = {};
//     // we also initialize two variables for max num and maxChar so when we interate through charMap if we find an integer with more uses than max we set max to that value and if we find a character with more uses than maxChar we reassign maxChar that new value
//     let max = 0;
//     let maxChar = "";

//     //next we loop through each character of the string
//     for (let char of str){
//         //if there is no character key for the value we create it and set its value to 1
//         if (charMap[char]) {
//             charMap[char]++;
//             //otherwise we take the key assigned to our value and increment it
//         } else {
//             charMap[char] = 1;
//         };
//     }

//     // important note here: you cannot iterate over an object using for of, remember if the o is in the for statement it cant be an object
//     //instead we use for in
//     for (let char in charMap) {
//         if (charMap[char] > max){
//             max = charMap[char];
//             maxChar = char;
//         }
//     }

//     return maxChar
// }


// first attempt
// function maxChar(str) {

//     //we first start by initializing an empty object to hold our string key-value pairs
//     const chars = {};

//     //next we loop through each character of the string
//     for (let char of str){
//         //if there is no character key for the value we create it and set its value to 1
//         if (!chars[char]) {
//             chars[char] = 1;
//             //otherwise we take the key assigned to our value and increment it
//         } else {
//             chars[char]++;
//         };

//        return chars 
//     }

//     return Math.max(chars)
// }

module.exports = maxChar;
