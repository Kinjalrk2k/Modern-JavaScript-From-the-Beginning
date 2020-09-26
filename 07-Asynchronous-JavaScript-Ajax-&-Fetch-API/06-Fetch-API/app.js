document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

// get local txt file
function getText() {
  fetch("test.txt")
    .then(function (res) {
      //  this .then is for the fetch API
      return res.text();
    })
    .then(function (data) {
      //   this .then is for the res.text() Promise object
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// get local json data
function getJson() {
  fetch("customers.json")
    .then(function (res) {
      //  this .then is for the fetch API
      return res.json();
    })
    .then(function (data) {
      //   this .then is for the res.text() Promise object
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.name}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// get external api data
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      //  this .then is for the fetch API
      return res.json();
    })
    .then(function (data) {
      //   this .then is for the res.text() Promise object
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}<br/><img src="${user.avatar_url}" width=100px></li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
