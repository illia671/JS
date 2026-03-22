// const user = {
//     //ключ значення
//     name: "Петро",
//     skills:["js"],
//     expiriance: 2,
//     openToWork: true,

//     "interview": false
// }
// console.log(user.expiriance)
// console.log(user.["name"]);

// user.openToWork = false

// user.offerSent = true

// const car = {
//     brand: "tayota",
//     modal: "X3",
//     color: "blue" ,
//     year: "2000",
// }

// const user = {
//     name: "Олег",
//     skills:["js", "css"],
//     expiriance: 2,
//     openToWork: true,

//     "interview": false,

//     getUserInfo(){
//         return `${user.name} have skills: ${user.skills} ${user.openToWork} ? "може працювати" : "не можу працювати"` 
//     }

//     getName(){
//         return user.name
//     }
// }

// user.gotSkills = function(){
//     return this.skills
// }

// const person = {
//     name: "Illia",
//     gender: "boy",
//     age: 15,

//     dox(){
//         return `${this.name}, ${this.gender}, ${this.age}`;
//     }
// }

// console.log(person.dox())

// const book = {
//     title: "HarryPoter",
//     aughtor: "Keplin Rouling",
//     ganre: "Phentesi",
//     year: 1990, 

//     updateProperties(key, value){
//         this[key] = value
//     }
// }
// console.log(book.updateProperties("year", 2020))
// console.log(book)

const car = {
    brand: "tayota",
    modal: "X3",
    color: "blue" ,
    year: "2000",
    dox(){
        return `${this.brand}, ${this.color}, ${this.modal}, ${this.year}`;
    }
}

console.log(car.dox)