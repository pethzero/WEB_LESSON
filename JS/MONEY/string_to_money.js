function parseNumber(x) {
  // ตรวจสอบว่า x เป็นค่าว่าง, null, undefined หรือไม่
  if (x === null || x === undefined || x === '') {
    return 'NULL';
  }
  // แปลงเป็นสตริงก่อน (เผื่อมีการส่งข้อมูลที่ไม่ใช่สตริงมา)
  let str = String(x);
  // ลบคอมม่าและพยายามแปลงเป็นตัวเลข
  let parsed = parseFloat(str.replace(/,/g, ''));
  // ตรวจสอบว่าผลลัพธ์เป็น NaN หรือไม่
  return isNaN(parsed) ? 'NULL' : parsed;
}
// ตัวอย่างการใช้งาน
console.log(parseNumber("1,000"));  // Output: 1000
console.log(parseNumber("100A"));   // Output: NULL
console.log(parseNumber(""));       // Output: NULL
console.log(parseNumber("1000"));   // Output: 1000
console.log(parseNumber(null));        // Output: NULL
console.log(parseNumber(undefined));   // Output: NULL
console.log(parseNumber(5000));        // Output: 5000