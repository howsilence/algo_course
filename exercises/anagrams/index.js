// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
 
}

// interviewers prefer helper functions as opposed to multiple for loops
function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// attempt one 4/6 tests passing

// function anagrams(stringA, stringB) {
//     // my goal here is to take the strings and turn them into objects, count the number of each key value pairs and compare them, if they are equal we have an anagram
//     //consider caps and lowercase to be the same so we need to either toUpper or toLower our object
//     //do not consider spaces or punctuation

//     //initialize our objects
//     const wordA = [];
//     const wordB = [];

//     //loop through the objects and map them
//     for (let char of stringA.replace(/[^\w]/g, "").toLowerCase()){
//         if (wordA[char]) {
//             wordA[char]++
//         }
//         else {
//             wordA[char] = 1;
//         }
//     };

//     for (let char of stringB.replace(/[^\w]/g, "").toLowerCase()){
//         if (wordB[char]) {
//             wordB[char]++
//         }
//         else {
//             wordB[char] = 1;
//         }
//     };
  
//    return wordA.sort() === wordB.sort()
// }


//working answer 6/6 tests
// function anagrams(stringA, stringB) {

//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);

//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length){
//         return false;
//     }

//     for (let char in charMapB) {
//         if (charMapB[char] !== charMapA[char]){
//             return false;
//         }
//     }

//     return true;
// }

// // interviewers prefer helper functions as opposed to multiple for loops
// function buildCharMap(str){
//     const charMap = {};
//     // we could make a clean string variable (.toLowerCase().replace()) here or do it in the for loop

//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

module.exports = anagrams;
