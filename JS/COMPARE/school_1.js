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
    { id: 1, name: "Alice", age: 10, grade: "5th", subject: "Math", status: "Active" },
    { id: 2, name: "Bob", age: 12, grade: "6th", subject: "Science", status: "Active" },
    { id: 3, name: "Charlie", age: 11, grade: "5th", subject: "History", status: "Inactive" },
    { id: 4, name: "David", age: 13, grade: "7th", subject: "Math", status: "Active" },
    { id: 5, name: "Eva", age: 12, grade: "6th", subject: "Science", status: "Active" },
    { id: 6, name: "Fiona", age: 11, grade: "5th", subject: "Math", status: "Active" },
    { id: 7, name: "George", age: 13, grade: "7th", subject: "History", status: "Inactive" },
    { id: 8, name: "Hannah", age: 10, grade: "5th", subject: "Science", status: "Active" },
    { id: 9, name: "Ian", age: 12, grade: "6th", subject: "Math", status: "Active" },
    { id: 10, name: "Jack", age: 11, grade: "5th", subject: "History", status: "Inactive" },
];

let data_new = [
    { id: 1, name: "Alice", age: 10, grade: "5th", subject: "Math", status: "Active" },
    { id: 2, name: "Bob", age: 12, grade: "6th", subject: "Science", status: "Inactive" }, // เปลี่ยนแปลงที่นี่
    { id: 3, name: "Charlie", age: 11, grade: "5th", subject: "History", status: "Inactive" },
    { id: 4, name: "David", age: 13, grade: "7th", subject: "Math", status: "Active" },
    { id: 5, name: "Eva", age: 12, grade: "6th", subject: "Science", status: "Active" },
    { id: 6, name: "Fiona", age: 11, grade: "5th", subject: "Math", status: "Active" },
    { id: 7, name: "George", age: 13, grade: "7th", subject: "History", status: "Active" }, // เปลี่ยนแปลงที่นี่
    { id: 8, name: "Hannah", age: 10, grade: "5th", subject: "Science", status: "Active" },
    { id: 9, name: "Ian", age: 12, grade: "6th", subject: "Math", status: "Active" },
    { id: 10, name: "Jack", age: 11, grade: "5th", subject: "History", status: "Active" }, // เปลี่ยนแปลงที่นี่
];

let changes_all = compareData(data_old, data_new, null);
let changes_5th_grade = compareData(data_old, data_new, { grade: '5th' });
let changes_math_subject = compareData(data_old, data_new, { subject: 'Math' });

console.log("Changes detected (all objects):", changes_all);
console.log("Changes detected (grade 5th):", changes_5th_grade);
console.log("Changes detected (subject Math):", changes_math_subject);
