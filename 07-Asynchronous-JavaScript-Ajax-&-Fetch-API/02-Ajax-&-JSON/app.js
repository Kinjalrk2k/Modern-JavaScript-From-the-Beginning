document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

// load customers
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", "customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      // console.log(customer)

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

// load customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      // console.log(customers)

      let output = "<ol>";

      customers.forEach(function (customer, index) {
        output += `
        <li>
          <strong>Customer ${index + 1}</strong>
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
        </li>
      `;
      });
      output += "</ol>";

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
