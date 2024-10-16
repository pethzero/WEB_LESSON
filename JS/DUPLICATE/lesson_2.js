function checkDuplicateDataGroup(entry) {
    let count = {};

    entry.forEach(item => {
        let key = item.group_id;
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
    { id: 1, group_id: 1, data: 'A' ,text:'AAAA' },
    { id: 2, group_id: 2, data: 'B' ,text:'BBBB' },
    { id: 3, group_id: 1, data: 'A' ,text:'AAAA' },
    { id: 4, group_id: 3, data: 'C' ,text:'CCCC' },
    { id: 5, group_id: 2, data: 'B' ,text:'BBBB' },
    { id: 6, group_id: 4, data: 'D' ,text:'DDDD' }
];

checkDuplicateDataGroup(data);


