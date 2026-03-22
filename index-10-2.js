// const fn = (...args)=> args

// console,console.log(1,2,3,4,5)

// const fn = a => a + 1111

// const myNewArrowFunction = (...arr) =>{
//     console.log(arr)

// }

// console.log(myNewArrowFunction(1, 2, 3))
// console.log(myNewArrowFunction(100, 200, 300, 400, 500))
// console.log(myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"))

// const hello1 = () => {
//   console.log("Hello Javascript");
// };

// hello1();

// const mul = (n,m) => {
//   console.log(n *m)
//   console.log(n + m);
//   console.log(n - m);
// };

// mul(15,3);

// function processNumbers(arr, callback){
//     newArr = []
//     for(let item of arr){
//         newArr.push(callback(item))
//     }

//     return newArr
// }

// function addFive(x){
//     return 5 + x;
// }

// console.log(processNumbers([30, 40, 50, 60], addFive));

// function twiceNumber(...arr){
//     return arr * 2;
// }

// console.log(twiceNumber(2, 3));

// function calculate(a,b, cb){
//     return cb(a,b)
// }

// console.log(calculate(5,4, (a,b)=> a+b))

// function checkAge(age, callBack){
//     return callBack(age)
// }
// function cb(age){
//     if(age >= 18){
//         console.log ("Доступ дозволений")
//     }else{
//         console.log("Доступ заборонекний")
//     }
// }

// checkAge(13, cb)

// function repeatMessages(message, times, callBack){
//     for(let i = 0; i<times; i++){
//         callBack(message)
//     }
// }

// repeatMessages("hi", 3, (message)=> console.log(message))

// const generateArray = (size, callback) =>{
//     let newArr = []
//     for(let i = 0; i<size; i++){
//         newArr.push(cb(i))
//     }
//     return newArr
// }

// console.log(generateArray(4, (item)=> item*3))
// const processNumber = (number, callback1, callback2) => {
//     return callback2(callback1(number))
// }

// const double = (num) => num * 2;
// const addTen = (num) => num + 10;

// console.log(processNumber(5, double, addTen));

function countIf(arr, cb){
    let count = 0
    for(let item of arr){
        if (cb(item)) {
            count++
        }
    }

    return count
}

const isPositive = (num)=> num > 0

console.log(countIf([-3, 4, -1, 7, 2], isPositive))
