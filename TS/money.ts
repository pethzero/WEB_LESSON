// function sumAndFormat(...args: (number | string)[]): string | null {
//   // Filter out non-numeric values and convert to numbers
//   const numbers = args
//     .map(arg => {
//       // Remove commas and check if it's a valid number
//       const cleanedArg = typeof arg === 'string' ? arg.replace(/,/g, '') : arg.toString();
//       return /^[0-9.]+$/.test(cleanedArg) ? Number(cleanedArg) : null;
//     })
//     .filter(arg => arg !== null) as number[]; // Filter out null values and cast to number array

//   // If no valid numbers found, return null
//   if (numbers.length === 0) {
//     return null;
//   }
  
//   // Sum all valid numbers
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
//   // Format number with commas and 2 decimal places
//   return sum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// // Example usage
// let result1 = sumAndFormat(69.76, 29.37); // Output: "99.13"
// let result2 = sumAndFormat(100069.76, "29.37"); // Output: "100099.13"
// let result3 = sumAndFormat("100,069.76", 29.37); // Output: "100099.13"
// let result4 = sumAndFormat("69.76", "29.37"); // Output: "99.13"
// let result5 = sumAndFormat("1!A00B69.76", 29.37); // Output: null
// let result6 = sumAndFormat("ABC", "DEF"); // Output: null

// console.log(result1); // "99.13"
// console.log(result2); // "100099.13"
// console.log(result3); // "100099.13"
// console.log(result4); // "99.13"
// console.log(result5); // null
// console.log(result6); // null


// function sumAndFormat(...args: (number | string)[]): string | null {
//   // Filter out non-numeric values and convert to numbers
//   const numbers = args
//     .map(arg => {
//       // Remove commas and check if it's a valid number
//       const cleanedArg = typeof arg === 'string' ? arg.replace(/,/g, '') : arg.toString();
//       return /^[0-9.]+$/.test(cleanedArg) ? Number(cleanedArg) : null;
//     }) as any[]; // Filter out null values and cast to number array


//   console.log(numbers)    
//   // If no valid numbers found, return null
//   if (numbers.length === 0) {
//     return null;
//   }
  
//   // Sum all valid numbers
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
//   // Format number with commas and 2 decimal places
//   return sum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// // Example usage
// let result1 = sumAndFormat(69.76, 29.37); // Output: "99.13"
// let result2 = sumAndFormat(100069.76, "29.37"); // Output: "100099.13"
// let result3 = sumAndFormat("100,069.76", 29.37); // Output: "100099.13"
// let result4 = sumAndFormat("69.76", "29.37"); // Output: "99.13"
// let result5 = sumAndFormat("1!A00B69.76", 29.37); // Output: null
// let result6 = sumAndFormat("ABC", "DEF"); // Output: null

// console.log(result1); // "99.13"
// console.log(result2); // "100099.13"
// console.log(result3); // "100099.13"
// console.log(result4); // "99.13"
// console.log(result5); // null
// console.log(result6); // null


// const data_1numbers = [null, 29.37];
// const data_2numbers = [69.76, 29.37];

// function sumValidNumbers(numbers: any[]): string {
//     // Replace null with 0
//     const sanitizedNumbers = numbers.map(num => num === null ? 0 : num);
    
//     // Calculate sum
//     const sum = sanitizedNumbers.reduce((acc, curr) => acc + curr, 0);

//     // Format number with commas and 2 decimal places
//     return sum.toFixed(2);
// }

// // Example usage:
// console.log(sumValidNumbers(data_1numbers)); // Output: "0.00"
// console.log(sumValidNumbers(data_2numbers)); // Output: "99.13"

const sanitizedNumbers = [null, 29.37]; // หรือ [69.76, 29.37] ตามที่ต้องการ
const sum = sanitizedNumbers.includes(null)
console.log(sum)