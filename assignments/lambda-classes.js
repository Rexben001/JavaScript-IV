// CODE here for your Lambda Classes
class Person {
  constructor(params) {
    this.name = params.name;
    this.age = params.age;
    this.location = params.location;
    this.gender = params.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(params) {
    super(params);
    this.specialty = params.specialty;
    this.favLanguage = params.favLanguage;
    this.catchPhrase = params.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(params) {
    super(params);
    this.previousBackground = params.previousBackground;
    this.className = params.className;
    this.favSubjects = params.favSubjects;
  }
  listsSubjects() {
     this.favSubjects.forEach(elem => console.log(elem));
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
    sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
    constructor(params) {
        super(params);
        this.gradClassName = params.gradClassName;
        this.favInstructor = params.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}



const anu = new Person({
    name: 'Anu',
    location: 'Yaba',
    age: 44,
    gender: 'male',
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const chinedu = new ProjectManager({
    name: 'Chinedu',
    location: 'MaryLand',
    age: 27,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Fullstack',
    catchPhrase: `No truth is certain until it works out`,
    gradClassName: 'WEBEU12',
    favInstructor: 'Gabe'
});

const john = new Student({
    name: 'John',
    location: 'Doe',
    age: 17,
    gender: 'male',
    previousBackground: 'Work at Chelsea Football Club',
    className: 'CS132',
    favSubjects: ['Array', 'Function', 'Class']
});
  
console.log(fred.demo('Java'));
console.log(fred.grade({ name: 'John' }, 'HTML'));
console.log(fred.specialty);

console.log(john.name);
console.log(john.listsSubjects());
console.log(john.PRAssignment('Array'));
console.log(john.sprintChallenge('Array'));

console.log(chinedu.name);
console.log(chinedu.favInstructor);
console.log(chinedu.standUp('chinedu_channel'));
console.log(chinedu.debugsCode({ name: 'Yusuf' }, 'Prototypes'));

console.log(anu.name);
console.log(anu.speak());

