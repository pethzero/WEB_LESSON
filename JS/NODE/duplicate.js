let data = ['A', null, 0, null, 'E', 'F', 'G', 'H'];

let splicedData = JSON.parse(JSON.stringify(data)).splice(1, 6); // ตัดจาก index 1 ถึง index 6
console.log(splicedData); // Output: [null, 0, 'D', 'E', 'F', 'G']

let selectedData = [data[1], data[3], data[6]]; // เลือกเฉพาะ B, D, G
console.log(selectedData); // Output: [null, 'D', 'G']

// ปรับเพื่อเช็ค null หรือ undefined
let test = selectedData.map((x, i) => {
    console.log(x,i)
    if ([0, 1, 2, 3, 4, 5].includes(i)) {
        if (i === 0 || i === 1) {
            if (x === null || x === undefined) {
                return 'NULL'; // ถ้า x เป็น null หรือ undefined ให้ return 'NULL'
            }
            let parsed = parseFloat(x.toString().replace(/,/g, ''));
            return isNaN(parsed) ? '0' : parsed;
        } else {
            return x !== '' && x !== null && x !== undefined ? `'${x.toString().replace(/'/g, "''").trim()}'` : 'NULL';
        }
    }
}).filter(Boolean).join(',');

console.log(test);
