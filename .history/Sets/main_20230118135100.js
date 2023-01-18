const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pizza"]);

console.log(orderSet); // duplicate values all gone

console.log(new Set("Jonas"));
//get size
console.log(orderSet.size);
//check Pizza exits in orderSet->return True or False
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
//add new element to orderSet
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
console.log(orderSet);
