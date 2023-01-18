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
  for (const row of rows) {
    const [firstName, lastName] = row.toLowerCase().trim().split("_");
    const output = `${firstName}${lastName.replace(
      lastName[0],
      lastName[0].toUpperCase()
    )}`;
    console.log(output);
  }
});
/*
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure
*/
