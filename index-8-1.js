"use strict";

// let message = "hello my friends";

//? .split("") перетворює рядок на масив

//? console.log(message.split("e"));


//? join("") об'єднує масив в рядок

// const arr = [1,2,3,4,5]

// console.log(arr.join(" "))

//? .indexOf(5) - знаходить індекс елементу в масиві

// console.log(arr.indexOf(4))
//? .includes(4) - знаходить чи є елемент в масиві

// const check = ["if", "console.log", "const",]

// const code = 'let sum = 0 let average for(let i = 0; i<=5; i++){  let grade = Number(prompt(`введи оцінку учня`))  console.log(grade) sum =+ grade}'
// let result = true
// for(const word of check){
//     if(!code.includes(word)){
//         result = true
//         break
//     }
// }

// console.log(result)

//? .push() - додає елемен у цінець масиву
//? .pop -видаляти останній елемент
//? .shift - видаляє елемент на початок
//? .unshift - додає елемент з початку

//! .slice(початок, кінець) - може робити підмасив

// const arr = [1,2,3,4,5]
// console.log(arr.slice(0,2))
// console.log(arr.slice( ))
// concat - об'єднує 2 масива
// const arr1 = [6, 7, 8, 9]
// const arr2 = [10, 11, 12, 13, 14, 15]
// const allArrs = arr.concat(arr1).concat(arr2)
// console.log(allArrs);

//! splice(index, кількість, аргументи...) - додає, віднімає, заміняє, елементи у масиві

//* const arr = [1,2,3,4,5,6]

//? вирізати
// const subArr = arr.splice(2, 2);
// console.log(arr)
// console.log(subArr)

//? заміна якісь елемента
// arr.splice(2,2,  30,40)
// console.log(arr)

//? додатит елементи
// arr.splice(4,0,  30,40)
// console.log(arr)

// const title = "Top 10 benefits of React framework"

// const mathive = title.toLocaleUpperCase().split(" ").join("-")
// console.log(mathive)

