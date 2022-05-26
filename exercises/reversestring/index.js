// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //third solution using the reduce helper function
    //reduce is used to take all values in an array and condense them to a singlular value
    //reduce takes two seperate arguments: the first is an arrow function, the second is an initial value for the function.
    //when reduce runs it takes the starting argument, pass it in to the arrow function and whatever is returned in the starting argument in every successive run of the function and will run once for every element. its essentially a for loop.
    let arr = str.split('')
    arr.reduce((reversed, character) =>{
        return character + reversed;
    }, '');

    //this can be condensed down to:
    // return str.split('').reduce((rev, char) => char + rev, '');
};


 //solution one
    //create an array from our params
    // let arr = Array.from(str)
    // console.log(arr, "arr")

    // //creating the array can also be done by
    // let arr = str.split('');
    // console.log(arr, "split")

    // //reverse the array
    // let reversed = arr.reverse();
    // console.log(reversed, "reversed")

    // //return it to the string via join
    // let result = reversed.join('');
    // console.log(result, "result");
    // return result

    //one line
    // console.log(Array.from(str).reverse().join(''));
    // return Array.from(str).reverse().join('');
    // return str.split('').reverse().join('')


    //second solution
       //initialize an empty string
    // let reversed = '';

    //use for of syntax to iterate
    // for of is great when you need to iterate over every instance of an object but you must rever to a normal for loop if you need to iterate over every 3rd instance or every 5th etc
    // for a temporary variable (character (redefined every iteratin) of (for each character of string) do this(add character to the reversed variable) return the reversed string variable)
    // for (let character of str) {
    //     console.log(reversed, "start loop")
    //     reversed = character + reversed;
    //     console.log(reversed, "exit loop")
    // }
    // return reversed;

module.exports = reverse;
