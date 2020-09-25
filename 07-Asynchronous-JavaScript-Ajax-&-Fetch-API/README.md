# Asynchronous JavaScript

- Synchronous Code

  - Waits for an statement to complete it's full execution and then goes to the next statement
  - Called blocking code, as it slows things down
  - ```js
    posts = loadPostsSync();
    // ... wait till posts are fetched
    // ... do something with the posts

    doTheNextThing(); //  has to wait till the posts loads
    ```

- Asynchronous Code

  - Doesn't wait for the execution to commplete
  - Much Faster
  - ```js
    loadPostsAsync(function () {
      // ... wait till posts are fetched
      // ... do something with the posts
    });

    doTheNextThing(); // doesn't has to wait till the posts loads
    ```

- Ways to handle Async Code
  - Callbacks
  - Promises
  - Async/Await

# Ajax

- Stands for: Asynchronous JavaScript and XML
- Not a language/framework/library - it's a set of web technologies
- Send and Receive data from and to clinent and server _asynchronously_
- Done behind the scenes without explicitly reloading the page: doesn't interfare with the current page
- XML is included in the Ajax acronymn, though JSON has replaced XML: easier, faster, popular
- Ajax can also work with plain text
  ![Ajax Diagram](readme-assets/ajax-diagram.png)
- Make async requests in background
- No reload - So, Ajax is much faster
- Fetch data
- Very interactive
- The Ajax Engine
  - For ajax to work, an ajax engine is an intermediate between the client and server
  - The client makes an ajax call or an asynchronous javascript call
  - The Ajax Engine uses the XMLHTTPRequest(XHR) object to communicate with the server
  - The server returns in JSON format (or XML/Plain Text)
  - We can parse this data in our application
  - All theses stuufs are done without a page refresh!
- Libraries to make requests
  - Fetch API: part of core browser javascript
  - Axios
  - Superagent
  - jQuery
  - Node HTTP

## XMLHTTPRequest(XHR) object

- Core technology in Ajax
- Provided by the browser's javascript enviornment
- Transfers data between server-client
- Can be used with other protocols like: HTTP
- Can work on data other than XML, like JSON and plain text
- Syntax

```js
// create an XHR object
const xhr = new XMLHttpRequest();

//open
/*
    params in order:-
    - type of request
    - file to which request is made
    - making async request, hence: true
  */
xhr.open("GET", "data.txt", true);

// used for spinners/loaders
xhr.onprogress = function () {
  console.log(this.readyState);
};

// onload
xhr.onload = function () {
  //  do whatever we wannt to do with the data that we get

  // checking HTTP status. 200: "OK"
  if (this.status === 200) {
    console.log(this.responseText); //  the data coming with the response
  }
};

// if something goes wrong
xhr.onerror = function () {
  console.log("Request Errro");
};

// to finalize everything
xhr.send();
```

### Few HTTP Statues

- 200: OK
- 403: Forbidden
- 404: Not Found

### Ready State values

- 0: Request not initiated
- 1: Sever Connection established
- 2: Request Recieved
- 3: Processing request
- 4: Request finished and the response is ready

### `xhr.onreadystatechange`

- `xhr.onload` is a new way, earlier, `xhr.onreadystatechange` was used!
- Using `xhr.onload` we are already in the `readyState` `4`
- Syntax

```js
xhr.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    console.log(this.responseText);
  }
};
```
