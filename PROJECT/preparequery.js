function CDF(inputDate) {
    // Define the month mapping
    const monthMap = {
        JAN: '01',
        FEB: '02',
        MAR: '03',
        APR: '04',
        MAY: '05',
        JUN: '06',
        JUL: '07',
        AUG: '08',
        SEP: '09',
        OCT: '10',
        NOV: '11',
        DEC: '12'
    };

    // Split the input date by periods
    const [day, monthText, year] = inputDate.split('.');

    // Convert month abbreviation to month number
    const month = monthMap[monthText.toUpperCase()];

    // Construct the new date format
    return `${year}-${month}-${day}`;
}

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
            result = data.trim() === ''?defaultType:`'${_escapeString(data.trim())}'`;
            break;
        case 'Y':
            if (isNaN(data)) {
                result =  data.trim() === ''?defaultType: `'${CDF(data.trim())}'`;
            }else{
                result = defaultType;
            }
            break;
        default:
            if (typeof data === 'number') {
                data = data.toString();
            }
            result = data.trim() === ''?defaultType:`'${_escapeString(data.trim())}'`;
            break;
    }
    return result !== undefined && result !== null ? result : defaultType;
}

// Test cases

console.log(RDQ("156513196")); // Output should be `''` or defaultType if provided
console.log(RDQ(10)); // Output should be `''` or defaultType if provided
console.log(RDQ(10,'X')); // Output should be `''` or defaultType if provided
console.log(RDQ(null)); // Output should be `''` or defaultType if provided
console.log(RDQ('')); // Output should be `''` or defaultType if provided
console.log(RDQ('',null)); // Output should be `''` or defaultType if provided
console.log(RDQ('',null,'')); // Output should be `''` or defaultType if provided
console.log(RDQ('   ', 'X')); // Output should be `''` or defaultType if provided
console.log(RDQ('   ', 'X','ERR')); // Output should be `''` or defaultType if provided
console.log(RDQ(null, 'X')); // Output should be defaultType if provided
console.log(RDQ("- 100.000", 'F')); // Output should be `-100`
console.log(RDQ("-100.000", 'F')); // Output should be `-100`
console.log(RDQ("01.JAN.2024", 'Y')); // Output should be `'2024-01-01'`
console.log(RDQ(null,'F')); // Output should be `''` or defaultType if provided


