const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
const [players1, players2] = game.players;
// console.log(players1, players2);
/*
2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của 
thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
*/
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// 3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
/*
4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1 mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào 'Thiago', 'Coutinho' và 'Perisic'
*/
