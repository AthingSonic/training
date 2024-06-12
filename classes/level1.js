/*
Create an Animal class. The class will have name, age, color, legs properties and create different methods
*/

console.log(
  `Create an Animal class. The class will have name, age, color, legs properties and create different methods`
);
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  // Method to describe the animal
  describe() {
    return `${this.name} is a ${this.color} animal, aged ${this.age} years, and has ${this.legs} legs.`;
  }

  // Method to simulate the animal making a sound
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }

  // Method to simulate the animal eating
  eat(food) {
    console.log(`${this.name} is eating ${food}.`);
  }

  // Method to simulate the animal moving
  move() {
    console.log(`${this.name} is moving around.`);
  }

  // Method to age the animal by a given number of years
  ageBy(years) {
    this.age += years;
    console.log(`${this.name} is now ${this.age} years old.`);
  }

  // Static method to compare the ages of two animals
  static compareAges(animal1, animal2) {
    if (animal1.age > animal2.age) {
      return `${animal1.name} is older than ${animal2.name}.`;
    } else if (animal1.age < animal2.age) {
      return `${animal1.name} is younger than ${animal2.name}.`;
    } else {
      return `${animal1.name} and ${animal2.name} are the same age.`;
    }
  }
}

// Example usage:
const animal1 = new Animal("Leo", 4, "golden", 4);
const animal2 = new Animal("Bella", 2, "black", 4);

console.log(animal1.describe());
animal1.makeSound();
animal1.eat("meat");
animal1.move();
animal1.ageBy(1);

console.log(animal2.describe());
animal2.makeSound();
animal2.eat("grass");
animal2.move();
animal2.ageBy(3);

console.log(Animal.compareAges(animal1, animal2));

/*
Create a Dog and Cat child class from the Animal Class.
*/
console.log(`Create a Dog and Cat child class from the Animal Class.`);

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs); // Call the parent class constructor
    this.breed = breed;
  }

  // Override makeSound method for dogs
  makeSound() {
    console.log(`${this.name} barks.`);
  }

  // Specific method for dogs to fetch
  fetch(item) {
    console.log(`${this.name} is fetching ${item}.`);
  }
}

// Cat class extending Animal class
class Cat extends Animal {
  constructor(name, age, color, legs, favoriteToy) {
    super(name, age, color, legs); // Call the parent class constructor
    this.favoriteToy = favoriteToy;
  }

  // Override makeSound method for cats
  makeSound() {
    console.log(`${this.name} meows.`);
  }

  // Specific method for cats to play with a toy
  play() {
    console.log(`${this.name} is playing with ${this.favoriteToy}.`);
  }
}

// Example usage:
const dog = new Dog("Buddy", 3, "brown", 4, "Labrador");
const cat = new Cat("Whiskers", 2, "white", 4, "ball of yarn");

console.log(dog.describe());
dog.makeSound();
dog.eat("dog food");
dog.move();
dog.ageBy(1);
dog.fetch("stick");

console.log(cat.describe());
cat.makeSound();
cat.eat("cat food");
cat.move();
cat.ageBy(2);
cat.play();

console.log(Animal.compareAges(dog, cat));
