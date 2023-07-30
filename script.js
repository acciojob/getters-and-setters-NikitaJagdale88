//complete this code
class Person {
	constructor(name, age) {
    this.name = name;
    this.age = age;
}
	// Getter for name
  get name() {
    return this.name;
  }

  // Setter for age
  set age(age) {
    this.age = age;
  }

  // Getter for age
  get age() {
    return this.age;
  }
}

class Student extends Person {
	constructor(name, age){
		super(name, age)
	}
	study(){
     consol.log(${this.name} is studying)
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age)
	}
	tech(){
     consol.log(${this.name} is teaching)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
