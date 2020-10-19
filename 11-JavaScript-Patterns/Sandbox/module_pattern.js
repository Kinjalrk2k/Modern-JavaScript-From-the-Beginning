// basic structure of module pattern

// (function () {
//   // declare private variables and functions

//   return {
//     // declare public variables and functions
//   };
// })();

// module pattern - example
const UICtrl = (function () {
  let text = "Hello World";

  const changeText = function () {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();

// revealing module pattern - example
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added...");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    // revealing methods
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Mark" });
console.log(ItemCtrl.get(2));
