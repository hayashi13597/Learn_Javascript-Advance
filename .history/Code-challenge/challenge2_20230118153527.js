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

// 1. Hãy tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu (lưu ý là không trùng nhau)
const arrayEvents = [...new Set(gameEvents)]; // dùng set để loại bỏ các giá trị trùng nhau
console.log(arrayEvents);

// 2. Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng. Hãy xóa nó khỏi danh sách sự kiện trong trận đấu.
gameEvents.delete(64); //Dùng delete để xóa key 64
console.log(gameEvents);

// 3. In ra console theo định dang như sau:"1 sự kiện xảy ra, trung bình mỗi 9 phút". Lưu ý răng mỗi trận đấu có 90 phút.
// 4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong trận đấu diễn ra trong hiệp 1 hay hiệp 2,
