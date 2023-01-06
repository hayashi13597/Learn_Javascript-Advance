//Falsy values are 0, false, undefined, null, '' or "" and NaN
//Truety values are all values not in Falsy values
//Nullish: Null and undefined (NOT 0 and '')->if value in Left side is null or undefined return value RIGHT side else return value in Left side
const restaurant = {
  name: "hello world",
  value: "Xin chao",
};
console.log(restaurant ?? 10); // ?? is a Nullish coalescing operator

//Logical Assignment operators
const res1 = {
  name: "Capri",
  numGuests: 20,
};
const res2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
