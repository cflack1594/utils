export const Calculator = {
  adder(numbers) {
    return numbers.reduce((sum, currentNum) => (sum += currentNum))
  },

  multiplier(numbers) {
    return numbers.reduce((product, currentNum) => (product *= currentNum))
  },

  subtractor(numbers) {
    return numbers.reduce((difference, currentNum) => (difference -= currentNum))
  },

  divider(numbers) {
    return numbers.reduce((dividend, currentNum) => (dividend /= currentNum))
  },

  getAvg(numbers) {
      return this.adder(numbers)/numbers.length
  },

  getMax(numbers) {
    return numbers.reduce((max, currentNum) => {if(currentNum > max) max = currentNum});
  },

  testEvenOdd(number) {
    if (number % 2 === 0) return "Even";
    else return "Odd";
  }
};

//takes in an email or website and returns the domain i.e. ".com"
export const getTLD = url => {
    return url.slice(url.lastIndexOf('.'))
}