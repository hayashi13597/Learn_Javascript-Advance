//destructuring arrays lesson
const restaurants = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanbti 23, Firenze, Italy",
  categories: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprsese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

//destructuring arrays
const [a, b, c] = restaurants.mainMenu;
console.log(`destructuring arrays: ${a}, ${b}, ${c}`);
// Skip elements
let [main, , secondary] = restaurants.mainMenu;
//swrap elements
[main, secondary] = [secondary, main];
console.log(main, secondary);
