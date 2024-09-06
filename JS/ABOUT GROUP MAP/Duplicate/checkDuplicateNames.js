function checkDuplicateNames(data) {
    // สร้างรายการของค่า 'en' จาก data
    let enList = data.map(item => item.en);
    
    // นับจำนวนการเกิดขึ้นของแต่ละ 'en'
    let count = {};
    enList.forEach(en => {
        count[en] = (count[en] || 0) + 1;
    });
    
    // ค้นหาค่าที่ซ้ำกัน
    let duplicates = Object.keys(count).filter(key => count[key] > 1);
    
    // ตรวจสอบว่ามีค่าซ้ำหรือไม่
    if (duplicates.length > 0) {
        let message = `มีรหัสซ้ำกรุณากรอกใหม่: ${duplicates.join(', ')}`;
        console.log(message);
        return false;
    } else {
        return true;
    }
}

// ตัวอย่างการใช้งาน
let data = [
    { en: 'Apple', th: 'แอปเปิ้ล' },
    { en: 'Banana', th: 'กล้วย' },
    { en: 'Apple', th: 'แอปเปิ้ล' },
    { en: 'Orange', th: 'ส้ม' }
];

checkDuplicateNames(data);
