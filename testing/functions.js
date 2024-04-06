const capitalize = (input_string) => {
  if (typeof input_string === "string") {
    return input_string.toUpperCase();
  } else {
    return "";
  }
};

const reverse = (input_string) => {
  if (typeof input_string === "string") {
    return input_string.split("").reverse().join("");
  } else {
    return "";
  }
};

const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
};

const cipher = (input_string, shift) => {
  input_string = input_string.toUpperCase();
  var cipher_bet = ciphertext(shift);
  var input_indices = charToNum(input_string);
  console.log(input_indices);
  var output_array = input_indices.map((e, i) => cipher_bet[e]);
  console.log(output_array);

  return output_array.join("");
};

const alphacode = Array.from(Array(26)).map((e, i) => i + 65);

const ciphertext = (shift) => {
  const alphabet = alphacode.map((x) => String.fromCharCode(x));
  let ciphertext = alphabet.slice(shift).concat(alphabet.slice(0, shift));
  return ciphertext;
};

const charToNum = (input_string) => {
  return input_string.split("").map((e, i) => e.charCodeAt(0) - 65);
};

const analyzeArray = (arr) => {
  let length = arr.length;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let average = arr.reduce((a, b) => a + b, 0) / length;
  return {
    average,
    min,
    max,
    length,
  };
};

exports.capitalize = capitalize;
exports.reverse = reverse;
exports.calculator = calculator;
exports.cipher = cipher;
exports.analyzeArray = analyzeArray;
