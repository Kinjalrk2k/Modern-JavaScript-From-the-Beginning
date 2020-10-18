const map1 = new Map();

// set keys
const key1 = "some string",
  key2 = {},
  key3 = function () {};

// set values
map1.set("key1", "Value of key1");
map1.set("key2", "Value of key2");
map1.set("key3", "Value of key3");

// get values by key
console.log(map1.get(key1)); // Value of key1
console.log(map1.get(key2)); // Value of key1
console.log(map1.get(key3)); // Value of key1

// count values
console.log(map1.size); //  3

// iteration in maps
// loop using for...of
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// iterate key only
for (let key of map1.keys()) {
  console.log(key);
}

// iterate values only
for (let value of map1.values()) {
  console.log(value);
}

// forEach
map1.forEach(function (value, key) {
  console.log(`${key} = ${value}`);
});

// convert to arrays
const keyValArr = Array.from(map1)
console.log(keyValArr)

const valArr = Array.from(map1.values())
console.log(valArr)

const keyArr = Array.from(map1.key())
console.log(keyArr)