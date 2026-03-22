// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// function countItems(array, condition) {
//   let count = 0;

//   for (const element of array) {
//     if (condition(element)) {
//       count++;
//     }
//   }

//   return count;
// }

// const isEven = (num) => num % 2 === 0;
// const isLarge = (num) => num > 10;
// const isShort = (word) => word.length <= 3;

// console.log("Парних чисел:", countItems(numbers, isEven));
// console.log("Чисел більше 10:", countItems(numbers, isLarge));
// console.log("Коротких слів:", countItems(words, isShort));

// const calculate = (a, b, operation) => {
//   return operation(a, b);
// };

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;

// const divide = (a, b) => {
//   if (b === 0) {
//     return "Помилка: ділення на нуль!";
//   }
//   return a / b;
// };

// console.log(calculate(10, 5, add));
// console.log(calculate(10, 5, subtract));
// console.log(calculate(10, 5, multiply));
// console.log(calculate(10, 5, divide));
// console.log(calculate(10, 0, divide));

// function repeatMessage(times, messageCreator) {
//   for (let i = 0; i < times; i++) {
//     console.log(messageCreator(i));
//   }
// }

// const simpleMessage = (i) => `Повідомлення №${i + 1}`;
// const evenOddMessage = (i) =>
//   i % 2 === 0 ? `Парний індекс: ${i}` : `Непарний індекс: ${i}`;
// const squareMessage = (i) => `Квадрат ${i} = ${i * i}`;

// repeatMessage(5, simpleMessage);
// repeatMessage(5, evenOddMessage);
// repeatMessage(5, squareMessage);

// const movies = ["Титанік", "Аватар", "Інтерстеллар", "Дюна"];

// function processMovies(movies, action) {
//   for (let i = 0; i < movies.length; i++) {
//     action(movies[i], i);
//   }
// }

// const showMovie = (movie, index) => {
//   console.log(`${index + 1}. ${movie}`);
// };

// const shoutMovie = (movie) => {
//   console.log(movie.toUpperCase());
// };

// const shortMovie = (movie) => {
//   if (movie.length <= 6) {
//     console.log("Коротка назва:", movie);
//   }
// };

// processMovies(movies, showMovie);
// processMovies(movies, shoutMovie);
// processMovies(movies, shortMovie);