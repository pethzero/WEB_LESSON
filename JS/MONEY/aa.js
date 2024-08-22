function formatNumber(number,min=2,max=2) {
    return number.toLocaleString('en-US', { minimumFractionDigits: min, maximumFractionDigits: max });
}

// ตัวอย่างการใช้งาน
const numbers = [
    0.01,         // หลักหน่วย
    1,            // หนึ่ง
    123,          // หนึ่งร้อย
    1000,        // หนึ่งพัน
    10000,       // หนึ่งหมื่น
    100000,      // หนึ่งแสน
    1000000,    // หนึ่งล้าน
    10000000,   // สิบล้าน
    100000000,  // ร้อยล้าน
];

// แสดงผลลัพธ์
numbers.forEach(num => {
    console.log(formatNumber(num));
});

numbers.forEach(num => {
    console.log(formatNumber(num,0,0));
});
