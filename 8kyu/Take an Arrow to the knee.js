var ArrowFunc = function(arr) {
    return arr.map( num => String.fromCharCode(num) ).join(''); //Complete this function
  }

/* using the for loop:
var ArrowFunc = function (arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += String.fromCharCode(arr[i]);
  }
  return res;
};
*/
