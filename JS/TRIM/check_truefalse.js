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