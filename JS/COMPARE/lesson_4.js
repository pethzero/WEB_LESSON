function compareData(data_old, data_new, condition) {
    let changes = [];

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
                let change = getDataChanges(item_old, item_new);
                if (Object.keys(change).length > 0) {
                    changes.push({ id: id_to_check, changes: change });
                }
                found = true;
                break;
            }
        }

        // หากพบข้อมูลที่ตรงกัน จะหยุดการวนลูป
        if (found) {
            continue;
        }
    }

    return changes;
}

// ฟังก์ชันเพื่อหาการเปลี่ยนแปลงระหว่างสองอ็อบเจกต์
function getDataChanges(obj1, obj2) {
    let changes = {};

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            changes[key] = {
                oldValue: obj1[key],
                newValue: obj2[key]
            };
        }
    }

    return changes;
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

let changes_all = compareData(data_old, data_new, null);
let changes_hotel = compareData(data_old, data_new, { type: 'HOTEL' });
let changes_lunch = compareData(data_old, data_new, { type: 'LUNCH' });

console.log("Changes detected (all objects):", changes_all);
console.log("Changes detected (type HOTEL):", changes_hotel);
console.log("Changes detected (type LUNCH):", changes_lunch);