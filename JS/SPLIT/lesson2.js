function safeSplit(input, delimiter) {
    try {
      // Check if input is a string
      if (typeof input !== 'string') {
        throw new Error('Input must be a string');
      }
  
      // Check if delimiter is a string
      if (typeof delimiter !== 'string') {
        throw new Error('Delimiter must be a string');
      }
  
      // Perform the split operation
      return input.split(delimiter);
    } catch (error) {
      // Handle any errors by logging them and returning an empty array
      console.error('Error in safeSplit:', error.message);
      return [];
    }
  }
  
  // Example usage:
  const input = '293500|M';
  const delimiter = '|';
  const result = safeSplit(input, delimiter);
  console.log(result); // Output: ["293500", "M"]
  
  // Example with error:
  const invalidInput = 293500; // Not a string
  const resultWithError = safeSplit(invalidInput, delimiter);
  console.log(resultWithError); // Output: []
  