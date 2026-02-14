"use strict";

// const num =Number(promt("Enter a number"))
// if ((num) => 1) {
//   console.log("Number more then 0");
// } else if (num <= -1) {
//   console.log("Number not more then 0");
// } else if (num == 0) {
//   console.log("Number 0");
// }

// const x1 = 10;
// const x2 = 30;
// const num = Number(prompt('Number Select'))
// if (num > x2) {
//   console.log("Your number is too high.")
// } else if (num < x1) {
//   console.log("Your number is too small.")
// } else if (x1 <= num && num <= x2){
//   console.log("You entered the correct number.")
// }

// const isOnline = confirm("Are your friend Online?");
// const isFriend = confirm("IS your friend?");
// const isDnd = confirm("Did not disturb?");

// if(isOnline === true && isFriend === true && isDnd === false){
//     console.log("You can talk with him")
// } else{
//     console.log("You cant")
// }

// if(isOnline && isFriend && !isDnd){
//     console.log("You can talk with him")
// } else{
//     console.log("You cant")
// }

// const subsType = prompt("What subscribe do you want?")
// if(subsType === "pro" || subsType === "wip"){
//     console.log("you can watch netflix")
// }else if(subsType === "free"){
//     console.log("you cant watch netflix")
// }else{
//     console.log("error")
// }

// const sum = Number(prompt("Enter your balance..."))
// const payment = Number(prompt("How much money did you spend"))

// alert(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку`)
// if(payment<= sum){
//     sum-=payment
//     alert(`на рахунку залишилося ${sum}`)
// }else{
//     alert("на рахунку не достатньо коштів");
// }
// alert("Дякую за покупку!")
const totalSpent = Number(prompt("enter the amount you've just spent"))
const recentRecing = Number(prompt("enter the sum"))

let discount

if (totalSpent >= 100 && totalSpent < 1000) {
  alert("Бронзолвий партнер, знижка 2%")
  discount = 0.02
} else if (totalSpent >= 1000 && totalSpent < 500) {
  alert("Срібний партнер 5%")
  discount = 0.05
} else if (totalSpent >= 1000 && totalSpent < 500) {
  alert("Золотий партнер 10%")
  discount = 0.1
} else{
  alert("no siscount")
}

const result =recentRecing -recentRecing * discount
alert(`Оформлено замовлення на суму ${result} зі знижкою ${discount}`)