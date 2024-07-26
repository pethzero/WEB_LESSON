function compareData(data_old, data_new, condition) {
    let changes = [];
    let newEntries = [];

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

    // วนลูปผ่านข้อมูลใน data_new เพื่อหาข้อมูลใหม่ที่เพิ่มเข้ามา
    for (let item_new of data_new) {
        let isNew = true;
        for (let item_old of data_old) {
            if (item_new.id === item_old.id) {
                isNew = false;
                break;
            }
        }
        if (isNew) {
            newEntries.push(item_new);
        }
    }

    return { changes, newEntries };
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
    { id: 1, name: "Alice", age: 10, grade: "5th", subject: "Math", status: "Active", date: "2023-01-01" },
    { id: 2, name: "Bob", age: 12, grade: "6th", subject: "Science", status: "Active", date: "2023-01-02" },
    { id: 3, name: "Charlie", age: 11, grade: "5th", subject: "History", status: "Inactive", date: "2023-01-03" },
    { id: 4, name: "David", age: 13, grade: "7th", subject: "Math", status: "Active", date: "2023-01-04" },
    { id: 5, name: "Eva", age: 12, grade: "6th", subject: "Science", status: "Active", date: "2023-01-05" },
    { id: 6, name: "Fiona", age: 11, grade: "5th", subject: "Math", status: "Active", date: "2023-01-06" },
    { id: 7, name: "George", age: 13, grade: "7th", subject: "History", status: "Inactive", date: "2023-01-07" },
    { id: 8, name: "Hannah", age: 10, grade: "5th", subject: "Science", status: "Active", date: "2023-01-08" },
    { id: 9, name: "Ian", age: 12, grade: "6th", subject: "Math", status: "Active", date: "2023-01-09" },
    { id: 10, name: "Jack", age: 11, grade: "5th", subject: "History", status: "Inactive", date: "2023-01-10" },
];

let data_new = [
    { id: 1, name: "Alice", age: 10, grade: "5th", subject: "Math", status: "Active", date: "2023-01-01" },
    { id: 2, name: "Bob", age: 12, grade: "6th", subject: "Science", status: "Inactive", date: "2023-02-02" }, // เปลี่ยนแปลงที่นี่
    { id: 3, name: "Charlie", age: 11, grade: "5th", subject: "History", status: "Inactive", date: "2023-01-03" },
    { id: 4, name: "David", age: 13, grade: "7th", subject: "Math", status: "Active", date: "2023-01-04" },
    { id: 5, name: "Eva", age: 12, grade: "6th", subject: "Science", status: "Inactive", date: "2023-01-05" }, // เปลี่ยนแปลงที่นี่
    { id: 6, name: "Fiona", age: 11, grade: "5th", subject: "Math", status: "Active", date: "2023-01-06" },
    { id: 7, name: "George", age: 13, grade: "7th", subject: "History", status: "Active", date: "2023-01-07" }, // เปลี่ยนแปลงที่นี่
    { id: 8, name: "Hannah", age: 10, grade: "5th", subject: "Science", status: "Active", date: "2023-01-08" },
    { id: 9, name: "Ian", age: 12, grade: "6th", subject: "Math", status: "Active", date: "2023-01-09" },
    { id: 10, name: "Jack", age: 11, grade: "5th", subject: "History", status: "Inactive", date: "2023-01-10" },
    { id: 11, name: "Kenny", age: 11, grade: "5th", subject: "History", status: "Active", date: "2023-01-11" }, // ข้อมูลใหม่
];

let result_all = compareData(data_old, data_new, null);
let changes_all = result_all.changes;
let newEntries_all = result_all.newEntries;

let result_5th_grade = compareData(data_old, data_new, { grade: '5th' });
let changes_5th_grade = result_5th_grade.changes;
let newEntries_5th_grade = result_5th_grade.newEntries;

let result_math_subject = compareData(data_old, data_new, { subject: 'Math' });
let changes_math_subject = result_math_subject.changes;
let newEntries_math_subject = result_math_subject.newEntries;

console.log("Changes detected (all objects):", changes_all);
console.log("New entries detected (all objects):", newEntries_all);

// for item in changes_all:
//     print()

// console.log("Changes detected (grade 5th):", changes_5th_grade);
// console.log("New entries detected (grade 5th):", newEntries_5th_grade);
// console.log("Changes detected (subject Math):", changes_math_subject);
// console.log("New entries detected (subject Math):", newEntries_math_subject);
