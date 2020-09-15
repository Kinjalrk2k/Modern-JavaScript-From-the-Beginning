## JS console
```js
console.table(object); // prints a table with key value pairs
console.error("This is an error")   //  shows error in red
console.warn("This is a warning")   //  shows error in orange
console.time(identifier)    //  shows time required  to run the scripts between same identifier
```

## Variable declaration
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

## Datatypes
- Primitive DataTypes
    - Data is directly stored in the location the variable access
    - Stored in stack
- Reference DataTypes
    - Accessed by reference
    - Stored on the heap
    - Pointer to the memory location
    - Dynamically stored
    - There are object wrappers for String and Numbers

## Primitive DataTypes
- String
- Number (Everthing - ```int```, ```float```, ```double```)
- Boolean (```true```, ```false```)
- ```null```
- ```undefined``` - (all variables are undefined by default)
- Symbols (ES6)

## Reference DataTypes
- Arrays
- Object Literals
- Funcctions
- Dates
- Everything else ... (well, that long - That's what she said)

## Dynamically Typed Language
- Same variables can hold different datatype
- Types not associated with values
- No need to specify types

## Type conversion
- Wrapper is use to convert types explicitly
    - ```let val = String(12);```
    - ```let val = Number("34");```
- Converting to String
    - Boolean to string returs as ```"true"``` and ```"false"```
    - Array to string - returs a comma seperated string
    - ```.toString()``` also converts to string
- Converting to Number
    - ```true``` gives 1
    - ```false``` and ```null``` gives 0
    - Strings, arrays will give ```NaN```
    - ```parseInt("134")``` - does the same thing (but returns integer - no decimal)
    - ```parseFloat("123.003")``` - works

## Type coersion
- JavaScript does it implicitly
- Converts dataypes automatically for operations

## Math with numbers
- Math object
    - It is an object which has properties(attribute) and methods(function)
    - Just a generic math library for a language

## String methods
- Concatination with ```+``` operator
    - ```.concat()``` method does the same
    - Template literals make this a lot easier!
- ```\``` used foe escaping (Escape Sequence)
- ```.indexOf()``` used for searching and returns the index of the first match
    - returns ```-1``` if not found
    - ```.lastIndexOf()``` checks from the end of the string
- ```.charAt()``` used to return character at index
    - ```.charAt(val.length - 1)``` - last character
- ```.substring(f, l)``` - substring between ```f``` and ```l```
- ```.slice(f, l)``` - same as substring
    - mostly used in arrays
    - allows negative indexing
- ```.split(sperator)``` - strings according to sperator
- ```.replace(old, new)``` 
- ```.includes(string)``` - checks if the string is present as substring and returns a boolean value

## Template Literals
- Uses backticks ``` ` ... ` ``` 
- Example:
    ```js
    let html = `
        <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Value: ${32 + 9}</li>
        </ul>
    `
    ```

## Array and Array methods
- Can hold mixed datatype
- Declaring
    - ```const arr = [12, 34, 76];``` - using ```[]```
    - ```const arr = new Array(12, 34, 76);``` - using new operator(constructor)
- ```Array.isArray(arr)``` - checks if something is an array
- ```.indexOf()```
- Appending
    - ```.push(val)``` - appends on the end
    - ```.unshift(val)``` - appends on the front
- Popping
    - ```.pop()``` - pops from the end
    - ```.shift()``` - pops from front
- ```.splice(l, f)``` - pops elements in the range of ```l``` and ```f```
- ```.reverse()```
- ```arr1.concat(arr2)``` - joins ```arr1``` and ```arr2```
- ```.sort()``` - umm, it's complicated! (That's what they said)
    - sorted by characters
    - sort numbers with sanity:-
    ```js
    numbers.sort(function(x, y) {
        return x - y; // ascending
    });
    ```
- ```.find()``` - takes a function
    - Eg:
    ```js
    function under50(num) {
        return num < 50;
    }

    let val = numbers.find(under50);    //  just the first match
    ```

## Object Literal
- ```.val``` used to select values from object
- ```['val']``` - same thing!

## Date and Time
- ```const today = new Date();```
- ```Date``` is an ```object``` type
- ```const birthday = new Date('Semptember 22 2000 11:35:00');```

[MDN - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## Ternary Operator
```js
const val = 100
console.log(val === 100 ? "Correct" : "Incorrect");
```

## Switches
```js
switch(color){
    case 'red':
        console.log("Color is red");
        break;
    case 'blue':
        console.log("Color is blue");
        break;
    default:
        console.log("Color is not red or blue");
        break;
}
```

## Function Expressions
```js
const square(x = 3) {   //  defualt value
    return x * x;
}

square();   //  9
```

## Immediately Invokable Function Expressions (IIFEs)
```js
(function(name) {
    console.log(name + " ran...");
}("Brad"));
```

## Property Method
```js
const todo = {
    add: function() {
        console.log("Add Todo...");
    }
;}
todo.delete = function() {
    console.log("Delete Todo...");
}

todo.add()
todo.delete()
```

## ```map()```
```js
const users = [
    {id: 1, user: "John"},
    {id: 2, user: "Sara"},
    {id: 3, user: "Karen"}
]

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);   //  [1, 2, 3]
```

## ```for-in``` loop
```js
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 40
}

for(let x in user) {
    console.log(x);     //  gives the keys
    console.log(user[x])    //  gives the value
}
```

## Window methods
- ```window.scrollY``` - scroll location
- ```window.location``` - details on URLs, host, etc
    - ```window.location.reload();``` - constantly reloads
- ```window.history``` - browser history
    ```window.history.go()``` - -ve goes back, +ve goes forward
- ```window.navigator``` - details about the browser

## Block Scope
- Scope of a block of code (inside {})
- Though outside any {} are global scope
- ```let``` and ```const``` follow normal scoping rules
- In ```var```, the block scope overrides the global scope 