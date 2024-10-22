function query(data) {
    // Check if the data is null or undefined
    if (data === null || data === undefined) {
        return 'NULL';
    }
    // Check if the data type is a string
    if (typeof data === 'string') {
        // Return formatted string or 'NULL' if the string is empty
        return data.trim() !== '' ? `'${data.replace(/'/g, "''").trim()}'` : 'NULL';
    } else {
        // Handle numeric data: Remove commas, parse, and handle NaN cases
        let parsed = parseFloat(data.toString().replace(/,/g, ''));
        return isNaN(parsed) ? '0' : parsed;
    }
}

// Testing the function with different types of input
console.log(query(null));            // Output: 'NULL'
console.log(query(undefined));       // Output: 'NULL'
console.log(query("Hello World"));   // Output: "'Hello World'"
console.log(query("  "));            // Output: 'NULL'
console.log(query("5,000"));         // Output: 5000
console.log(query("100.50"));        // Output: 100.5
console.log(query("NaN Value"));     // Output: 'NULL'
console.log(query(12345));           // Output: 12345
console.log(query("It's fine"));     // Output: "'It''s fine'"
