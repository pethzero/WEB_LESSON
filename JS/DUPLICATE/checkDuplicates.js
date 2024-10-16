// checkDuplicates.js
function checkDuplicateData(entries) {
    // สร้างอ็อบเจกต์เพื่อเก็บการนับจำนวนการเกิดขึ้นของแต่ละ 'detail_id'
    let count = {};

    // วนลูปผ่านแต่ละรายการใน entries
    entries.forEach(item => {
        let key = item.detail_id; // ใช้ 'detail_id' เป็นคีย์ในการนับจำนวน
        let value = `${item.data}`; // แปลง 'data' เป็นสตริง
        
        // ตรวจสอบว่า 'key' นี้มีอยู่ใน 'count' หรือไม่
        if (!count[key]) {
            // หากยังไม่เคยมี 'key' นี้ใน 'count' ให้เพิ่มเข้าไป
            count[key] = { value: value, occurrences: 0 };
        }
        // เพิ่มจำนวนการเกิดขึ้นของ 'key' ขึ้นอีก 1
        count[key].occurrences += 1;
    });

    // ค้นหาคีย์ที่มีการเกิดขึ้นมากกว่าหนึ่งครั้ง
    let duplicates = Object.keys(count).filter(key => count[key].occurrences > 1);
    
    // ตรวจสอบว่ามีข้อมูลซ้ำหรือไม่
    if (duplicates.length > 0) {
        // สร้างข้อความแจ้งเตือนที่มีรายละเอียดข้อมูลซ้ำ
        let message = `The following data are duplicates: ${duplicates.map(key => `<p>Data: ${count[key].value}</p>`).join('')}`;
        console.log(message); // แสดงข้อความแจ้งเตือนให้ผู้ใช้เห็น
        return false;
    } else {
        console.log('No duplicate data found.'); // ข้อมูลไม่ซ้ำ
    }
    return true;
}

// Example usage
let data = [
    { id: 1, detail_id: 1, data: 'Data A' },
    { id: 2, detail_id: 2, data: 'Data B' },
    { id: 3, detail_id: 1, data: 'Data A' },
    { id: 4, detail_id: 3, data: 'Data C' },
    { id: 5, detail_id: 2, data: 'Data B' },
    { id: 6, detail_id: 4, data: 'Data D' }
];

// เรียกใช้ฟังก์ชันเพื่อตรวจสอบข้อมูลซ้ำ
checkDuplicateData(data);
