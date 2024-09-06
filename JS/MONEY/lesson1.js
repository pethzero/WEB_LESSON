function parseNumber(x) {
  // ลบคอมม่าและพยายามแปลงเป็นตัวเลข
  let parsed = parseFloat(x.replace(/,/g, ''));
  
  // ตรวจสอบว่าผลลัพธ์เป็น NaN หรือไม่
  return isNaN(parsed) ? 'NULL' : parsed;
}

// ตัวอย่างการใช้งาน
console.log(parseNumber("1,000"));  // Output: 1000
console.log(parseNumber("100A"));   // Output: NULL
console.log(parseNumber(""));       // Output: NULL
console.log(parseNumber("1000"));   // Output: 1000
