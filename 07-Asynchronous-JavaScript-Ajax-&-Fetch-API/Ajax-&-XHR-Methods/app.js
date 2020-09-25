document.getElementById("button").addEventListener("click", loadData);

function loadData() {
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
      //   console.log(this.responseText); //  the data coming with the response

      document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // if something goes wrong
  xhr.onerror = function () {
    console.log("Request Error");
  };

  // to finalize everything
  xhr.send();
}
