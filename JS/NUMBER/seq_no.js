function isSequenceValid(data) {
    // กรองค่า seq_no ที่เป็นตัวเลข
    const seqNumbers = data
        .filter(item => typeof item.seq_no === 'number') // กรองเฉพาะค่าที่เป็นตัวเลข
        .map(item => Math.floor(item.seq_no)) // แปลงค่าทุกตัวเป็นจำนวนเต็ม
        .filter((value, index, self) => self.indexOf(value) === index) // ลบค่าซ้ำ
        .sort((a, b) => a - b); // เรียงลำดับจากน้อยไปมาก
    
    // ตรวจสอบว่าลำดับเริ่มต้นจาก 1 และเป็นลำดับต่อเนื่อง
    if (seqNumbers.length === 0) {
        return false; // ไม่มีค่าตัวเลขเลย
    }

    // ตรวจสอบว่า seqNumbers เริ่มต้นจาก 1 และเป็นลำดับที่ต่อเนื่อง
    const isValid = seqNumbers[0] === 1 &&
        seqNumbers.every((value, index) => value === index + 1);
    
    return isValid;
}

// ตัวอย่างการใช้งาน
const data = [
    { "material_no": "LGP01E-210662LF", "fg_material_no": "LGP908-210661CLF", "customer": "LGP", "status": 10, "seq_no": 1.1, "type": "01E", "row_no": 8, "no": 2 },
    { "material_no": "LGP01E-210663LF", "fg_material_no": "LGP908-210661CLF", "customer": "LGP", "status": 10, "seq_no": 1.2, "type": "01E", "row_no": 9, "no": 1 },
    { "material_no": "LGP01E-210664LF", "fg_material_no": "LGP908-210661CLF", "customer": "LGP", "status": 10, "seq_no": 3, "type": "01E", "row_no": 10, "no": 9 }
];

console.log(isSequenceValid(data)); // ผลลัพธ์จะเป็น true
