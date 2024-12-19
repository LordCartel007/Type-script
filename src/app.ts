// using union function
function GetReview(title: string): string | number {
  if (title == "A New Hope") {
    return "An instant classic!";
  } else {
    return Math.floor(Math.random() * 10);
  }
}

function multiplyAndDivide(num1: number, num2: number): number {
  return (num1 * num2) / 3;
}

console.log(multiplyAndDivide(15, 3));

function fastestCar(car: string): string {
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
