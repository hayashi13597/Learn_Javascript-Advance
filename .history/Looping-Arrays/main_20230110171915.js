const openingHours = {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanbti 23, Firenze, Italy",
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprsese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 Enhanced Object Literals
  openingHours,

  //order: function (cateIndex, mainIndex) -> ES6:
  order(cateIndex, mainIndex) {
    return [this.categories[cateIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ time = "20:00", address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received! ${this.categories[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//looping arrays with for of
// for (const item of menu) console.log(item); // for of sẽ lấy giá trị phần tử mỗi lần lặp

for (const [i, element] of menu.entries()) {
  // console.log(`${i + 1}:${element}`);
} // Hàm entries() sẽ lấy 1 mãng gồm index và value của mỗi phần tử của mãng

//Optional Chaining (Chuỗi tùy chọn)
if (restaurant && restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}
