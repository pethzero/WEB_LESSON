let payload = `ID\tNAME\tGROUP\tDETAIL 
1\tA001\tA\t5555
2\tA001\tA\t8888
3\tB001\tB\t77777
4\tA001\tB\t77777`;

const uniqueData = new Map();

function csvJSON(csv) {
    const lines = csv.trim().split('\n'); // ตัดช่องว่างและแบ่งบรรทัด
    const result = [];
    const headers = lines[0].split('\t'); // แยก headers จากบรรทัดแรก

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i]) continue;
        const currentline = lines[i].split('\t'); // แยกแต่ละคอลัมน์จากบรรทัด





        const name = currentline[1]; // คอลัมน์ NAME
        const group = currentline[2]; // คอลัมน์ GROUP
        // ถ้ามี combination ของ NAME และ GROUP อยู่ใน Map แล้วให้ข้าม
        if (uniqueData.has(`${name}_${group}`)) {
            continue; // ถ้ามีอยู่แล้ว ข้ามการเพิ่ม
        }
        // เพิ่ม combination ของ NAME และ GROUP เข้าไปใน Map
        uniqueData.set(`${name}_${group}`, true);
        console.log(uniqueData)
        // สร้าง SQL หรือ JSON object
        let sql = `${currentline.join(', ')}`;
        result.push(sql);
    }

    return result;
}

let excel = csvJSON(payload);
console.log(excel);
