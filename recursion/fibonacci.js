function fibs(num, sequence) {
  if (sequence.length < 1) {
    sequence.push(0);
  } else if (sequence.length < 2) {
    sequence.push(1);
  } else {
    sequence.push(sequence.at(-1) + sequence.at(-2));
  }
  if (num === 1) {
    return sequence;
  } else {
    return fibs(num - 1, sequence);
  }
}

let sequence = [];
console.log(fibs(8, sequence));
