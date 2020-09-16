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

## Prototypal Inheritance
- ```.call(this, params...)``` method lets us call a function from the current function
    - ```params...``` must be the parameters used to initialize the base class
    - Almost like Java!
- Attributes/Properties are inherited, but not prototypes
    - To inherit the prototypes
    ```js
    SubClass.prototype = Object.create(BaseClass.prototype);
    ```
    - To use the subclass constructor
    ```js
    Customer.prototype.constructor = Customer;
    ```
    - Methods can be overridng in the base class, by simply re-declaring them!

## ```Object.create```
- ```Object.create``` takes in prototypes
- Attributes can be hard coded directly using the object

# ES6
- Similar to OOP languages like Java, C#, PHP, etc
- A class has attributes/properties, methods, constructors.
- Syntax
```js
class ClassName {
    constructor (/*takes the parameters to initialise*/) {
        // set the attributes using this.attributeName
    }

    methodName () { //  no need for prototypes and all
        /*
            ...
        */
    }

    static fooBar () {  //  static method
        /*
            ...
        */
    }
}

const object = new Classname(/* ... */);        //  creating an object
object.methodName();    //  calling a method
ClassName.fooBar();     //  calling static method
```
- Under the hood, ES6 classes uses the ES5 syntax only. Thats why classes are caled  due to convenient use
- Static methods
    - Can be used without instantiating(creating) an object

## Subclass
```js
class Subclass extends BaseClass {
    constructor((/* ... ... ... */) {
        super(/* ... */);  //  calling the baseclass constructor
        // set the attributes using this.attributeName
    }
}
```
- Told ya, It's Java!