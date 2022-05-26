// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //create an array from our params
    let arr = Array.from(str)
    console.log(arr, "arr")

    //reverse the array
    let reversed = arr.reverse();
    console.log(reversed, "reversed")

    //return it to the string via join
    let result = reversed.join('');
    console.log(result, "result");
    return result

    //one line
    // console.log(Array.from(str).reverse().join(''));
    // return Array.from(str).reverse().join('');
};

module.exports = reverse;
