//Spread Operators
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanbti 23, Firenze, Italy",
  categories: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprsese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (cateIndex, mainIndex) {
    return [this.categories[cateIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    time = "20:00",
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order received! ${this.categories[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const array = [1, 2, 3];
const badArray = [4, 5, array[0], array[1], array[2]]; // results in [4, 5, 1, 2, 3]
const newArray = [4, 5, ...array]; // ...array is spread operator(toán tử spread) -> result is [4, 5, 1, 2, 3]
//const newArray = [4, 5, array]; // result is [4, 5, array] -> [4, 5, [1, 2, 3]]
console.log(newArray); // results in [4, 5, 1, 2, 3]
console.log(...newArray); // result is 4 5 1 2 3
const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);
//copy array
const mainMenuCopy = [...restaurant.mainMenu];
//Join 2 arrays
const menu = [...restaurant.categories, ...restaurant.mainMenu];
// console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT Objects
const str = "Jonas";
const letters = [...str];
console.log(letters);
console.log(...letters);