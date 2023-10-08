Math.roundTo = function (number, precision) {
    // TODO: Program Me
    return Math.round(number * (10 ** precision)) / (10 ** precision);
    // or: return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
  }
  
  /*Math.roundTo = function (number, precision) {
   return +(number).toFixed(precision)
  }
  */

  /*
  Math.roundTo = (number, precision) => Number(number.toFixed(precision));
  */