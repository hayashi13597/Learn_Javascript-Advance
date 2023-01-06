//Falsy values are 0, false, undefined, null, '' or "" and NaN
//Truety values are all values not in Falsy values
//Nullish: Null and undefined (NOT 0 and '')->if value in Left side is null or undefined return value RIGHT side else Left side
const restaurant = {
  name: "hello world",
  value: "Xin chao",
};
console.log(restaurant ?? 10); // ?? is a Nullish coalescing operator