const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pizza"]);
//Set -> all values are unique->have not duplicate values in the result array when using set
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
//Delete a element from orderSet
orderSet.delete("Risotto");
console.log(orderSet);
//This didn't work -> Set haven't index
//Setの使い方：orderSetの中に「ピーザ」とかという価値はあるのかを知りたい場合にSetを使う。
console.log(orderSet[0]);
// if want to get value -> using array
//empty orderSet using clear
// orderSet.clear();
console.log(orderSet);
//We can loop
for (const order of orderSet) console.log(order);

//Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
