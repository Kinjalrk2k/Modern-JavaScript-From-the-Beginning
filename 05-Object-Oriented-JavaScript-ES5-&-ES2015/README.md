# ES5
## Constructor
- Should start with a capital letter
- Constructor creates objects
- ```this``` keyword - current instance of the object
    - ```this``` in a global scope returns the ```window``` object
- Method is an function inside an object
- Constructor is called using the ```new``` keyword

```js
function Person(name, dob) {
  //  constructor
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {      //  method
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const kinjal = new Person("Kinjal", "9-22-2000");
```

## Built-in Constructor
- Core objects have built-in constructors
- They includes
    - String
    - Number
    - Boolean
    - Function *
    - Object
    - Array
    - RegExp

```js
const name1 = "Jeff";
const name2 = new String("Jeff"); // as an String object

name2.foo = "bar"; // attributes can be set

/* 
The UGLY:-
name1 and name 2 cannot be compared as they are string and object repectively 
*/
```

## Prototypes
- Each object in JavaScript has a prototype
- A prototype is an object itself
- All objectss inherit properties and methods from prototypes
- ```Object.prototype```
- Prototype Chain - Any object can be chained through prototypes to the ```Object.prototype```
    - ```Person```
        - ```__proto__``` - ```Person.prototype```
            -   ```__proto__``` - ```Object.prototype```
- Attributes (like ```firstName```, ```lastName```) differ from object to object. But methods (like ```calculateAge```) generally remains the same for all the objects. So, methods should be put into the prototype, and not directly into the object.
    - Moving methods into the prototype
    ```js
    Person.prototype.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    ```
    - The functions within the prototype are called in the exact same way (```ObjectName.functionName()```)
    - Prototypes are not an actual property