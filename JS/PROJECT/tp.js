function findHighestValue(inputStr) {
    // แยกสตริงตามเครื่องหมาย "?"
    const items = inputStr.split('?');

    // สร้างอ็อบเจ็กต์เพื่อเก็บข้อมูล
    const itemDict = {};

    for (const item of items) {
        if (item) { // ตรวจสอบว่ามีค่าใน item
            const keyValue = item.split('|'); // แยกชื่อและค่า
            if (keyValue.length === 2) {
                const key = keyValue[0].trim(); // ชื่อ (เช่น COURIER, SEA)
                const value = parseFloat(keyValue[1].trim()); // ค่า (เช่น 2204.71, 2560)

                // ตรวจสอบว่าค่ามีความถูกต้อง
                if (!isNaN(value)) {
                    itemDict[key] = value; // เพิ่มเข้าไปในอ็อบเจ็กต์
                }
            }
        }
    }

    // ค้นหาค่าสูงสุดและชื่อที่เกี่ยวข้อง
    let highestKey = null;
    let highestValue = -Infinity; // เริ่มต้นค่าด้วย -Infinity

    for (const [key, value] of Object.entries(itemDict)) {
        if (value > highestValue) {
            highestValue = value;
            highestKey = key;
        }
    }

    // ตรวจสอบว่าค่าสูงสุดมีค่าเป็นศูนย์หรือไม่
    return highestValue > 0 ? highestKey : ''; // คืนค่าเป็นค่าว่างถ้าไม่มีค่ามากกว่า 0
}

// ตัวอย่างการใช้งาน
console.log(findHighestValue("?COURIER|2204.71?SEA|2560")); // Output: SEA
console.log(findHighestValue("?COURIER|2204.71?")); // Output: COURIER
console.log(findHighestValue("?COURIER|2204.71?SEA|''")); // Output: COURIER
console.log(findHighestValue("")); // Output: ''
console.log(findHighestValue("?COURIER|2204.71?'?")); // Output: COURIER
console.log(findHighestValue("?COURIER|2204.71?SEA|0")); // Output: ''

console.log(findHighestValue("?COURIER|2204.71?SEA|0?AIR|9999")); // Output: ''













// // ทดสอบฟังก์ชัน
// console.log(findHighestValueWithFallback("?COURIER|2204.71?SEA|0?AIR|9999")); // Output: 'AIR'
// console.log(findHighestValueWithFallback("?COURIER|0?SEA|0")); // Output: '9999'
