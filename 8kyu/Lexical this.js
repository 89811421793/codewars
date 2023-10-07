var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) { 
      this._friends.push(...f)
      }
    }
    return person;
  }

  /*
  var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { this._friends = f; }
  }
  return person;
}
  */

/*
var Person = function(){
  return  {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { f.forEach(s => this._friends.push(s)); }
  };
}
*/

/*
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends : (f) => person._friends = f.slice(0)
  }
  return person;
}
*/

/*var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
    this._friends = this._friends.concat(f);
    }
  }
  return person;
}*/