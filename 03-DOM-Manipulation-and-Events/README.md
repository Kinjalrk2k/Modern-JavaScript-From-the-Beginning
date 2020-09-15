## DOM
- Document Object Model
- Structured representation of the HTML
- Tree Structure
- Read/Write/Manipulate using JavaScript
- Object Oriented Representation
- The browser gives the ```window``` object inside which we have the ```document``` object
    - The ```root``` or the ```html``` tag
        - ```head``` element
            - ```title```
            - ```meta```
        - ```body``` element
            - ``
            `h1```
            - ```a```

## Converting ```HTMLCollection``` to array
```js
let lis = document.getElementsByTagName('li');  //  returns a HTMLCollection
lis = Array.from(lis);  //  converting to array

lis.forEach(function(li) {  //  now this works!
    console.log(li);
});
```

## More DOM
### Traversing DOM - child
```js
const list = document.querySelector('ul');

list.childNodes //  returns a NodeList
list.children   //  returns a HTMLCollection
```

#### ```.nodeType``` returns
```js
list.childNodes[0].nodeName;
list.childNodes[0].nodeType;
```
| ```.nodeName``` | ```.nodeType``` |
|-----------------|-----------------|
| Element | 1 |
| Attribute (deprecated) | 2 |
| Text Node | 3 |
| Comment | 8 |
| Document itself | 9 |
| Doctype | 10 |

### Creating element
```js
const li = document.createElement('li');
li.appendChild(document.createTextNode('Hello World'));

document.querySelector('ul').appendChild(li)
```

### Replace element
```js
document.querySelector('selector').replaceChild(newOne, oldOne);
```

### Remove element
```js
const lis = document.querySelector('li');
lis[0].remove()
```

## More events
### ```event.preventDefaults()```
- Restricts the element from working on with their default function. Like for an ```a``` tag, the default function can be redirecting to a link. that can be stopped. Just the callback function will run!

### Event bubbling and delagation
- Related Events binded to the parent elements automatically gets triggered when an event occurs on a child node - this is called event bubbling
- Only the event binded to the first element triggers off. This happens mostly when the element is dynamiaclly loaded to the DOM through JS. Event delegation is used here. When event is triggered on a parent the children get triggered too!

## Local and Session Storage
- Present in the window object
- Local storage permanetly saves even after the browser is closed 
- Session storage stores just the sessional data, for the current browser session only
- To find the stored values in the localStorage:
    - Pop up the dev tools and look into Application > Storage
- values in the storage are ONLY STRINGS

### Set an item
```js
localStorage.setItem(key, value);
sessionStorage.setItem(key, value);
```

### Remove an item
```js
localStorage.removeItem(key);
sessionStorage.removeItem(key);
```

### Getting from the storage
```js
localStorage.getItem(key);
sessionStorage.getItem(key);
```

### Storing array/objects in the storage
- ```JSON.parse()``` to parse the data from the local storage
- ```JSON.stringify()``` to convert to string that can be saved in the storage