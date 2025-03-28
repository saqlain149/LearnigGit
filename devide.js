function divideStaticNumbers() {
  const numerator = 10;
  const denominator = 2;

  if (denominator === 0) {
    return "Cannot divide by zero";
  }

  return numerator / denominator;
}

const result = divideStaticNumbers();
console.log(result);
