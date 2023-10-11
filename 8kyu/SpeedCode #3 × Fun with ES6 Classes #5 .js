class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}


/*class Labrador {
  constructor(n, a, g, m) {
    this.name = n, this.age = a, this.gender=g, this.species="Labrador",
    this.legs = 4, this.size = "Large", this.master = m, this.loyal = true;
  }
}*/

/*class Labrador{
  constructor(name, age, gender, master) {
    Object.assign(this, {name,age,gender});
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}*/

/*
class Labrador extends Dog{
  constructor(name, age, gender, master) {
    super(...arguments);        
    this.species = "Labrador";    
    this.size = "Large";    
    this.loyal = true;
    this.master = master
  }
}
*/

/*function Labrador(n, a, g, m) {
  return new Dog(n, a, g, "Labrador", "Large", m, !0);
}*/