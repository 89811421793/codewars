Number.prototype.times = function (f) {
    // Go ahead and define me :)
    let i = 0;
    while(i < this) {
      f(i);
      i += 1
    }
  }

  /*
  Number.prototype.times = function (f) {
  for (let i = 0; i < this; ++i) {
    f(i);
  }
};
  */

/*
Number.prototype.times = function (f) {
  for (let i = 0; i < this; f(i++)) ;
};
*/