const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[2]);
//size
console.log(airline.length);
console.log("B737".length);
//index
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));
//slice get start ... end ...
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// toLowerCase
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const normalizedEmal = loginEmail.toLowerCase().trim();
console.log(normalizedEmal);
console.log(email === normalizedEmal);

// replacing
const priceGB = "288,97&";
const priceUS = priceGB.replace("&", "$").replace(",", ".");
console.log(priceUS);

const announcements =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcements.replace("door", "gate"));
console.log(announcements.replace(/door/g, "gate")); //Biểu thức chính quy, g is global

// Boolean
const planeNeo = "Airbus A320neo";
console.log(planeNeo.includes("A320"));
console.log(planeNeo.includes("Boeing"));
console.log(planeNeo.startsWith("Airb"));

if (planeNeo.startsWith("Airbus") && planeNeo.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Pratice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on bpard");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some foof and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtman".split(" "));

const [firstName, lastName] = "Jonas Schmedtman".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
const capitalizeName2 = function (name) {
  const names = name.split(" ");
  const nameUpper = [];
  for (const n of names) {
    nameUpper = n[0].toUpperCase() + n.slice(1);
  }
};
capitalizeName2("jessica ann smith davis");
capitalizeName2("jonas schmedtman");
