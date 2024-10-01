// function noOdds( values ){
//   return values.filter(num => num % 2 === 0);  // if even than taken
// }

// function noOdds( values ){
//    const evenNums = [];
//     for (let i = 0; i < values.length; i++) {
//         if (values[i] % 2 === 0) {          //if even each than push to the arr
//             evenNums.push(values[i]);
//         }
//     }
//     return evenNums;
// }

// function noOdds( values ){
//     const evenNums = [];
//      for (let i = 0; i < values.length; i++) {
//          if (values[i] % 2 !== 0) continue;    // skip the odds

//       evenNums.push(values[i]);
//      }
//      return evenNums;
//  }

// function noOdds(values) {
//     const evenNums = [];
//     values.forEach(num => {
//         if (num % 2 === 0) {
//             evenNums.push(num);
//         }
//     });
//     return evenNums;
// }

function noOdds(values) {
  return values.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.push(num);
    }
    return acc;
  }, []);
}
