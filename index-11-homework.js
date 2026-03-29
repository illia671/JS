// const bankAccount = {
//   ownerName: "Illia",
//   accountNumber: "123456789",
//   balance: 1000,

//   deposit() {
//     const amount = Number(prompt("Введіть суму для поповнення:"));
//     if (confirm("Поповнити рахунок?")) {
//       this.balance += amount;
//       alert(`Рахунок поповнено. Баланс: ${this.balance} грн`);
//     }
//   },

//   withdraw() {
//     const amount = Number(prompt("Введіть суму для зняття:"));
//     if (confirm("Зняти гроші?")) {
//       if (amount <= this.balance) {
//         this.balance -= amount;
//         alert(`Гроші знято. Баланс: ${this.balance} грн`);
//       } else {
//         alert("Недостатньо коштів!");
//       }
//     }
//   },
// };

// const weather = {
//   temperature: null,
//   humidity: 60,
//   windSpeed: 10,

//   checkTemperature() {
//     this.temperature = Number(prompt("Введіть температуру:"));

//     if (this.temperature < 0) {
//       alert("Температура нижче 0°C");
//       return true;
//     } else {
//       alert("Температура 0°C або вище");
//       return false;
//     }
//   },
// };

// const user = {
//   name: "Illia",
//   email: "test@gmail.com",
//   password: "12345",

//   login() {
//     const inputEmail = prompt("Введіть email:");
//     const inputPassword = prompt("Введіть пароль:");

//     if (inputEmail === this.email && inputPassword === this.password) {
//       alert("Вхід успішний!");
//     } else {
//       alert("Невірний email або пароль!");
//     }
//   },
// };

// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
//   rating: 9,

//   isGoodMovie() {
//     return this.rating > 8;
//   },
// };

// console.log(movie.title);
// console.log(movie.director);
// console.log(movie.year);
// console.log(movie.rating);
// console.log("Хороший фільм:", movie.isGoodMovie());

// bankAccount.deposit();
// bankAccount.withdraw();

// weather.checkTemperature();

// user.login();