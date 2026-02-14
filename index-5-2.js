// let wether = "дощ";

// // if(wether === "дощ"){
// //     console.log("візьми парасольку")
// // }else if(wether === "ураган"){
// //     console.log("не виходь з хати!")
// // }else if(wether === "сонечка"){
// //     console.log("іди на пляж");
// // }else{
// //     console.log("роби шо хочеш  ")
// // }

// // switch (wether) {
// //   case "sunny":
// //     console.log("go to touch grass");
// //     break;
// //   case "rainy":
// //     console.log("pick up umbrella");
// //     break;
// //   case "hurricane":
// //     console.log("its too late");
// //     break;
// //   default:
// //     console.log("do watever you want")
// // }

// let grade = "A"

// switch (grade){
//     case "A":
//     case "B":
//         console.log("You are good!")
//     break
//     case "C":
//     case "D":
//     case "E":
//     case "F":
//         console.log("You can better!")
//     break
//     default:
//         console.log("programe error")
// }

// const leng = "ua"

// switch(leng) {
//     case "en":
//         console.log("I love you!")
//         break;
//     case "fr":
//         console.log("Je vouse aime!")
//         break;
//     case  "ch":
//         console.log("dfuhy dfouhgr tygy!")
//         break;
//     default:
//         console.log("Я тебе кохаю!")
// }

// let number = Math.floor(Math.random() * 5) + 1;

// switch (number) {
//   case 1:
//     console.log("Вам випало число 1");
//     break;
//   case 2:
//     console.log("Вам випало число 2");
//     break;
//   case 3:
//     console.log("Вам випало число 3");
//     break;
//   case 4:
//     console.log("Вам випало число 4");
//     break;
//   case 5:
//     console.log("Вам випало число 5");
//     break;
// }
// const option = Number(promt(`Виберіть опцію`));
// let message = "";

// switch (option) {
//   case 1:
//     message = "ви зможете забрати товар завтра з 12 00 в нашому офісі";
//     break;
//   case 2:
//     message = "курєр доставвить замовлення";
//     break;
//   case 3:
//     message = "посилка буде відправлена сьогодні";
//     break;
//   case 4:
//     message = "вам передзвонить менеджер";
// }

// console.log(message)

//  Є 3 вікові групи : 
//  діти (0-16), дорослі(17-60), пенсіонери (61-100). До якої 
//  групи відноситься Максим, якщо йому 55 років.

let age = 55
if (age >= 0 && age <= 16) {
  console.log("діти");
} else if (age >= 17 && age <= 60) {
  console.log("дорослі");
} else if (age >= 61 && age <= 100) {
  console.log("пенсіонер");
}else {
    console.log("о боже! ТОБІ 100+!!!!!!!");
}