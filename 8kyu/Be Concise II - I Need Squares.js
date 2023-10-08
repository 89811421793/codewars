const squaresOnly = function (array) {
  return array.filter((number) => Number.isInteger(Math.sqrt(number)));
};

/*
function squaresOnly(a) {
  return a.filter(x => x ** 0.5 % 1 == 0);
}
*/

/*let squaresOnly=a=>a.filter(x=>!(x**.5%1))*/

/*var squaresOnly = array => array.filter(number => Math.sqrt(number) % 1 === 0);*/

/*const squaresOnly = array =>
  array.filter(val => Number.isInteger(val ** 0.5));*/
