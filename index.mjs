export const getAvg = numbers => (numbers.reduce((adder, currentNum) => (adder += currentNum))) / numbers.length
export const Calculator = {
  adder(nums) {
    let sum = 0;

    for (let i in nums) {
      sum += nums[i];
    }

    return sum;
  },

  multiplier(nums) {
    let product = 1;

    for (let i in nums) {
      product *= nums[i];
    }
    return product;
  },

  subtractor(num1, num2) {
    return num1 - num2;
  },

  divider(num1, num2) {
    return num1 / num2;
  },

  getMax(nums) {
    let max = nums[0];

    for (let i in nums) {
      if (nums[i] > max) max = nums[i];
    }

    return max;
  },

  testEvenOdd(num) {
    if (num % 2 === 0) return "Even";
    else return "Odd";
  }
};