
// ตัวอย่างการใช้งาน
const tbdata_detail = [
    { seq_no: 1 },
    { seq_no: 5 },
    { seq_no: null },
    { seq_no: 10 },
    { seq_no: 999 },
    { seq_no: -1 },
];

const invalid_tbdata_detail = [
    { seq_no: 1 },
    { seq_no: 0 }, // ค่านี้ไม่ผ่านเงื่อนไข
    { seq_no: null },
    { seq_no: 10 }
];
// ใช้ Array.prototype.every() สำหรับการตรวจสอบว่า ทุกค่าใน seq_no ต้องไม่น้อยกว่า 1 หรือเป็น null
function isSeqNoValid(tbdata_detail) {
    return tbdata_detail.every(item => item.seq_no === null || item.seq_no >= 1);
}



console.log(isSeqNoValid(tbdata_detail)); // true
console.log(isSeqNoValid(invalid_tbdata_detail)); // false

// ใช้ Array.prototype.some() สำหรับการตรวจสอบว่า อย่างน้อยหนึ่งค่าของ seq_no ต้องน้อยกว่า 1 และไม่เป็น null
function hasInvalidSeqNo(tbdata_detail) {
    return tbdata_detail.some(item => item.seq_no !== null && item.seq_no < 1);
}


console.log(hasInvalidSeqNo(tbdata_detail)); // false
console.log(hasInvalidSeqNo(invalid_tbdata_detail)); // true
