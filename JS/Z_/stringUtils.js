/**
 * Trims the first character from a given string.
 * @param {string | null} name - The input string.
 * @returns {string} - The string without the first character.
 */
function trimFirstChar(name) {
    if (name) {
        return name.substring(1);
    }
    return '';
}

/**
 * Converts a comma-separated string into an array, trimming each element.
 * @param {string} value - The input comma-separated string.
 * @returns {Array} - The array of trimmed elements.
 */
function isArrayValue(value) {
    if (!value) return []; // Return an empty array if the input is null or undefined
    return value.split(',').filter(entry => entry ? entry.trim() : null !== null);
}

/**
 * Parses a string into an array of objects with 'name' and 'date' properties.
 * @param {string} value - The input string with 'name|date' pairs separated by commas.
 * @returns {Array} - The array of parsed objects.
 */
function parseTempName(value) {
    if (!value) return [];
    return value.split(',').map(entry => {
        let [name, date] = entry.split('|');
        return { name: name ? name.trim() : null, date: date ? date.trim() : null };
    }).filter(entry => entry.name !== null || entry.date !== null);
}

/**
 * Checks if a given string is invalid (null, undefined, or empty after trimming).
 * @param {string} item - The input string.
 * @returns {boolean} - True if the string is invalid, otherwise false.
 */
function isInvalid(item) {
    let trimmedItem = typeof item === 'string' ? item.trim() : '';
    return trimmedItem === '';
}

// Example usage:
let name = ' John';
console.log(trimFirstChar(name)); // Output: 'John'

let commaSeparatedString = 'apple, banana, , orange, ,';
console.log(isArrayValue(commaSeparatedString)); // Output: ['apple', 'banana', 'orange']

let tempNameString = 'John Doe|2024-01-01, Jane Smith|, |2024-01-02, ';
console.log(parseTempName(tempNameString));
// Output: [ { name: 'John Doe', date: '2024-01-01' }, { name: 'Jane Smith', date: null }, { name: null, date: '2024-01-02' } ]

let invalidItem = '   ';
console.log(isInvalid(invalidItem)); // Output: true
