function compareData(data_old, data_new) {
    let data_change = false;

    // วนลูปผ่านทุกข้อมูลใน data_old
    for (let item_old of data_old) {
        let id_to_check = item_old.id;
        let found = false;

        // ค้นหาข้อมูลใน data_new ที่มี id เท่ากับ id ใน data_old
        for (let item_new of data_new) {
            if (item_new.id === id_to_check) {
                // เปรียบเทียบข้อมูลระหว่าง item_old กับ item_new เฉพาะค่าที่สนใจ
                if (item_old.data !== item_new.data ||
                    item_old.type !== item_new.type ||
                    item_old.status !== item_new.status) {
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

// ตัวอย่างการใช้งาน
let data_old = [
    { id: 1, data: null, type: "HOTEL", status: 50 },
    { id: 3, data: null, type: "LUNCH", status: 30 },
    // อ็อบเจกต์เพิ่มเติมใน data_old
];

let data_new = [
    { id: 1, data: null, type: "HOTEL", status: 50 }, // เปลี่ยนแปลงที่นี่
    { id: 3, data: null, type: "LUNCH", status: 30 },
    // อ็อบเจกต์เพิ่มเติมใน data_new
];

let change_detected = compareData(data_old, data_new);
console.log("Data change detected:", change_detected);
