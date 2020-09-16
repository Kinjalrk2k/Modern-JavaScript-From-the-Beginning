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