// const restaurant = {
//     name:"MackDonalds",
//     cuisine: "Fastfood",
//     addres: "Odesa Green Street",
//     rating: 5.0,

//     changeAddres(addres){
//         this.addres = addres
//     },

//     changeRaiting(rating){
//         this.raiting = rating
//     }
// }

// restaurant.changeAddres("м.Київ")
// restaurant.changeRaiting(1.0)

// console.log(restaurant)

// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === product.name) {
        this.items[i].quantity++;
        return;
      }
    }
    this.items.push({
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  },
  remove(productName) {
    let newItems = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name !== productName) {
        newItems.push(this.items[i]);
      }
    }

    this.items = newItems;
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (let item of this.items) {
      total += this.items.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (let item of this.items) {
      if (productName === item.name) {
        item.quantity++;
        return;
      }
      if (this.item.length <= 0) {
        this.remove(productName);
      }
    }
  },
  decreaseQuantity(productName) {
    for(let item of this.items){
        if(productName === item.name){
            item.quantity--
            return;
        }
        if(items.quantity <= 0){
            this.remove(productName)
        }
    }
  },
};

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍓", price: 110 });

console.log(cart.countTotalPrice());

console.log(cart)
console.log(cart.getItems)

console.log(cart.decreaseQuantity("🍓")); 
