Array.prototype.filter = function(fnc) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(fnc(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
 };

 /*Array.prototype.filter = function (fn) {
  return this.reduce((pre, val) => fn(val) ? [...pre, val] : pre, []);
};*/

/*
Array.prototype.filter=function(fn){
  return this.reduce((s,a)=>fn(a)?(s.push(a),s):s,[]);
}
*/

/*
Array.prototype.filter = function(callback) {
	var result = [];
  this.forEach(function(element) {
  	if (callback(element))
    	result.push(element);
  });
  return result;
}
*/

/*
Array.prototype.filter = function (cb) {
  var result = [];

  for(const el of this) {
    if (cb(el)) {
      result.push(el);
    }
  }

  return result;
}
*/
  