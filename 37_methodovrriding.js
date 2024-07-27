//subclass provides a specific implementation for a method that is already defined in its superclass

class Animal {
    makeSound() {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks.");
    }
}

let animal = new Animal();
let dog = new Dog();

animal.makeSound();  // Output: Animal makes a sound.
dog.makeSound();     // Output: Dog barks.
