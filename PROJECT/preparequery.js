function _escapeString(data) {
    if (data !== undefined && data !== null) {
        return data.replace(/[\0\n\r\b\t\\'"\x1a]/g, function (s) {
            switch (s) {
                case "\0": return "\\0";
                case "\n": return "\\n";
                case "\r": return "\\r";
                case "\b": return "\\b";
                case "\t": return "\\t";
                case "\x1a": return "\\Z";
                case "'": return "''";
                case '"': return '""';
                default: return "\\" + s;
            }
        });
    }
    return '';
}

function RDQ(data, mode, type = null) {
    let result;
    let defaultType = type;
    let cleanedData = null;
    // Check for null or undefined data before processing
    if (data === undefined || data === null) {
        return defaultType;
    }

    switch (mode) {
        case 'F':
            // Clean the input data to remove extra spaces
            cleanedData = data.toString().replace(/\s+/g, '');
            result = parseFloat(cleanedData);
            break;
        case 'I':
             // Clean the input data to remove extra spaces
            cleanedData = data.toString().replace(/\s+/g, '');
            result = parseInt(cleanedData);
            break;
        case 'X':
            if (typeof data === 'number') {
                data = data.toString();
            }
            if (data.trim() === '') {
                result = defaultType;
            } else {
                result = isNaN(data) ? `'${_escapeString(data.trim())}'` : `'${data.trim()}'`;
            }
            break;
        default:
            if (data.trim() === '') {
                result = defaultType;
            } else {
                result = isNaN(data) ? `'${_escapeString(data.trim())}'` : `'${data.trim()}'`;
            }
            break;
    }
    return data !== undefined && data !== null ? result : defaultType;
}

// Test cases
// console.log(RDQ(null)); // Output should be `''` or defaultType if provided
// console.log(RDQ('')); // Output should be `''` or defaultType if provided
// console.log(RDQ('',null)); // Output should be `''` or defaultType if provided
// console.log(RDQ('',null,'')); // Output should be `''` or defaultType if provided
// console.log(RDQ('   ', 'X')); // Output should be `''` or defaultType if provided
// console.log(RDQ('   ', 'X','ERR')); // Output should be `''` or defaultType if provided
// console.log(RDQ(null, 'X')); // Output should be defaultType if provided
console.log(RDQ("- 100.000", 'F')); // Output should be `123`
console.log(RDQ("-100.000", 'F')); // Output should be `123`