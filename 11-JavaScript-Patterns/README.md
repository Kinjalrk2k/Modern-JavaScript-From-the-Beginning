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

# Revealing Module pattern
- Instead of returning the public functions, we map a object literal to private functions, we want to reveal → That's why it's called "Revealing" module
- Private variables are sometimes prefixed with underscore(_)