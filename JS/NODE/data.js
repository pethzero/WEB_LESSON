let lines = [
    "material_no\tdata1\tdata2", // header line
    "12345\tvalue1\tvalue2",     // line 1
    "67890\tvalue3\tvalue4",     // line 2
    "",                          // empty line (to test continue)
    "11223\tvalue5\tvalue6"      // line 3
];

let msg = {
    routes: [
        { material_no: '12345' },
        { material_no: '67890' }
    ]
};

function simulate() {
    let result = [];
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i]) continue; // ข้ามบรรทัดว่าง
        // console.log(i,'S')
        const obj = {};
        const currentline = lines[i].split('\t'); // แยกบรรทัดด้วย tab
        
        console.log(currentline)
        // เช็คว่า material_no ใน msg.routes ตรงกับ currentline[0] หรือไม่
        if (msg.routes.some(x => x.material_no == currentline[0].trim())) {
            type = '555'
        }else{
            type = `NULL`
        }
        console.log(i,'P')
        
        let test = currentline.splice(0, 9).map((x, i) => {
            if ([0, 1,2,3,4,5].includes(i)) {
                if (i === 6 || i === 7) {
                    let parsed = parseFloat(x.replace(/,/g, ''));
                    return isNaN(parsed) ? '0' : parseFloat(x.replace(/,/g, ''));
                } else {
                    return x !== '' ? `'${x.replace(/'/g, "''").trim()}'` : 'NULL';
                }
            }
        }).filter(Boolean).join(',')
        
        console.log('TT',test)
        let sql = `INSERT INTO table_name (material_no, data1, data2,type) VALUES ('${currentline[0]}', '${currentline[1]}', '${currentline[2]}',${type});`;
        result.push(sql); // เพิ่ม SQL statement ลงใน result
    }
    
    return result;
}

// เรียกใช้ฟังก์ชันจำลองเหตุการณ์
console.log(simulate());
