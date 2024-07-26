// checkDuplicates.js
function checkDuplicateData(entry) {
    let count = {};

    entry.forEach(item => {
        let key = item.detail_id;
        let value =  `${item.data}`;
        if (!count[key]) {
            count[key] = { value: value, occurrences: 0 };
        }
        count[key].occurrences += 1;
    });

    let duplicates = Object.keys(count).filter(key => count[key].occurrences > 1);
    if (duplicates.length > 0) {
        let message = `The following data are duplicates: ${duplicates.map(key => `<p>Data: ${count[key].value}</p>`).join('')}`;
        console.log(message); // แสดงข้อความแจ้งเตือนให้ผู้ใช้เห็น
        return false;
    } else {
        console.log('No duplicate data found.');
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

checkDuplicateData(data);



function checkDuplicateNames(name_list) {
    let enList = name_list.map(item => item.en);
    let count = {};
    enList.forEach(en => {
        count[en] = (count[en] || 0) + 1;
    });
    let duplicates = Object.keys(count).filter(key => count[key] > 1);
    if (duplicates.length > 0) {
        let message = `มีรหัสซ้ำกรุณากรอกใหม่: ${duplicates.join(', ')}`;
        console.log(message);
        return false;
    } else {
        return true;
    }
}

// Example usage
let name_list = [
    { en: 'Apple', th: 'แอปเปิ้ล' },
    { en: 'Banana', th: 'กล้วย' },
    { en: 'Apple', th: 'แอปเปิ้ล' },
    { en: 'Orange', th: 'ส้ม' }
];

checkDuplicateNames(name_list);

