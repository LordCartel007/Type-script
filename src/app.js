// using union function
function GetReview(title) {
  if (title == "A New Hope") {
    return "An instant classic!";
  } else {
    return Math.floor(Math.random() * 10);
  }
}
function multiplyAndDivide(num1, num2) {
  return (num1 * num2) / 3;
}
console.log(multiplyAndDivide(15, 3));
function fastestCar(car) {
  if (car === "buggatti") {
    return "This is the fastest car alive";
  } else {
    return "That is not the fastest car alive";
  }
}
console.log(fastestCar("buggatti"));
// async function washProcess(): Promise<string> {
//   console.log("Starting process the wash process...");
//   await new Promise((resolve) => setTimeout(resolve, 4000));
//   return " WASH PROCESS COMPLETE";
// }
// console.log(washProcess);
// async function happyBirthday(): Promise<string> {
//   await new Promise((resolve) => setTimeout(resolve, 10000));
//   return "Happy birthday to you , happy birthday happy birthday happy birthday to you, how old are you now";
// }
// console.log(happyBirthday);

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

linearSearch([1, 4, 7, 12, 28, 36, 28, 19, 35, 36, 22, 30], 36);

function binarySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;

  while (left <= right) {
    // find the middle position

    let middle = Math.floor((left + right) / 2);

    // if we found the target , return its position
    if (arr[middle] === target) {
      return middle;
    }

    // if target is greater , ignore left half
    if (arr[middle] < target) {
      left = middle + 1;
    }
    // if target is smaller ignore right half
    else {
      right = middle - 1;
    }
  }
  // if we get here target wasn't found
  return -1;
}

// let use a simple example : finding a number in a sorted list

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;

const result = binarySearch(numbers, target);

console.log(`found ${target} at position: ${result}`);

const phoneBook = [
  "Adams",
  "Brown",
  "Clark",
  "Davis",
  "Evans",
  "Frank",
  "Garcia",
  "Harris",
  "Intel",
  "Jones",
];

// linear way for finding names
function findName(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return "found at " + i;
    }
  }
  return -1;
}

findName(phoneBook, "Jones");

// Binary way of finding names
function nameSearch(arr, value) {
  var left = 0;
  var right = arr.length - 1;

  while (left <= right) {
    // find the middle position

    let middle = Math.floor((left + right) / 2);

    // if we found the target , return its position
    if (arr[middle] === value) {
      return middle;
    }

    // if target is greater , ignore left half
    if (arr[middle] < value) {
      left = middle + 1;
    }
    // if target is smaller ignore right half
    else {
      right = middle - 1;
    }
  }
  // if we get here target wasn't found
  return -1;
}

const names = phoneBook;
const lookingFor = "Evans";

const finish = nameSearch(names, lookingFor);

console.log(`found ${lookingFor} at position: ${finish}`);
