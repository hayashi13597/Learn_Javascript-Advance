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
    return [this.starterMenu[cateIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ time = "20:00", address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
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
if (restaurant && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
} //Kiểu thông thường

//Sử dụng Optional Chaining
console.log(restaurant.openingHours.mon?.open);
//Nếu restaurant.openingHours.mon tồn tại thì thuộc tính open được đọc, ngược lại sẽ trả về undefined or null
console.log(restaurant.openingHours?.mon?.open); //Có thể thêm sau openingHours để kiểm tra thuộc tính openingHours của restaurant

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // Không thể viết restaurant.openingHours.day vì day không phải thuộc tính của openingHours
  //Không nên viết restaurant.openingHours[day]?.open || "Closed" bởi vì nếu open có giá trị 0(falsy value) thì sẽ in ra closed
  const open = restaurant.openingHours[day]?.open ?? "Closed"; // Nullish Coalescing Operator có giá trị là null or undefined
  // console.log(`On ${day}, We open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? "Methods does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Methods does not exist");

//Arrays
const users = [
  {
    name: "John",
    email: "john@gmail.com",
  },
];

console.log(users[0]?.name ?? "Users array empty");
