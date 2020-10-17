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