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