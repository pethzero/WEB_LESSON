function sumAndFormat(...args: (number | string)[]): string {
    // Filter out non-numeric values and convert to numbers
    const numbers = args.filter(arg => typeof arg === 'number').map(Number);
    
    // Sum all numbers
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    
    // Return the sum as an integer (without decimal places)
    return Math.floor(sum).toString();
  }
  
  // Example usage
  let result1 = sumAndFormat(69.76, 29.37); // Output: "99"
  let result2 = sumAndFormat(69.76, "29.37"); // Output: "99"
  let result3 = sumAndFormat("69.76", 29.37); // Output: "99"
  let result4 = sumAndFormat("69.76", "29.37"); // Output: "99"
  
  console.log(result1); // "99"
  console.log(result2); // "99"
  console.log(result3); // "99"
  console.log(result4); // "99"
  