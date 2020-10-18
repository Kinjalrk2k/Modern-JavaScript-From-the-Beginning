// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

[a, b, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a);

const people = ["John", "Beth", "Mike"];
const [person1, person2, person3] = people;

const person = {
  name: "John Doe",
  age: 32,
  city: "Miami",
  gender: "Male",
};

const { name, age, city } = person;
