function Dog (breed) {
    this.breed = breed;
  }
  
  Dog.prototype.bark = () => "Woof";
  
  var scoobydoo = new Dog("Great Dane");
  var snoopy = new Dog("Beagle");