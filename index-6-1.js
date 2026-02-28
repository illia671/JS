"use strict";

//while-поки

// while(умова- true){
//     блок дії
// }

//цикл з Пост умовою

// do{

// }while()

//Цикл

// for(let i = 0; i<=48; i+=3){
//     console.log
// }
// let max = 10
// for(let i =0; i<max; i+=1){
//     comsole.log(i)
// }

// let sumn = 0
// for(let i=0; i<9; i++){
//     sumn+=1
// }

// for(let i=0; i<10; i++){
//     console.log(`3*${i} = ${i * 3}`)
// }
// for (let i = 1; i < 10; i+=2) {
//   console.log(i)
// }

// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }
// for(let k = 0; k<=10; k+=1){
//     console.log(k)
// }

// for(let k; k<=10; k=1){
// if (k%2===0){
//     continue
//     //пропускає пеквну інтерацію і іде далі
// }
// console.log(k)
// }

// for(let k = 0; k<=10; k+=1){
// if (k===3){
//     break
//     //програма зупиняється
// }
// console.log(k)
// }

// let age = 0;

// for (let age = 0; age <= 18; age++) {
//   console.log(age);
// }

// let number = 0;

// while (number < 5) {
//   console.log(`Число ${number}`);
//   number++;
// }
let sum = 0
let average

for(let i = 0; i<=5; i++){
    let grade = Number(prompt(`введи оцінку учня`))
    console.log(grade)
    sum =+ grade
}
average = sum / 5;
console.log("твій середній бал:", avarege)
if(average>8){
    console.log("ти вчишся добре! ✨✨")
}