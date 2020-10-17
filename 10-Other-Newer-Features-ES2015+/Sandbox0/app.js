// Iterator example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true };
    },
  };
}

const namesArr = ["Jack", "Joe", "John"];

// initialize the iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

// Generator Example
function* sayNames() {
  yield "Jack";
  yield "Joe";
  yield "John";
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID creator
function* createIDs() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIDs();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
