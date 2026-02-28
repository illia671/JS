// const arr1 = [1, 5, "4", "Hi", {}]
// console.log(arr1[1])
// arr1[5] = "lalala"

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for(let item of cart){
//     total += item
// }
// console.log(total)

// for(let i = 0; i<cart.length; i++){
//     total += cart[i]
// }
// console.log(total)

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for(let number of numbers){
//     if(number % 2 === 0){
//         total += numbers
//     }
// }

// console.log(total)

// for(let i = 0; i<numbers.length; i++){
//     if (i % 2 !== 0 ) {
//         continue
//     }
//     total += numbers[i]
// }

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let total = 0
// for(let i = 0; i<array1.length; i++){
//     total += array1[i]
// }

// for (let i = 0; i < array2.length; i++) {
//   total += array2[i];
// }

// const numbers = [51, 18, 13, 24, 7, 85, 19. -15];
// let min = numbers[0]
// for(let num of numbers){
//     if(num<=min){
//         min -num
//     }
// }
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let number = Number(promt("Ведіть число"))

// let message = ""

// for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] === number){
//         message = "Молодець"
//         break
//     }else{
//         message = "Не Молодець";
//     }
// }
// console.log(message)

// const reversNumbers = []

// for(let i = numbers.length - 1; i >= 0; 1--){
//     reversNumbers.push(numbers[i])
// }
// console.log(reversNumbers)

// const password = "12344321"
// let attempt = 3

// for(let i = 1; i <= attempt; i++){
//     const inputPassword = prompt("Ведіть пароль")
//     if (inputPassword === password){
//         console.log("Пароль вірний")
//         break
//     }
//     if(i === attempt){
//         console.log(`Забагато помилок`)
//     }
// }
// const numbers = [5, 7, 5, 3, 7, 5];

// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 5) {
//     count++;
//   }
// }

// console.log(count);

// Чи всі числа додатні?
// const numbers = [5, 12, 8, -3, 15];

// Перевір, чи є хоча б одне від’ємне число.
//  Якщо є -
// Є від’ємні числа

// Якщо немає -
// Всі числа додатні

// икористай логіку прапорця (let hasNegative = false)

const numbers = [5, 12, 8, -3, 15];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    console.log("Є від’ємні числа");
    break;
  }

  if (numbers[i] >= 0) {
    console.log("Є додатні числа");
    break;
  }
}