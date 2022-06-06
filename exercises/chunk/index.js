// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// for this second solution using slice we need to also initialize an index variable and switch to a while loop.

// we are saying while index is less than the length of array, slice index and index + size then push those copies into the chunked array. finally at the end of our loop we increase index by the size variable to move down the array.
function chunk(array, size) {
   const chunked = [];
   let index = 0;

   while (index < array.length){
       let slice = array.slice(index, index + size);
       chunked.push(slice);
       index += size;
   }
   return chunked;
};

// my first attempt
// function chunk(array, size) {
//     const chunked = [];
//     for (let element of array){
    //i was on to the right idea here but my syntax was way off
//         let item = chunked[i] -1
    // const last = chunked[chunked.length -1];

    // again on the right path here
//         if (!item || item.length === chunked.size) {
    //     if (!item || item.length === size) {
    //         chunked.push([element]); does both these lines in one
//             let chunk = [...item]
//             chunked.push(chunk)
//         }
    // this line is SO CLOSE its actually just a hair off
//         else {
    //         item.push(element);
//             chunked.push(element)
//         }
//     }
    // finally dont for get to return chunked;
// };

//first solution
// const chunked = [];
// for (let element of array){
//     const last = chunked[chunked.length -1];

//     if (!last || last.length === size){
//         chunked.push([element]);
//     }
//     else {
//         last.push(element);
//     }
// }
// return chunked;
module.exports = chunk;
