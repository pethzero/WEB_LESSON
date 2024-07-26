function checkParm(x) {
    if (typeof x === 'number') {
        return x !== null && x !== undefined;
    } else if (typeof x === 'string') {
        return x.trim() !== '';
    } else {
        return false;
    }
}

  // isValidInput(x) {
  // if (typeof x === 'number') {
  //     return x !== null && x !== undefined;
  // } else if (typeof x === 'string') {
  //     return x.trim() !== '';
  // } else {
  //     return false;
  // }

const data = [1234, '   ', 'XX', 45, null, undefined,' dwqdqw '];

// for (const x of data) {
//     console.log(x,checkParm(x));
// }


for (const x of data) {
    console.log(x,isValidInput(x));
}

// ตัวอย่างการทดสอบฟังก์ชัน isValidInput

const testValues = [
    null,
    undefined,
    '',
    '   ',
    'Hello',
    0,
    123,
    false,
    true,
    [],
    {},
    ['test'],
    { key: 'value' }
];


function isValidInput(value){
    if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
       return false
    } 
    return true
}


testValues.forEach(value => {
    console.log(`isValidInput(${JSON.stringify(value)}) = ${isValidInput(value)}`);
});


// Helper function เพื่อเช็คว่าค่าเป็น number หรือไม่
function isNumber(value) {
    return !isNaN(value) && value !== null && value !== '' && value !== false;
  }




////
function isValidInput(value, mode = 0) {
    if (value === null || value === undefined) {
      return false;
    }
  
    if (mode === 0) {
      // Mode 0: ตรวจสอบว่าค่าไม่เป็นค่าว่าง
      return !(typeof value === 'string' && value.trim() === '');
    } else if (mode === 1) {
      // Mode 1: ตรวจสอบว่าค่าเป็น string ที่สามารถแปลงเป็น number ได้ หรือเป็น number
      if (typeof value === 'number') {
        return !isNaN(value);
      } else if (typeof value === 'string') {
        return !isNaN(Number(value)) && value.trim() !== '';
      }
      return false;
    }
  
    return true;
  }
  
  // ทดสอบการใช้งาน
  console.log(isValidInput(null));             // false
  console.log(isValidInput(undefined));        // false
  console.log(isValidInput(''));               // false
  console.log(isValidInput('   '));            // false
  console.log(isValidInput('1'));              // true
  console.log(isValidInput('1A'));             // true
  
  console.log(isValidInput('1', 1));           // true
  console.log(isValidInput('1A', 1));          // false
  console.log(isValidInput(' ', 1));           // false
  console.log(isValidInput('   ', 1));         // false
  console.log(isValidInput('123', 1));         // true
  console.log(isValidInput('123A', 1));        // false
  console.log(isValidInput(100, 1));           // true
  console.log(isValidInput(NaN, 1));           // false
  console.log(isValidInput(0, 1));             // true
  console.log(isValidInput('0', 1));           // true
  

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
  