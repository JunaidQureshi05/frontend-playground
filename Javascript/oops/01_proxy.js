let person = {
  name: "Junaid",
  age: 25,
};

let handler = {
  get: function (target, property) {
    console.log("getting proprty", property);
    return target[property];
  },
  set: function (target, property, value) {
    target[property] = value;
  },
};

let proxied = new Proxy(person, handler);

proxied.name = "Mr. Junaid";
console.log(proxied, person);
