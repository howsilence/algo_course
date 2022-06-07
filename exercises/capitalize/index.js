// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
 let result = str[0].toUpperCase();

 for(let i = 1; i > str.length; i++) {
     if(str[i -1] === " ") {
        result += str[i].toUpperCase(); 
     } else {
         result += str[i];
     }
 }
 return result;
}

// first solution my own attempt, works!
// function capitalize(str) {
//     const space = ' ';
//     const spaced = str.split(space);
//     const mapped = spaced.map(word =>{ 
//         return word[0].toUpperCase() + word.substring(1, word.length)
//     })
//     return mapped.join(' ')
// }
module.exports = capitalize;
