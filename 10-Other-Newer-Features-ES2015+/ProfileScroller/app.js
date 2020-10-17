function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
    },
  };
}

fetch("https://randomuser.me/api/?results=10")
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Looks like there was a problem. Status Code: " + response.status);
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      //   console.log(data);
      const bigData = data.results;
      console.log(bigData);

      const profiles = profileIterator(bigData);

      document.getElementById("next").addEventListener("click", nextProfile);

      // call first profile
      nextProfile()

      function nextProfile() {
        const currentProfile = profiles.next().value;
        if (currentProfile != undefined) {
          document.getElementById("profileDisplay").innerHTML = `
                <ul class="list-group">
                    <li class="list-group-item">Name: ${currentProfile.name.first} ${currentProfile.name.last}</li>
                    <li class="list-group-item">Age: ${currentProfile.dob.age}</li>
                    <li class="list-group-item" style="text-transform:capitalize;">Gender: ${currentProfile.gender}</li>
                    <li class="list-group-item">Location: ${currentProfile.location.state}, ${currentProfile.location.country}</li>
                </ul>
            `;

          document.getElementById("imageDisplay").innerHTML = `
                <img src="${currentProfile.picture.large}">
                `;
        } else {
          window.location.reload();
        }
      }
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });
