function compareData(data_old, data_new, condition) {
    let data_change = false;

    // วนลูปผ่านทุกข้อมูลใน data_old
    for (let item_old of data_old) {
        let id_to_check = item_old.id;
        let found = false;

        // ตรวจสอบเงื่อนไขของ condition (ถ้ามี)
        if (condition) {
            let shouldCompare = true;
            for (let key in condition) {
                if (item_old[key] !== condition[key]) {
                    shouldCompare = false;
                    break;
                }
            }
            if (!shouldCompare) {
                continue; // ข้ามไปยังรอบถัดไปในลูป
        }
        }

        // ค้นหาข้อมูลใน data_new ที่มี id เท่ากับ id ใน data_old
        for (let item_new of data_new) {
            if (item_new.id === id_to_check) {
                // เปรียบเทียบข้อมูลระหว่าง item_old กับ item_new
                if (!objectsAreEqual(item_old, item_new)) {
                    data_change = true;
                }
                found = true;
                break;
            }
        }

        // หากพบข้อมูลที่ตรงกัน จะหยุดการวนลูป
        if (found) {
            break;
        }
    }

    return data_change;
}

// เช็คว่าอ็อบเจกต์สองตัวเท่ากันหรือไม่
function objectsAreEqual(obj1, obj2) {
    // แปลง Object เป็น JSON String แล้วเปรียบเทียบ
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// ตัวอย่างการใช้งาน
let data_old = [
    { id: 1, data: null, type: "HOTEL", status: 50 },
    { id: 2, data: null, type: "LUNCH", status: 30 },
    { id: 3, data: null, type: "HOTEL", status: 40 },
    // อ็อบเจกต์เพิ่มเติมใน data_old
];

let data_new = [
    { id: 1, data: null, type: "HOTEL", status: 50 }, // เปลี่ยนแปลงที่นี่
    { id: 2, data: null, type: "LUNCH", status: 30 },
    { id: 3, data: null, type: "HOTEL", status: 45 },
    // อ็อบเจกต์เพิ่มเติมใน data_new
];

let change_detected_all = compareData(data_old, data_new, null);
let change_detected_hotel = compareData(data_old, data_new, { type: 'HOTEL' });

console.log("Data change detected (all objects):", change_detected_all);
console.log("Data change detected (type HOTEL):", change_detected_hotel);