// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//From 0 to n (iterate through rows)
// Create an empty string "stair"
//From 0 to n (iterate through columns)
//IF the current column === || < currentRow then + add a '#' to stair
// ELSE add a space to stair and console log



const steps = require("../steps");
function pyramid(n, row = 0, level = '') {

    if(row === n){
        return;
    }
 
    if(level.length === 2 * n -1){
        console.log(level);
        return pyramid(n, row+1);
    }

    const midpoint = Math.floor((2 * n -1) /2);
    let add;
    
    if(midpoint - row <= level.length && midpoint + row >= level.length){
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level + add)
};




// first attempt, way off
//i want to write a recursive function similar to the step problem, it will take n, row and stair as well as a way to determine if n is even because if n is even we add 2 spaces and if it is odd we add 2 pounds
// function pyramid(n, row = 0, stair = '') {

//     if(row === n){
//         return;
//     }

//     if(n === 1){
//         return '#'
//     }

//     if(n === 2){
//         return ' # '
//     }

//     if(stair.length === n){
//         console.log(stair);
//         return pyramid(n, row +1);
//     }

//     // i need to initialize edge cases for if the pyramid is only 1 or 2

//     //if the number is even we sandwhich a stairsubstring between two spaces
//     // else if n is odd we replace the spaces with pounds
//     if(stair.length <= row && row % 2 === 0){
//         subStair = stair.replaceAll(' ', '#')
//         stair = subStair
//     } else {
//         subStair = ' ' + stair.substring() + ' ';
//         stair = subStair;
//     }

//     pyramid(n, row, stair);
// };




//solution
// const steps = require("../steps");
// function pyramid(n) {

//     //midpoint will be used in calculating #'s it will change depending on n
//     //it does not need to be calculated every iteration of column so its put up here. we are watching for row number of elements to the left and row number of elements to the right
//     const midpoint  = Math.floor((2 * n -1) / 2);
//    //iterate from 2 * n - 1 for the correct number of columns
//     for (let row = 0; row < n; row++){
//         let level = '';

//         for(let column = 0; column < 2 * n - 1; column++){
//             if(midpoint - row <= column && midpoint + row >= column){
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }

//         console.log(level)
//     }
 
// };

module.exports = pyramid;
