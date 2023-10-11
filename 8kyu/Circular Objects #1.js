// Define your circular object here
let circular = {value:"Hello World"}; // or: 
circular.self = circular;

/*
class Circular {
  constructor() {
    this.value = "Hello World";
    this.self = this;
  }
}

circular = new Circular();
*/

/*var circular={value:"Hello World",get self(){return this}}*/

/*const circular = new (class {
  constructor() {
    this.value = "Hello World";
    this.self = this;
  }
})();*/