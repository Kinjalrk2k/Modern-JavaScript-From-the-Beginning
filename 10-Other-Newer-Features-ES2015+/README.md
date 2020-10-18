# Iterators
- Call part of a return, pause it and then again call the next part
- Kinda like advanced loops
- Check out the `Sandbox0` folder

# Generators
- Funcstions that can be paused and return multiple values
- `function* foo()` → `*` tells JS that it's a generator and not a function
- Check out the `Sandbox0` folder

# Symbols
- Every Symbol is unique
- Useful in object property identifiers
- We dont use `new Symbol()` as there is no constructor. It is a primitive datatype
- ```js
    const sym2 = Symbol("identifier");
    ```
- No two Symbols can be same even if we put the same identifier
- Symbols are not enumerable in `for...in`
- Symbols are ignored when using `JSON.stringify`

# DeStructuring
- Easy way to assign and extract variables fromarrays and objects
- `[a, b] = [100, 200]`
- Rest pattern
    - `...` is called the spread operator
    - `[a, b, ...rest] = [100, 200, 300, 400, 500];` → `rest` will have value `[300, 400, 500]` (an array)
- Can be used with Objects too
    - `({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });`
    - `({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });`
- Examples:
    - ```js
        const people = ["John", "Beth", "Mike"];
        const [person1, person2, person3] = people;
        ```
    - ```js
        const person = {
        name: "John Doe",
        age: 32,
        city: "Miami",
        gender: "Male",
        };

        const { name, age, city } = person;
        ```

# Maps
- New object structures
- Introduced in ECMAScript 6
- Holds key-value pairs
- Any value: whether it's an object reference type or primitive type can be used as key or value
- We can use an object as a key
- Map Syntax
    - `const map1 = new Map();`
- Setting and Getting values
    - ```js
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
        ```
- Size
    - `console.log(map1.size); //  3`
- Iterations
    - ```js
        for (let [key, value] of map1) {
            console.log(`${key} = ${value}`);
        }
        ```
    - Only keys
        - ```js
            for (let key of map1.keys()) {
                console.log(key);
            }
            ```
    - Only values
        - ```js
            for (let value of map1.values()) {
                console.log(value);
            }
            ```
    - `forEach`
        - ```js
            map1.forEach(function (value, key) {
                console.log(`${key} = ${value}`);
            });
            ```
- Convert to arrays
    - ```js
        const keyValArr = Array.from(map1)
        console.log(keyValArr)

        const valArr = Array.from(map1.values())
        console.log(valArr)

        const keyArr = Array.from(map1.key())
        console.log(keyArr)
        ```

# Sets
- List of unique values → Primitive or reference
- Syntax
    - `const set1 = new Set();`
    - `const set2 = new Set([1, true, "A String"]);`
- Add to set 
    - `set1.add(100)`
- Size
    - `set1.size`
- Check for values
    - `set1.has(100)`
    - returns `boolean`
    - Objects cannot be found this this - as each object  is unique and has their own reference value
- Delete
    - `set1.delete(100)`
- Iterate
    - ```js
        for(let item of set1) {
            console.log(item);
        }
        ```
    - Sets are not key-value pairs. So, `set1`, `set1.values()`, `set1.keys()`, `set1.entries()` are the same thing
    - ```js
        set1.forEach((value) => {
            console.log(value);
        })
        ```
- Convert to arrays
    - ```js
        const setArr = Array.from(set1);
        ```