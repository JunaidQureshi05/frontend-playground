class Human {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  speak() {
    console.log(`Hi there I am ${this.name}`);
  }
}

class Student extends Human {
  constructor(name, age, gender, course) {
    super(name, age, gender);
    this.course = course;
  }
  intro() {
    console.log(`I am a ${this.course} student`);
  }
}

let Student1 = new Student(
  "Junaid",
  25,
  "Male",
  "Computer Science & Engineering "
);

Student1.speak();

console.log(Student1 instanceof Human); // true
console.log(Student1 instanceof Student); // true
