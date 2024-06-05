let salaries = {
  Rani: 100,
  Vani: 200,
  Pani: 300,
};

console.log(Object.keys(salaries));
console.log(Object.values(salaries));

const quotes = `Hello hsgfjs aHGUYSAGDJB KSDJISJXN JHSJHahsnM Jahjkahjndnx .`;
console.log(quotes);

const movieUrl = (domain, genre, year) =>
  `http://${domain}?genere=${genre}&year=${year}`;

console.log(movieUrl("imdb.com", "thriller", 2020));
// Object destructuring
//matching by the key not the index
const {
  name,
  networth,
  power,
  skill = "5",
} = {
  name: "summi",
  place: "suryapet",
  networth: "💰💰",
  power: "udh",
};

console.log(skill);

const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

const newarray = [...cart, ...newItems];
var sum1 = 0;
for (let items of newarray) {
  const { price, quantity } = items;
  sum1 = sum1 + price * quantity;
}

console.log("Destructuring");
console.log(sum1);

var sum2 = 0;
for (let { price, quantity } of newarray) {
  sum2 += price * quantity;
}

console.log(sum2);

console.log("Afrin".toUpperCase());
var [t1, t2, t3] = [20, 60, 30];
var [t1, t2, ...t3] = [20, 20, 20, 40, 100, 89]; //REST

console.log("Video calls with anyone, anywhere".split(" "));
console.log(["Video", "calls", "with", "anyone,", "anywhere"].join("|"));
console.log("Video calls with anyone, anywhere".split(""));
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

let sentence = "Hello world from JavaScript";
let transformed = transformSentence(sentence);

function transformSentence(sentence) {
  let str = sentence.toUpperCase().split(" ").reverse().join();

  return str;
}
console.log(transformed); // Output: "JAVASCRIPT FROM WORLD HELLO"

// Task 7: Improving code quality

/*function processNames(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    let upperCaseName = names[i].toUpperCase();
    let nameParts = upperCaseName.split(" ");
    let joinedName = nameParts.join("_");
    result.push(joinedName);
  }
  return result;
}*/

const namesArray = ["john doe", "jane smith", "alice jones"];
console.log(processNames(namesArray));

function processNames(names) {
  let result = [];
  for (let name of names) {
    let result1 = name.toUpperCase().split(" ").join("_");
    result.push(result1);
  }

  return result;
}
