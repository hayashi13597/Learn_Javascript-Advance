//destructuring arrays lesson
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanbti 23, Firenze, Italy",
  categories: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprsese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (cateIndex, mainIndex) {
    return [this.categories[cateIndex], this.mainMenu[mainIndex]];
  },
};

//destructuring arrays
const [a, b, c] = restaurant.mainMenu;
console.log(`destructuring arrays: ${a}, ${b}, ${c}`);

// Skip elements
let [main, , secondary] = restaurant.mainMenu;
console.log(`Skip elements: ${a}, , ${c}`);

//switching elements
[main, secondary] = [secondary, main];
console.log(`swrap elements: ${main} - ${secondary}`);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`Receive 2 return value: ${starter} - ${mainCourse}`);

//Nested destructuring
const nested = [2, 4, [5, 6]];
const [x, , [y, z]] = nested;
console.log(`Destructuring nested array: ${x}, ${y}, ${z}`);

//default values
const [i = 1, j = 1, k = 1] = [1, 2]; //k values is undefined
const [i, j, k] = [1, 2]; //k values is undefined
console.log(i, j, k); //K is
