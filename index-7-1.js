// const arr = []//масив
// const students = [
//   "Олександа",
//   "Nikolai",
//   "Eldar",
//   "Tymofiy",
//   "Matviy",
//   "Illia",
// ];
// console.log(typeof student)
// console.log(student[5])

// student.lenght= 10 //може перезадати довжину

// student[0] = "Sasha"

// for(let i = 0; i<student.lenght; i++){
//     console.log(`${i + 1} - ${student[i]}`)
// }

// const arr = []
// for(let i = 0; i<10; i++){
//     arr.push(i)
// }
// console.log(arr)
// let message
// for ( const student of students){
//     if(student === "Nikolai"){
//         message = "такий студент є"
//         break
//     }
//     message = "немає"
// }
// console.log(message)

// const name = "Olexandra"
// for ( simbol of name){
//     console.log(simbol)

// }

// const arr = ["apple", "banana", "mango", "tomato"]

// for (let item of arr){
//     if(item === "mango"){
//         continue
//     }
//     console.log(item)
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// let newnum = []
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]>10){
//         continue
//     }
//     newnum.push(numbers[i])
// }
// console.log(newnum)

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(arr[0][3])
for(let i = 0; i < arr; i++){
    console.log(arr[i])
    for (let k = 0; k<arr[i].length; k++){
        console.log(arr[i][k])
    }
}