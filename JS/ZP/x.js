function parseNumber(x, empty) {
  if (x === null || x === undefined || x === '') {
    return empty;
  }
  let str = String(x);
  let parsed = parseFloat(str.replace(/,/g, ''));
  return isNaN(parsed) ? empty : parsed;
}

function splitStringToArray(input, condition) {
  let result = input.split(condition);
  result = result.filter(item => item !== '');
  return result;
}

function process_board(data) {
  if (data === null || data === undefined) {
    return '';
  } else {
    let message = '';
    let arrayResult = splitStringToArray(data, '?');
    
    arrayResult.forEach((entry) => {
      let message_number = parseNumber(entry, 0);
      message += message_number + ',';  // เพิ่มแต่ละค่าและคั่นด้วยคอมม่า
    });
    
    // ลบคอมม่าสุดท้ายออก
    return message.slice(0, -1);
  }
}

let message = '?100?50.00';
let data = process_board(message);
console.log(data);
