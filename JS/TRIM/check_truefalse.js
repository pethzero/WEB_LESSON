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
  