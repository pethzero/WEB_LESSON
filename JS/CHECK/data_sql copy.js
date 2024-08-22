function RDQ(data, mode, type = null) {
    let result;
    let defaultType = type;
    let cleanedData = null;

    // Check for null or undefined data before processing
    if (data === undefined || data === null) {
        return defaultType;
    }

    if (mode === 'F') {
        // Clean the input data to remove extra spaces
        cleanedData = data.toString().replace(/\s+/g, '');
        result = parseFloat(cleanedData);
    } else if (mode === 'I') {
        // Clean the input data to remove extra spaces
        cleanedData = data.toString().replace(/\s+/g, '');
        result = parseInt(cleanedData);
    } else if (mode === 'X') {
        if (typeof data === 'number') {
            data = data.toString();
        }
        result = data.trim() === '' ? defaultType : `'${_escapeString(data.trim())}'`;
    } else if (mode === 'Y') {
        if (isNaN(data)) {
            result = data.trim() === '' ? defaultType : `'${CDF(data.trim())}'`;
        } else {
            result = defaultType;
        }
    } else {
        if (isNaN(data)) {
            result = data.trim() === '' ? defaultType : `'${_escapeString(data.trim())}'`;
        } else {
            data = data.toString();
            result = data.trim() === '' ? defaultType : `'${_escapeString(data.trim())}'`;
        }
    }

    return result !== undefined && result !== null ? result : defaultType;
}



function RDQ(data, mode, type = null) {
    let result;
    let defaultType = type;
    let cleanedData = null;

    // Check for null or undefined data before processing
    if (data === undefined || data === null) {
        return defaultType;
    }

    if (mode === 'F') {
        cleanedData = data.toString().replace(/\s+/g, '');
        result = parseFloat(cleanedData);
    }
    return result !== undefined && result !== null ? result : defaultType;
}