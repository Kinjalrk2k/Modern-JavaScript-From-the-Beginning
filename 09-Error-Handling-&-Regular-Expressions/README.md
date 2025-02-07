# Error Handling
- `try` bloack lets her write a bit of code to test for error
- `catch` block lets us handle those errors
- We can also throw our own errors
- We can hanle errors without stopping the whole program by using `try ... catch`
- A big Syntax
    ```js
    try {
        myFunction();  // myFunction isn't defined: ReferenceError
        null.myFunction();  //  TypeError
        eval('Hello');  //  SyntaxError
        decodeURIComponent("%"); //  URIError

        // throwing errors
        const user = {email: "jdoe@gmail.com"};
        if(!user.name) {
            // throw "User has no name";
            throw new SyntaxError("User has no name");
        }
    } catch(err) {
        console.log(err);
        console.log(err.message); // just prints the error message
        console.log(err.name); // name of the error
        console.log(err instanceof ReferenceError); // type of the error
    } finally {
        console.log("Finally runs regardless of the result...!");
    }
    console.log("Program Continues...")
    ```

# Regular Expressions
- Basically used to describe a pattern of characters
- Pattern matching or pattern searching
- Commonly used for validation, and pulling things out of the body of text(or characters)
- Regex is enclosed within two forward slashes
    - ```/ regex here... /```
    - ```let re = /hello/```

## Functions:
- `re.source`: prints the regex string without the forward slashes
- `exec()`: Return a result in an array if there is a match or else will return `null`
    - The array contains the `index` from which the the matching string starts
    - ```js
        let re = /hello/;
        const result = re.exec("hello world");

        result // the whole array
        result[0]   // the search string
        result.index    //  starting index of the matching string part
        result.input    //  the input string (hello world)
        ```
- `test()`: Returns `true` or `false` according to pattern match
    ```js
    const result = re.test("hello");
    result  // true
    ```
- `match()` - Resturns result array or `null`
    - Very much similar to `exec()
    - ```js
        let re = /hello/;
        const str = "hello there!";
        const result = str.match(re);

        result // returns same things as of exec()
        ```
- `search()` - Returns the index of the first match, if not found, it returns -1
    - Works kinda like `indexof()`
- `replace()` - Return a new string with some or all matches of the pattern
    - ```js
        let re = /hello/;
        const str = "hello there!";
        const newStr = str.replace(re, "hi");

        newStr  // hi there!
        ```

## Flags
- Flags are written after the regex (after ending `/`)
    - `i` - ignore case (case insensitive) → `/hello/i`
    - `g` - global search: search for all instances, not just the first one → `/hello/g`

## Meta-characters
- Literal characters: The characters that match exactly
- `^`: must start with
    - `/^h/` - must start with 'h'
- `$`: must end with
    - `/d$/` - must end with 'd'
    - `/^d$/` - must begin and end with 'd'
- `.`: matches any one character in place of `.`
    - `/a.c/` - can match "abc", "a2c", ... etc
- `*`: matches character zero or more times
- `+`: matches character one or more times
- `?`: Optinal character
    - Place `?` after the optional character
    - `/gre?a?y/` - can match "gry", "gray" and "grey"
- `\`: Used for escape character

## Character Sets
- `[]` are character sets
- `[ae]` means either 'a' or 'e' (one character)
- Can be combined with the metacharacters
    `\^[ae]\` means starts with 'a' or 'e'
- `^`: Negation
    - `[^GF]` means can match anything except "G" and "F"
- Range
    - `[A-Z]` range: anything between A-Z
    - `[A-Za-z]` multiple ranges

## Quantifiers
- `{}` are quantifiers
- Works with the character after
    `/l{2}/` - matches 2 'l's, "ll"
    `/l{2,4}/` - matches 2-4  'l's, "ll", "lll" and "llll"
    `/l{2,}/` - matches at least 2 times

## Parenthesis
- `()` used for groupings

## Shorthand character classes
- `\w` - Alphanumeric character: Any number, alphabet or underscore(_)
- `\W` - Non-Alphanumeric characters
- `\d` - Digit
- `\D` - Non-digit
- `\s` - Whitespace: spaces, tabs
- `\S` - Non-whitespace
- `\b` - Word bourndary: checks the whole word
    - `/Hell\b/` will match "Hell" and not "Hello"

## Assertions
- `/x(?=y)` - Match "x" only if it is followed by "y"
    - `/x(?!y)` - Match "x" only if it is NOT followed by "y"