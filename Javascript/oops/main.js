class Human {
  static #species = "Homo Sapiens";
  #gender;

  constructor(gender) {
    this.#gender = gender;
  }
  getInfo() {
    console.log(this.age);
  }
}

class Student extends Human {
  constructor(name, age, gender) {
    super(gender);
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`Hi there my name is ${this.name}`);
  }
}

let Person = new Student("John", 25, "Male");

console.log(Student.prototype);

// Parent "class"
function Human(gender) {
  this.gender = gender;
}

Human.prototype.getInfo = function () {
  console.log(this.gender);
};

// Child "class"
function Student(name, age, gender) {
  // Call parent constructor (super)
  Human.call(this, gender);
  this.name = name;
  this.age = age;
}

// Inherit from Human
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

// Add method
Student.prototype.speak = function () {
  console.log("Hi, I am " + this.name);
};

var s = new Student("John", 25, "Male");
s.speak(); // Hi, I am John
s.getInfo(); // Male
