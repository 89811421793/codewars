function Dog (breed) {
    this.breed = breed;
  }
  
  Dog.prototype.bark = () => "Woof";
  
  var scoobydoo = new Dog("Great Dane");
  var snoopy = new Dog("Beagle");

/*
class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    
    bark() {
        return "Woof";
    }
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");
*/
