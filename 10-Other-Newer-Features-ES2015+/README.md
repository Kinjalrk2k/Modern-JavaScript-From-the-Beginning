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