const squaresOnly = function(array) {
    return array.filter(number => Number.isInteger(Math.sqrt(number)))
  }