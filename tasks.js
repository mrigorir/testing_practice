const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10 ) {
    return string.length;
  } else {
    try {
      throw new Error('String does not fit the right format.');
    } catch (e) {
      console.error(e.name + ': ' + e.message)
    }
  }
}

const reverseString = (string) => {
  let splitWord = string.toLowerCase().split('').reverse().join('');
  return splitWord;
}

const calculator = {
  add:       (a, b) => a + b,
  multiply:  (a, b) => a * b,
  substract: (a, b) => a - b,
  divide:    (a, b) => a / b,
}

module.exports = { stringLength, reverseString, calculator };