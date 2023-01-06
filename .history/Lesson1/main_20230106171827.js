//destructuring arrays lesson
const restaurants = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanbti 23, Firenze, Italy",
  categories: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprsese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

//destructuring arrays
const [a, b, c] = restaurants;
console.log(a,b,c);