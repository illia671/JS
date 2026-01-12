"use strict";

let age = 15;
console.log(age);

let name = "Ілля";
console.log(name);

let isStudent = true;
console.log(isStudent);

let myString = "Never give up!";
console.log(myString);

let myNumber = 20;
myNumber = myNumber + 10;
console.log(myNumber);

let myNull = null;
console.log(myNull);

let userName = prompt("Введіть своє ім’я");
console.log(typeof userName);
alert("Ваше ім’я: " + userName);

let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log(userAnswer);

alert("Увага! Дія може бути небезпечною.");

let dangerConfirm = confirm("Ви впевнені, що хочете продовжити?");
console.log("Користувач підтвердив дію:", dangerConfirm);
