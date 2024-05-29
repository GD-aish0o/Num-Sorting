// a function for sorting an array of number in either ascending or descending order. (.sort method)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function numSort(order, arr) {
    if (order === "asc") {
        return arr.slice().sort(function (a, b) { return a - b; }); // Ascending order
    }
    else if (order === "desc") {
        return arr.slice().sort(function (a, b) { return b - a; }); // Descending order
    }
    else {
        return ('Invalid sorting order. Use "asc" or "desc".');
    }
}
// Example usage:
var myArray = [5, 2, 9, 1, 7]; //random listed of numbers.
var ascendingResult = numSort('asc', myArray);
var descendingResult = numSort('desc', myArray);
console.log('Ascending order:', ascendingResult);
console.log('Descending order:', descendingResult);
//   Another method without function & same output:
var numberArray = [5, 2, 9, 1, 7];
var sortedNumberArray = numberArray.sort(function (n1, n2) {
    if (n1 > n2) {
        return 1; //-1
    }
    else if (n1 < n2) {
        return -1; //1
    }
    else {
        return 0;
    }
});
// to sort in descending order, you can simply swap the return values for 1 and -1
console.log(sortedNumberArray);
// bubble sort method: 
// 
//                             expected type of output
//                                 (arr of nums)
//                                      ||
function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        //               for descending order
        //                        >
        for (var i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tempStore = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tempStore;
            }
        }
    }
    return array;
}
var list = [12, 10, 15, 11, 14, 13, 16];
var sortedNumbers = bubbleSort(list);
console.log(sortedNumbers); // Output: [10, 11, 12, 13, 14, 15, 16]
// Bubble sorting for both ascending and descending order without making changes.
// The code is same here with only some changes:
function bubbleBoth(array, order) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i++) {
            if ((order === 'asc' && array[i - 1] > array[i]) || (order === 'desc' && array[i - 1] < array[i])) {
                done = false;
                var tempStore = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tempStore;
            }
        }
    }
    return array;
}
var numList = [12, 10, 15, 11, 14, 13, 16];
console.log("The provided jumbled list: ".concat(numList));
var sortedNumbersAsc = bubbleBoth(numList, 'asc');
console.log('Ascending order:', sortedNumbersAsc); // Output: [10, 11, 12, 13, 14, 15, 16]
var sortedNumbersDesc = bubbleBoth(__spreadArray([], numList, true), 'desc');
console.log('Descending order:', sortedNumbersDesc); // Output: [16, 15, 14, 13, 12, 11, 10]
