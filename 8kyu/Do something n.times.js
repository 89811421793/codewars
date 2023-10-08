Number.prototype.times = function (f) {
    // Go ahead and define me :)
    let i = 0;
    while(i < this) {
      f(i);
      i += 1
    }
  }