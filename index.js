/**
 * Type the code to swap 2 variables with maximum 3 lines of codes.
 */
//Write your Code / Answer here
let a = 1;
let b = 2;
[a, b] = [b, a];

//End of code / your answer

/**
 * Type the code to swap 2 integers without additional variables or create any function.
 * Maximum 3 lines of codes.
 */
//Write your Code / Answer here
let c = 3;
let d = 4;
[c, d] = [d, c];

//End of code / your answer

/**
 * User tables have an attribute name, gender and age.
 * What kind of query that you need to create to find:
 * How many users that were having a Male gender and age >35 ?
 */
//Write your Code / Answer here

/* No Data */

//End of code / your answer

/**
 * Create a function to search a number in a sorted array.
 * Return the index of searched number or return -1, if it doesn't match any searched item.
 * Example function search([0,2,5,6,8,11,19], 8) -> return 4
 * What is the complexity of your code? can mention the method that you do.
 * Write your Code / Answer here
 * End of code / your answer
 */
//Write your Code / Answer here
const search = (data, num) => {
  let temp = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      temp = i;
      break;
    } else {
      temp = -1;
    }
  }

  return temp;
};

console.log(search([0, 2, 5, 6, 8, 11, 19], 8)); // return 4

//End of code / your answer

/**
 * Create a function to combine 2 sorted array become 1 sorted array or a new sorted array.
 * what kind of result if we input an empty array?
 * Suggest what kind of things that we need to test?
 * Notes:
 * You’re not allowed to use function such: sort(). array_merge() or any other library.
 */
//Write your Code / Answer here
let num1 = [1, 2, 3, 4, 5, 6, 7];
let num2 = [1, 2, 3, 4, 10, 12];

const combines = (array1, array2) => {
  const newArray = [...array1, ...array2];

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[i] < newArray[j]) {
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
    }
  }

  return newArray;
};

// if input empty array this result is empty array
// if the input is a minus or decimal number we need test
console.log(combines(num1, num2));

//End of code / your answer

/**
 * There are 25 horses with different speed, you are only able to see the horses speed by joining the competition (only 5 horses allowed in 1 race).
 * You don’t have a time counter.
 * Questions:
 * How many races that you need to hold to find out the 3 fastest horses? and please explain your answer.
 */
//Write your Code / Answer here
const fastest = (horses, race) => {
  let lap = horses / race;
  let temp = lap / 5;
  return `${temp + lap} race to find 3 fastest horses`;
};

console.log(fastest(25, 5));

//End of code / your answer
