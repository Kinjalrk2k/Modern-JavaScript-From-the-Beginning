let re;

// literal characters
re = /hello/;
re = /hello/i;

// meta character symbols
re = /^h/i; // starts with
re = /d$/;  // ends with
re = /^hello$/  // starts and end with
re = /h.llo/  //  matches any one character in dot
re = /h*llo/  // matches character zero or more times
re = /gre?a?y/  //  optional character
re = /gre?a?y\?/  // escape characters

// Brackets [] - character sets
re = /gr[ae]y/  //  must be a or e
re = /[^GF]ray/ //  can match anything except G or F


// string to match
const str = "hello World";

const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches the ${re.source}`);
  } else {
    console.log(`${str} does not matches the ${re.source}`);
  }
}

reTest(re, str);
