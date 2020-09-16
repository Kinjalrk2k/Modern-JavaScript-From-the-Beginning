// function Person(name, dob) {
//   //  constructor
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);

//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// const kinjal = new Person("Kinjal", "9-22-2000");

// console.log(kinjal);
// console.log(kinjal.calculateAge());

function Person(firstName, lastName, dob) {
  //  constructor
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const kinjal = new Person("Kinjal", "Raykarmakar", "9-22-2000");

console.log(kinjal);
console.log(kinjal.calculateAge());
console.log(kinjal.getFullName());
