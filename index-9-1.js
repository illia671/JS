"use strict";
// function add(a,b){
//     let sum = a+b
//     console.log(sum)
// }
// add(5,15)

// const add = function (a,b) {
//     let sum = a+b
//     console.log(sum)
// }
// add(5,15)

// const fnA = function () {
//   console.log("Почала виконуватися [fnA]");
//   fnB();
//   console.log("Продовжила виконуватися [fnA] після виходу з [fnB]");
// };
// const fnB = function () {
//   console.log("Виконується [fnB]");
// };
// console.log("Почав виконання [main]");
// fnA();
// console.log("Продовжив виконуватися [main] після виходу з [fnA]");

// const add = function(a,b) {
//     return a+b
// }
// function message(name, director, raiting="5"){
//     return `фільм: ${name}, ружисер ${director}, має рейтинг ${raiting}`
// }
// console.log(message("Титанік", "Джеймс Камерон"))

// function account(amount, balance=300){
//     let message=""
//     if(amount === 0){
//         message="скма повинна бути більше ноля"
//     }else if(amount > balance){
//         message="Не достатньо коштів"
//     }else if(amount<balance){
//         message="Іи завершили покупку"
//     }

//     return message
// }

// console.log(account(1000, 500))

// function changeCase(text) {
//     let newText = ""
//   for(let i of text) {
//     if (i.toLowerCase() === i) {
//       newText+=i.toUpperCase();
//     } else {
//       newText += i.toLowerCase();
//     }
//   }
//   return newText
// }

// console.log(changeCase("qweRTY"))


const fn1 = function(){
    let array = Array.from(arguments)

    return array
}
console.log(fn1(1,2,3,4,5,6))
console.log(fn1(1,2,3))