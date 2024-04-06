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

exports.capitalize = capitalize;
exports.reverse = reverse;
