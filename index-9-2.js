"use strict";
// console.log(isEven(4)); // true
// console.log(isEven(3));

// function isEven(x){
//     if(x % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// }

// let array = [1, 3, 2, 5, 4];
// let max = findMaxNumber(array);
// function findMaxNumber(arr){
//     let maxnum = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > maxnum){
//             maxnum = arr[i]
//         }else{
//             maxnum = maxnum
//         }
//     }
//     return maxnum
// }
// console.log(max); // 5

// function factorial(number){
//     let factorialArr = []
//     let result = 1

//     for(let i = 1; i < number; i++){
//         result *= i
//     }
//     return result
// }
// let js = ""
// function hi(){
//     js = "Java Script"
// }
// console.log(js);

// function hi2(name) {
//   console.log(`hi ${name}`);
// }

// hi2(Василь)
// let sum = 0
// function mount(a,b){
//     let sum = a * b
//     console.log(sum)
// }
// mount(1,2)

// Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:

// let myAverageScore = function (arr){
//     let sum = 0
//     for (let grade or arr){
//         sum += grade
//     }

//     let avarage = sum / arr.length
//     if
// }
// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "aj4xth3m4n";

// function findLogin (arr, toFind){
//     if (arr.includes(toFind)){
//         return "користувача знайденол"
//     }else{
//         return "шо?"
//     }
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// function findSmallesNumber(arr) {
//   let maxnum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < maxnum) {
//       maxnum = arr[i];
//     } else {
//       maxnum = maxnum;
//     }
//   }
//   return maxnum;
// }

console.log(slugify("Top 10 benefits of React framework")); //top-10-benefits-of-react-framework
console.log(slugify("Azure Static Web Apps are Awesome"));
console.log(slugify("Technical writing tips for non-native English speakers"));

let arr = function slugify(text){
    return text.toLowerCase().split(" ").join("-")
}