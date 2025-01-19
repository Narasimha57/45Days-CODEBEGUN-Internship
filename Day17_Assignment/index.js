
//FIZZBUZZ GAME

let n = 100;
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i ,"is not divisible by both 3 and 5");
    }
}
