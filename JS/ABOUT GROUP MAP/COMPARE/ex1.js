let data = { id: '1', type: 'name', value: 'ABC', id_old: 1, old_type: 'name', old_value: 'B' };

// ฟังก์ชันสำหรับเปรียบเทียบ
function compareData(data) {
    let changes = {};

    // เปรียบเทียบ id
    if (data.id !== data.id_old) {
        changes.id = { old: data.id_old, new: data.id };
    }

    // เปรียบเทียบ type
    if (data.type !== data.old_type) {
        changes.type = { old: data.old_type, new: data.type };
    }

    // เปรียบเทียบ value
    if (data.value !== data.old_value) {
        changes.value = { old: data.old_value, new: data.value };
    }

    return changes;
}

// เรียกใช้ฟังก์ชัน
let differences = compareData(data);
console.log(differences);


// ฟังก์ชันสำหรับเปรียบเทียบและคืนค่า true/false
function isDataUnchanged(data) {
    return (
        data.id === data.id_old &&
        data.type === data.old_type &&
        data.value === data.old_value
    );
}

// เรียกใช้ฟังก์ชัน
let unchanged = isDataUnchanged(data);
console.log(unchanged); // แสดงผลเป็น true หรือ false