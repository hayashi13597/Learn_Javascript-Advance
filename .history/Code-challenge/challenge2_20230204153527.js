const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow Card"],
]);

// CODE CHALLENGE #3
// 1. Hãy tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu (lưu ý là không trùng nhau)
const arrayEvents = [...new Set(gameEvents.values())]; // dùng set để loại bỏ các giá trị trùng nhau
console.log(arrayEvents);

// 2. Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng. Hãy xóa nó khỏi danh sách sự kiện trong trận đấu.
gameEvents.delete(64); //Dùng delete để xóa key 64
console.log(gameEvents);

// 3. In ra console theo định dang như sau:"1 sự kiện xảy ra, trung bình mỗi 9 phút". Lưu ý răng mỗi trận đấu có 90 phút.
const time = [...gameEvents.keys()].pop();
console.log(`1 sự kiện xảy ra, trung bình mỗi ${time / gameEvents.size} phút`);

// 4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong trận đấu diễn ra trong hiệp 1 hay hiệp 2, ví dụ: [FIRST HALF] 17: ⚽ GOAL
for (const [key, value] of gameEvents) {
  key <= 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}

// CODE CHALLENGE #4
// 1.Viết 1 chương trình nhận vào 1 danh sách các biến được viết theo kiểu underscore (ví dụ: ten_bien) và chuyển nó sang dạng camelCase (ví dụ: tenBien) Đầu vào sẽ đến từ một vùng văn bản được chèn vào DOM (xem mã bên dưới) và chuyển đổi sẽ xảy ra khi nhấn nút.
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);
  for (const [index, value] of rows.entries()) {
    const [firstName, lastName] = value.toLowerCase().trim().split("_");
    const output = `${firstName}${lastName.replace(
      lastName[0],
      lastName[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, " ")}${"!".repeat(index + 1)}`);
  }
});
/*
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure
*/

// String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
// � Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// � Delayed Arrival from HEL to FAO (12h05)
// Departure from FAO to LIS (12h30)
const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "�" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}
