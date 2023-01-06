//Spread operator: Sử dụng để xây dựng các mảng mới hoặc chuyển nhiều giá trị vào 1 hàm -> mở rộng một mảng thành các phần tử riêng lẻ.
//Rest: Thu thập nhiều phần tử và cô động chúng thành 1 mảng

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//SPREAD, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a,b,others);

//Objects