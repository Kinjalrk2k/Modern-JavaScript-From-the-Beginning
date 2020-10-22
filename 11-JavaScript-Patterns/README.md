# JavaScript Patterns
- Design Patterns
- Pattern is a reusable solution that can be applied to occurring problems in software design (JS Application)
- Can be also be thoight as templates
- Situations vary significantly
- Patterns we are looking at:
    - Module
    - Revealing Module
    - Singleton
    - Factory
    - Observer
    - Mediator
    - State

# Module Pattern
- New in ES6: We can use seperate files to export modules - which are just custom pieces of code and import them in files. However, the browsers do not support modules. We'll need to use a compiler like `Babel` along with a module loader like `WebPack` for that to work! 
- In ES5: We have Module pattern which allows us to break up parts of our code into *self-contained* modules with private properties(variables) and methods(functions)
- Immediately invoked function expression (IIFE)
- ```js
    // basic structure of module pattern

    (function () {
    // declare private variables and functions

    return {
        // declare public variables and functions
    };
    })();
    ```
- [app.js](Sandbox/module_pattern.js)

# Revealing Module pattern
- Instead of returning the public functions, we map a object literal to private functions, we want to reveal → That's why it's called "Revealing" module
- Private variables are sometimes prefixed with underscore(_)
- [app.js](Sandbox/module_pattern.js)

# Singleton pattern
- Actually a manifestation of the module pattern
- Singleton object is an immediate anonymous function and it can only return one instance of an object at a time
- Repeated calls to the constructor always returns the same instance
- Maintains a private reference which nothing from the outside can access
- We use singleton pattern when we want only one object created at a time
- Singleton gives a global point of access, rather than embracing encapsulation 
- [app.js](Sandbox/singleton.js)

# Factory pattern
- Also known ass factory method
- Way of creating an interface for creating objects 
- We can let subclasses to define which classes to instantiate
- Factory methods are often used in applications to manage and maintain and manipulate collections of objects that are different but have some same characteristics
- [app.js](Sandbox/factory.js)

# Observer Pattern
- Behavioural Pattern
- Subscribe or Unsubscribe to certain events or functionalities
- Subscribtion model
- Can be used to notify the DOM when certain elements are updated
- AngularJS relies heavily on this pattern: event management within a scope
- [app.js](Sandbox/observer.js)

# Mediator Pattern
- Behavioural Pattern
- Basically a mediator: An interface for communicating with *"colleagues"* (mediated objects)
- Example: Chat Room
- [app.js](Sandbox/mediator.js)

# State Pattern
- Behavioural Pattern
- Sortof how State Managers like Redux works
- We've a state which we can change throughout our script