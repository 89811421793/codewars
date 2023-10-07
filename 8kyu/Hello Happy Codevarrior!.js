/*function Warrior(n){
    let name = n;  
    this.name = function(n){
      if( n ) name=n;
      return name;
    }
  }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
  }
*/

function Warrior(n){
  this.n = n;
}

Warrior.prototype.name = function(n){
  if (n) this.n = n;
  return this.n;
}

Warrior.prototype.toString = function(){
  return "Hi! my name's " + this.n;
}

  