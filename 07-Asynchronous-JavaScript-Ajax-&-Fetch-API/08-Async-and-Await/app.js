// async function myFunc() {
//   //   return "Hello";

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   const err = true; // mimicing an error

//   if (!err) {
//     const res = await promise; // wait until the promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong!"));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // only proceed when resolved
  const data = await response.json();

  // only proceed when second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
