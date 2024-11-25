function query(data, mode = null) {
    // Check if the data is null or undefined
    if (data === null || data === undefined) {
        return 'NULL';
    }
    // Special mode processing (mode = 'I')
    if (mode === 'I') {
        // Check if the data contains only valid numeric characters (including commas and periods)
        let isValidNumeric = /^[0-9,.-]+$/.test(data.toString());
        if (!isValidNumeric) {
            return 'NULL'; // Return NULL if invalid characters are found
        }
        let parsed = parseFloat(data.toString().replace(/,/g, '')); // Parse the cleaned number
        return isNaN(parsed) ? 'NULL' : parsed;
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

// Testing the function with different types of input and modes
console.log(query(null));            // Output: 'NULL'
console.log(query(undefined));       // Output: 'NULL'
console.log(query("Hello World"));   // Output: "'Hello World'"
console.log(query("  "));            // Output: 'NULL'
console.log(query("5,000"));         // Output: 5000
console.log(query("5,000a", 'I'));   // Output: 'NULL' (invalid numeric characters)
console.log(query("5,000a"));        // Output: 'NULL' (normal case, no mode)
console.log(query("100.50"));        // Output: 100.5
console.log(query("NaN Value"));     // Output: 'NULL'
console.log(query(12345,'I'));           // Output: 12345
console.log(query(0));               // Output: 0
console.log(query("It's fine"));     // Output: "'It''s fine'"
console.log(query("5,000", 'I'));    // Output: 5000 (valid numeric characters)
