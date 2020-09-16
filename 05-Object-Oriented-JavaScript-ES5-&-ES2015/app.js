/*
function Person(name, dob) {
  //  constructor
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const kinjal = new Person("Kinjal", "9-22-2000");

console.log(kinjal);
console.log(kinjal.calculateAge());
*/

/*
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
*/

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// greetings
Person.prototype.greetings = function () {
  return `Hello there, ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Kinjal", "Raykarmakar");

// customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// inherit the Person prototype
Customer.prototype = Object.create(Person.prototype);

// make the prototye return
Customer.prototype.constructor = Customer;

// customer greeting
Customer.prototype.greetings = function () {
  return `Hello there, ${this.firstName} ${this.lastName}! Welcome to our company!`;
}

const customer1 = new Customer("Tom", "smith", "846579320", "Standard");

console.log(customer1);
console.log(customer1.greetings());
