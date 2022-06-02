// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//hits given: Math.sign() -- returns symbol of number +, - or 0
// parseInt() checks string for numbers
// toString() takes input and turns it into a string

function reverseInt(n) {

    //no need for complicated loops, this bit is constant so we convert n to string, split it into an array, reverse it then join it back together
    const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

    // this if statement checks if n is negative, if so it multiplies the number by negative 1 which will make it negative and drop any unnecesarry 0's
    if (n < 0){
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);

    // another more effecient way to write this if statement is:
    // return parseInt(reversed) * Math.sign(n)
    // this will multiply by 1 or -1 depending on if n is + or -

}


module.exports = reverseInt;
