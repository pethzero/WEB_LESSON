const data = [
    { MAT: 'A001', TYPE: 'A' },
    { MAT: 'A001', TYPE: 'Z' },
    { MAT: 'A001', TYPE: 'X' },
    { MAT: 'B001', TYPE: 'Z' },
    { MAT: 'C001', TYPE: 'A' },
    { MAT: 'D001', TYPE: 'A' },
    { MAT: 'D001', TYPE: 'X' },
    { MAT: 'E001', TYPE: 'B' },
    { MAT: 'E001', TYPE: 'C' },
];

const priority = ['Z', 'X']; // ระดับความสำคัญ TYPE
const result = [];

const grouped = data.reduce((acc, item) => {
    // จัดกลุ่ม MAT
    if (!acc[item.MAT]) {
        acc[item.MAT] = [];
    }
    acc[item.MAT].push(item);
    return acc;
}, {});

for (const [mat, items] of Object.entries(grouped)) {
    // จัดเรียงข้อมูลในกลุ่มตามลำดับความสำคัญของ TYPE
    items.sort((a, b) => {
        const priorityA = priority.indexOf(a.TYPE);
        const priorityB = priority.indexOf(b.TYPE);

        // หาก TYPE อยู่ใน priority จะเรียงตาม index, ถ้าไม่อยู่ให้ค่าความสำคัญเป็น Infinity
        return (priorityA === -1 ? Infinity : priorityA) - (priorityB === -1 ? Infinity : priorityB);
    });

    // เลือกตัวแรกของกลุ่มหลังจากจัดเรียง
    result.push(items[0]);
}

console.log(result);
