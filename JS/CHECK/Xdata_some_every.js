function validateSeqNo(data) {
    // เช็คว่ามีค่า seq_no เป็น null หรือไม่
    if (data.every(item => item.seq_no === null)) {
        return false;
    }

    // เช็คว่ามีค่า seq_no ที่น้อยกว่า 1 หรือมากกว่าหรือเท่ากับ 999 หรือไม่
    if (data.some(item =>  item.seq_no !== null && item.seq_no < 1 || item.seq_no >= 999)) {
        return false;
    }
    return true;
}

// ตัวอย่างการใช้งาน
// const tbdata_detail = [
//     { seq_no: 1 },
//     { seq_no: 5 },
//     { seq_no: null },
//     { seq_no: 10 },
//     { seq_no: 999 },
//     { seq_no: -1 },
// ];

const tbdata_detail = [
    { seq_no: 1 },
    { seq_no: 5 },
    { seq_no: null },
    { seq_no: 10 },
    { seq_no: 998 },
    { seq_no: 1.2 },
    // { seq_no: 999 },
    // { seq_no: -1 },
    // { seq_no: null },
    // { seq_no: null },
    // { seq_no: null },
    // { seq_no: null },
    // { seq_no: null },
];


console.log(validateSeqNo(tbdata_detail)); // ผลลัพธ์จะเป็น false
