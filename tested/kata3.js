/*
const divisions = (n, divisor) => {
  let count = 0;
  let d = n;
  while(Math.floor(d/divisor) !=0) {
    count++;
    d = d/divisor;
  }
  return count;
  }
*/

const divisions = (n, divisor) => Math.floor(Math.log(n)/Math.log(divisor))
