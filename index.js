/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  Person.prototype.eat = function(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
  }

  Person.prototype.poop = function(){
    this.stomach = [];
  }

  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }

  const dave = new Person('Dave', 27);

  dave.eat('pizza');
  dave.eat('apple');
  dave.eat('sushi');
  console.log(dave.stomach);
  dave.poop();
  console.log(dave.stomach);
  console.log(dave.toString());
  
  
 
 

  
  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  Car.prototype.fill = function(gallons){
    this.tank += gallons;
    return this.tank;
  }

  Car.prototype.drive = function(distance){
    const drivableMiles = this.tank * this.milesPerGallon;
     
    if(distance > drivableMiles) {
      this.odometer += drivableMiles;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`
    } else {
      this.odometer += distance;
      this.tank -= (distance / this.milesPerGallon);
    }
  }

const Ford = new Car('Ford', 25);

console.log(Ford);
console.log('task2b', Ford.drive(10000));
console.log('task2a', Ford.fill(20));
console.log('task2c', Ford.fill(20));
console.log(Ford);
  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age);
   this.favoriteToy = favoriteToy;
  }

  Baby.prototype = Object.create(Person.prototype);

  Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`;
  }
 
  const lilDave = new Baby('lil Dave', 1, 'ball');
  console.log('task3', lilDave.play());


  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. When in the global scope, so not inside an object that is inside of the window object, the value of "this" will be the window Object.
    2. Whenever a function is called by using a preceding dot ( eg myObj.function() ), the value of "this" will be the object to the left of the dot.
    3. When using a constructor function, "this" refers to the new instance of the object that is created by the constructor function. eg if you had a new constructor function: function DogMaker(prop){
      this.name = prop.name,
      this.breed = prop.breed
    }
    and you initialize a new object by: 
    const buddy = new DogMaker({
      name = 'Buddy',
      breed = 'Basset Hound'
    });
    then "this" (in lines 156 and 157) will have the value of the new object that is created using the constructor function (in this example: buddy). So the constructor function would assign the value of this.name (which in this initialization can be thought of as equivalent to buddy.name) to the value of the name key of the object getting passed into the constructor function via the placeholder value "prop".
    4. You can use explicit binding to explicitly define the value of "this". For example, by using .call(), .apply(), or .bind(), you can override implicit binding. These methods immediately call the function and the value of "this" will be the arguments passed into each method.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}