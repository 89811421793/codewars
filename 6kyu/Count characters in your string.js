const count = (string) => {
  return string.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1; //
    return acc;
  }, {});
};

// function count(string) {
//   const charCount = new Object(); //all the counts are stored in a currently empty object {}

//   if (string.length === 0) return charCount; // if no chars than return an empty obj

//   for (let char of string) {
//     if (charCount[char])
//       charCount[char]++; //increase the num of the char if any in the obj
//     else charCount[char] = 1;
//   }

//   return charCount;
// }

// function count(string) {
//   const charCount = {};

//   for (const char of string) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   return charCount;
// }

// function count(string) {
//   const charCount = {};

//   string.split("").forEach((char) => {
//     charCount[char] = (charCount[char] || 0) + 1;
//   });

//   return charCount;
// }
