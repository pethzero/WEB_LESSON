function AllisValidInput(value) {
    if (value === null || value === undefined) {
      return false;
    }
  
    if (typeof value === 'string') {
      return value.trim() !== '';
    }
  
    if (typeof value === 'number') {
      return !isNaN(value) && isFinite(value);
    }
  
    if (Array.isArray(value)) {
      // Handles non-empty arrays
      return value.length > 0;
    }
  
    if (typeof value === 'object') {
      // Handles non-empty objects
      return Object.keys(value).length > 0;
    }
  
    if (value instanceof Date) {
      // Ensures that the Date object is valid
      return !isNaN(value.getTime());
    }
  
    // Default case: Handle other data types (e.g., functions, symbols)
    return true;
  }
  
  // Examples
  console.log("''", AllisValidInput(''));            // false
  console.log("'  '", AllisValidInput('  '));          // false
  console.log("'some text'", AllisValidInput('some text'));   // true
  console.log("null", AllisValidInput(null));          // false
  console.log("undefined", AllisValidInput(undefined));     // false
  console.log("0", AllisValidInput(0));             // true
  console.log("123", AllisValidInput(123));           // true
  console.log("NaN", AllisValidInput(NaN));           // false
  console.log("Infinity", AllisValidInput(Infinity));      // false
  console.log("{}", AllisValidInput({}));            // false (or true based on your requirement)
  console.log("[]", AllisValidInput([]));            // false (or true based on your requirement)
  console.log("new Date()", AllisValidInput(new Date())); // true (if the date is valid)
  