data = [
    {'seq_no': 0},
    {'seq_no': null},
    {'seq_no': 1.1},
    {'seq_no': 1.2},
    {'seq_no': 1.9},
    {'seq_no': 2.6},
    {'seq_no': 2.7},
    {'seq_no': null},
    {'seq_no': null},
    {'seq_no': 4.2},
    {'seq_no': 3.6},
    {'seq_no': 8.6},
    {'seq_no': 5.4}
]


function categorizeSeqNo(data) {
    // สร้างแผนที่เพื่อเก็บกลุ่มที่มีค่าทศนิยมที่เหมือนกัน
    const groups = new Map();

    // จัดกลุ่มค่าตามเลขจำนวนเต็ม
    data.forEach(item => {
        if (item.seq_no !== null) {
            const integerPart = Math.floor(item.seq_no);
            const decimalPart = item.seq_no - integerPart;

            // สร้างกลุ่มถ้ายังไม่มี
            if (!groups.has(integerPart)) {
                groups.set(integerPart, []);
            }

            // เพิ่มค่าทศนิยมเข้าไปในกลุ่มที่เกี่ยวข้อง
            groups.get(integerPart).push(decimalPart);
        }
    });

    // กำหนดค่าทศนิยมที่น้อยที่สุดในแต่ละกลุ่ม
    const minDecimals = new Map();
    groups.forEach((decimals, integerPart) => {
        minDecimals.set(integerPart, Math.min(...decimals));
    });

    // หมวดหมู่ค่าของ seq_no
    const categorizedData = data.map(item => {
        if (item.seq_no !== null) {
            const integerPart = Math.floor(item.seq_no);
            const decimalPart = item.seq_no - integerPart;
            const minDecimal = minDecimals.get(integerPart);
            if (decimalPart === minDecimal) {
                return { ...item, m_group: 'M' };
            } else {
                return { ...item, m_group: 'E' };
            }
        } else {
            return { ...item, m_group: 'F' }; // หรือให้เป็น null ตามความต้องการ
        }
    });

    return categorizedData;
}



function assignGroup(data) {
    // Filter out items with null seq_no and sort by seq_no
    const filteredData = data
        .filter(item => item.seq_no !== null)
        .sort((a, b) => a.seq_no - b.seq_no);
    
    // Group items by integer part of seq_no
    const grouped = filteredData.reduce((acc, item) => {
        const intPart = Math.floor(item.seq_no);
        if (!acc[intPart]) {
            acc[intPart] = [];
        }
        acc[intPart].push(item);
        return acc;
    }, {});

    console.log(grouped)
    // Assign 'M' to the smallest decimal value in each group, 'E' to the rest
    for (const intPart in grouped) {
        const items = grouped[intPart];
        if (items.length > 0) {
            const smallestDecimal = Math.min(...items.map(item => item.seq_no % 1));
            items.forEach(item => {
                item.m_group = (item.seq_no % 1 === smallestDecimal) ? 'M' : 'E';
            });
        }
    }

    return data;
}


// ใช้ฟังก์ชัน
const categorizedData = categorizeSeqNo(data);
console.log("Categorized Data:", categorizedData);


// ใช้ฟังก์ชัน
const result = assignGroup(data);
console.log(result);
