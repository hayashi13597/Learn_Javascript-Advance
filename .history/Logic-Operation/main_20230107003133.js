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

//normal way
// res1.numGuests = res1.numGuests || 10; // res1.numGuests value is 20 because it's existed
// res2.numGuests = res2.numGuests || 10; // res2.numGuest value is 10 because it's not existed

//Local Assignment operators way
res1.numGuests ||= 10;
res2.numGuests ||= 10;
