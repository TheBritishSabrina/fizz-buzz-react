export function fizzbuzz(number: number): string {
  if (number % 5 === 0) {
    return "buzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else {
    return number.toString();
  }
}
