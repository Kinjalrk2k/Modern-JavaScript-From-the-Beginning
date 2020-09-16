const PersonPrototypes = {
  greeting: function () {
    return `Hello there, ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(PersonPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 19;

mary.getsMarried("Thomson");

console.log(mary.greeting());

// alternate syntax
const brad = Object.create(PersonPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 36 },
});

console.log(brad.greeting())