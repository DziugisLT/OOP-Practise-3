'use strict';
/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //  this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

Person.hey = function () {
  console.log('Hey there');
};
const jonas = new Person('Jonas', 1991);

Person.hey();
jonas.hey();

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda);
console.log(jack);

console.log(jonas instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

Person.prototype.species = 'Homo sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [
  1, 2, 4, 4, 4, 4, 4, 3, 2, 2, 3, 2, 2, 4, 7, 8, 9, 58, 3, 4, 5, 6, 7, 8,
];

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
 */
/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1, car2);
car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake(); */
/* 
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hi');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();
jessica.hey();

///////////////////////////////////////
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);
 */

/* const PersonProto = {
  calcAge: function calcAge() {
    console.log(2037 - this.birthYear);
  },

  init: function init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge(); 
steven.init('Steven', 2002);
steven.calcAge();
 */

/* class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  // get speedUS() {
  //   return this._speed;
  // }
}

const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford); */

/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'CS');
Student.prototype.constructor = Student;
console.log(mike);
mike.introduce();
mike.calcAge();
 */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

/* Car.prototype.accelerate = function () {
  return (this.speed += 10);
};*/

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);

console.log(tesla);

tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);
