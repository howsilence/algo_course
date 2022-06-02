// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   // take the str and split it into an array
   // make a new array that is a copy but reversed
   // pop each element of new array and compare
//    let start = str.split('');
//    let reverse = start.reverse();

//    for (i = 0; i <= reverse.length; i++){
//        let comparison = reverse.pop()
//        let counter = start[0]++
//         if (comparison !== counter){
//             console.log(`${str} is not a palindome.`)
//         }
//    }
 
    // solution one
    // let reverse = str.split('').reverse().join();
    // return str === reverse
    
    // solution two use array.every()
    // every is map for comparisons, it checks each value in an array and compares, if comparison is success it returns true else it stops
    // passes the character and the index of the array as args
    // the return statement compares char to str[index of str.length - index -1]
   return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })




}
module.exports = palindrome;


//for using debugger you need to call the function afterwards, ex:
// function palindrome(poop){
//     debugger;
// }
// then node inspect file.js