var findAverage = function (nums) {
  // Code here
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i += 1; //or i++
  }

  let average = sum / nums.length;
  return average;
};

// const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;
