// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// think of this like a grid with a row variable and column variable
//          ----> column
//     |    '# _ _ '
//    V     '# # _ '
//   row    '# # # '
// 
    //from 0 to n (iterate through rows)
    // create an empty string "stair"
    // from 0 to n (iterate through columns)
    // IF the current column is equal to or less than the current row
    // add '#' to stair
    // ELSE
    // add a space to 'stair'
    //console log 'stair'
function steps(n, row = 0, stair = '') {
    
    //recursive solution from bootcamp
    // start with base case to prevent infinite loop
    if (row === n) {
        return;
    }

    if(stair.length === n){
        console.log(stair);
        return steps(n, row +1);
    }

    if(stair.length <= row){
        stair += '#';
        
    } else {
        stair += ' ';
    }

    steps(n, row, stair);
};

// first pass
// function steps(n) {
//     //write a function that accepts a positive number
//     if(n < 0){
//         return n
//     }

//     //function console logs a step shape of N levels using the # sign
//     // steps should have a space on the right hand side
//     //i think i need to make an array and push to it then string it and log
//     // furthermore i think the chunked problem will be used in this solution
//     const index = 0;
//     const counter = 1;
//     const chunk = [];
//     const space = ' ';
//     const pound = '#';

//     while(counter <= n) {
//         let slice = array.slice(index, index + counter)
//         chunk.push(slice)
//         index += counter 
//     }
// }

// second pass, solution
// function steps(n) {
    
//     for(let row = 0; row < n; row++){
//         let step = '';
//         for(let col = 0; col < n; col++){
//             if(col <= row){
//                 step += '#';
//             } else {
//                 step += ' '
//             }
//         }
//         console.log(step);
//     }

// };


module.exports = steps;
