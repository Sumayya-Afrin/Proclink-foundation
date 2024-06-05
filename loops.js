const marks = [10, 20, 30];
//More control
for (let i = 0; i < marks.length; i++) {
  console.log("Index", i, "Marks", marks[i]);
}
//READBALE AND SIMPLE
for (let idx in marks) {
  console.log("Index", idx, "Marks", marks[idx]);
}

//Readable and cleaner

for (let mark of marks) {
  console.log("Marks:", mark);
}

const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

//   Ex 1.1: Combine cart + newItems

const newarray = [...cart, ...newItems];

for (let item of newarray) {
  console.log("Items", item);
}

// Ex 1.2: Find total of cart
let sum = 0;

for (let idx in newarray) {
  sum = newarray[idx].price * newarray[idx].quantity + sum;
}

var sum1 = 0;
for (let items of newarray) {
  const { price, quantity } = items;
  sum1 = sum1 + price * quantity;
}
console.log("Destructoring");
console.log(sum1);

console.log(sum);

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

let highRatedBooks = [];

for (let book of books) {
  if (book.rating >= 4.7) {
    highRatedBooks.push(book.title);
  }
}

console.log(highRatedBooks);

// Ex 3: If employee's grades 80 or above promote them
const employes = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

let emp = [];

for (let j in employes) {
  if (employes[j].grade >= 80) {
    // console.log(employes[j].id);
    const list = { id: employes[j].id, status: "Promoted" };
    emp.push(list);
  }
}

console.log(emp);

//using for of

console.log("Using for of loop");

let res = [];
for (let employ of employes) {
  if (employ.grade > 80) {
    var item = { id: employ.id, status: "Promoted" };
    res.push(item);
  }
}

console.log(res);

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]

const movies = [
  { title: "Inception", ratings: [5, 4, 5, 4, 5] },
  { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
  { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
  { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
  { title: "Memento", ratings: [4, 5, 4, 5, 4] },
];

var sumAvg = 0;
var max = 0;

for (let n = 0; n <= movies.length; n++) {
  for (let m = 0; m <= 5; m++) {
    sumAvg = movies.length[m] + sumAvg;
  }

  if (sumAvg > max) {
    sumAvg = max;
  }

  sumAvg = 0;
}
