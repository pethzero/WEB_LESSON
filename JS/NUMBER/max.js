function findMaxSeqNo(data) {
    // หาค่าที่สูงที่สุดใน seq_no
    const maxSeqNo = data.reduce((max, item) => {
        // ตรวจสอบว่า seq_no เป็นตัวเลขและไม่เป็น null
        if (typeof item.seq_no === 'number' && item.seq_no !== null) {
            return Math.max(max, item.seq_no);
        }
        return max;
    }, 0); // ใช้ -Infinity เพื่อให้แน่ใจว่าเราจะได้รับค่าที่มากที่สุด

    return parseInt(maxSeqNo)+1;
}

// ตัวอย่างการใช้งาน
const data = [
    { "material_no": "LGP01E-210662LF", "fg_material_no": "LGP908-210661CLF", "customer": "LGP", "status": 10, "seq_no": 1.1, "type": "01E", "row_no": 8, "no": 2 },
    { "material_no": "LGP01E-210663LF", "fg_material_no": "LGP908-210661CLF", "customer": "LGP", "status": 10, "seq_no": 1.2, "type": "01E", "row_no": 9, "no": 1 },
    { "material_no": "LGP01E-210664LF", "fg_material_no": "LGP908-210661CLF", "customer": "LGP", "status": 10, "seq_no": null, "type": "01E", "row_no": 10, "no": 9 }
];

console.log(findMaxSeqNo(data)); // ผลลัพธ์จะเป็น 5
