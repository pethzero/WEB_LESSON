function isSequenceValid(data) {
    // กรองค่า seq_no ที่เป็นตัวเลขและแปลงเป็นตัวเลขเต็ม
    const seqNumbers = data
        .filter(item => item.seq_no !== null)
        .map(item => Math.floor(item.seq_no))
        .sort((a, b) => a - b);
    
    // สร้างลำดับตัวเลขที่คาดหวัง
    const expectedSequence = Array.from(new Set(seqNumbers))
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => a - b);
    
    // ตรวจสอบว่ามีลำดับที่ขาดหายหรือไม่
    const isValid = expectedSequence.every((value, index) => value === index);
    return isValid;
}

// ข้อมูลตัวอย่าง
const detail = [
    { "seq_no": null },
    { "seq_no": null, },
    { "seq_no": 1.1,  },
    { "seq_no": 1.2,  },
    { "seq_no": 2,  },
    { "seq_no": null,  },
    { "seq_no": 0, },
    { "seq_no": null,  },
    { "seq_no": null,  }
];

// ใช้ฟังก์ชัน
const isValidSequence = isSequenceValid(detail);
console.log("Is sequence valid:", isValidSequence); // ผลลัพธ์จะเป็น true หรือ false
