// colleagues
const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },

  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

// mediator
const Chatroom = function () {
  let users = {}; // list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // private message
        to.recieve(message, from);
      } else {
        // broadcast to chatroom
        for (key in users) {
          if (users[key] != from) {
            users[key].recieve(message, from);
          }
        }
      }
    },
  };
};

const kinjal = new User("Kinjal");
const brad = new User("Brad");
const jeff = new User("Jeff");

const chatroom = new Chatroom();

chatroom.register(kinjal);
chatroom.register(brad);
chatroom.register(jeff);

kinjal.send("Hello Brad", brad);
jeff.send("Hello Kinjal!", kinjal);
brad.send("Hello Guys!");
