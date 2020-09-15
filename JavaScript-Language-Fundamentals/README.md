### JS console
```js
console.table(object); // prints a table with key value pairs
console.error("This is an error")   //  shows error in red
console.warn("This is a warning")   //  shows error in orange
console.time(identifier)    //  shows time required  to run the scripts between same identifier
```

### Variable declaration
- Variables names can be letters, numbers, _ and $, while cannot start with numbers
- Multi-word variable
    - generally camelCased
    - TitleCase in OOP

- ```var```
    - We can reassign variables
- ```let```
    - Identical to var at a global scope
    - We can reassign variables
- ```const```
    - Constant, cant changed or reassigned
    - Have to assign a value (initialized)
    - Constant object literals cannot to set to another object, but the values in a constant object literal can be changed