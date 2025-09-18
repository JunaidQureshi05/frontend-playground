function Human(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Human.prototype.constructor = Human;
Human.prototype.speak = function () {
  console.log(`Hi there I am ${this.name}`);
};

let Person1 = new Human("Junaid", 25, "Male");

function Student(name, age, gender, course) {
  Human.call(this, name, age, gender);
  this.course = course;
}

Student.prototype = Object.create(Human.prototype, {});

Student.prototype.constructor = Student;

Student.prototype.intro = function () {
  console.log(`I am a ${this.course} student`);
};

let Student1 = new Student(
  "Junaid",
  25,
  "Male",
  "Computer Science & Engineering "
);

Student1.speak();

console.log(Student1 instanceof Student);
