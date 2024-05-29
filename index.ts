// a function for sorting an array of number in either ascending or descending order. (.sort method)

function numSort(order: "asc" | "desc", arr: number[]){
    if (order === "asc") {
      return arr.slice().sort((a, b) => a - b); // Ascending order
    } else if (order === "desc") {
      return arr.slice().sort((a, b) => b - a); // Descending order
    } else {
     return  ('Invalid sorting order. Use "asc" or "desc".');
      
    }
  }
  
  // Example usage:
  const myArray = [5, 2, 9, 1, 7]; //random listed of numbers.
  const ascendingResult = numSort('asc', myArray);
  const descendingResult = numSort('desc', myArray);
  
  console.log('Ascending order:', ascendingResult);
  console.log('Descending order:', descendingResult);

//   Another method without function & same output:

const numberArray: number[] = [5, 2, 9, 1, 7];
const sortedNumberArray: number[] = numberArray.sort((n1, n2) => {
  if (n1 > n2) {
    return 1; //-1
  } else if (n1 < n2) {
    return -1; //1
  } else {
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
function bubbleSort(array: number[]): number[] {
    let done = false;
    while (!done) {
        done = true;
//               for descending order
//                        >
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                done = false;
                const tempStore = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tempStore;
            }
        }
    }
    return array;
}

const list : number[]  = [12, 10, 15, 11, 14, 13, 16];
const sortedNumbers = bubbleSort(list);
console.log(sortedNumbers); // Output: [10, 11, 12, 13, 14, 15, 16]


// Bubble sorting for both ascending and descending order without making changes.

// The code is same here with only some changes:


function bubbleBoth (array: number[], order: 'asc' | 'desc'): number[] {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i++) {
            if ((order === 'asc' && array[i - 1] > array[i]) || (order === 'desc' && array[i - 1] < array[i])) {
                done = false;
                const tempStore = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tempStore;
            }
        }
    }
    return array;
}

const numList: number[] = [12, 10, 15, 11, 14, 13, 16];
console.log(`The provided jumbled list: ${numList}`);

const sortedNumbersAsc = bubbleBoth( numList,'asc');
console.log('Ascending order:', sortedNumbersAsc); // Output: [10, 11, 12, 13, 14, 15, 16]
const sortedNumbersDesc = bubbleBoth([...numList], 'desc');
console.log('Descending order:', sortedNumbersDesc); // Output: [16, 15, 14, 13, 12, 11, 10]

// The function now takes a second parameter order which is a string that can be either 'asc'(ascending) or 'desc' (descending).

// The if statement in for loop checks the order parameter to determine the direction of the comparison.




  