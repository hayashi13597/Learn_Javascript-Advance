//destructuring arrays lesson
const restaurants = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanbti 23, Firenze, Italy",
  categories: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprsese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

//destructuring arrays
const [a, b, c] = restaurants.mainMenu;
// Skip elements
const [main, , secondary] = restaurants.mainMenu;
console.log(main, secondary);
//swrap elements
[main, secondary] = [secondary, main];
