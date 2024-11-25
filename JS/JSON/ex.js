const fs = require('fs');

// ระบุพาธของไฟล์ JSON
const filePath = 'D:\\รายงาน\\7_MATCRTL\\BK\\log\\FinalData_202411081451.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);  // แสดงข้อมูล JSON
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});
