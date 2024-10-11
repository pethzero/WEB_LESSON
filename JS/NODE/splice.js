let data = ['A', null, 'A', null, 'E', 'F', 'G', 'H'];

// let splicedData = JSON.parse(JSON.stringify(data)).splice(1, 6); // ตัดจาก index 1 ถึง index 6
// console.log(splicedData); // Output: [null, 0, 'D', 'E', 'F', 'G']

// ปรับเพื่อเช็ค null หรือ undefined
let test = data.splice(0, 9).map((x, i) => {
    if ([0, 1, 2, 3, 4, 5].includes(i)) {
        if (i === 1 || i === 2) {
            if (x === null || x === undefined) {
                return 'NULL'; // ถ้า x เป็น null หรือ undefined ให้ return 'NULL'
            }
            let parsed = parseFloat(x.toString().replace(/,/g, ''));
            return isNaN(parsed) ? '0' : parsed;
        } else {
            return x !== '' && x !== null && x !== undefined ? `'${x.toString().replace(/'/g, "''").trim()}'` : 'NULL';
        }
    }
}).filter(x => x !== null && x !== undefined).join(',');

console.log(test);



// let data = ['A', null, 0, null, 'E', 'F', 'G', 'H'];

// let selectedData = [data[1], data[3], data[6]]; // เลือกเฉพาะ B, D, G
// console.log(selectedData); // Output: [null, 'D', 'G']

// let test = data.map((x, i) => {
//     if ([1, 2].includes(i)) {
//         // ตรวจสอบ null หรือ undefined
//         if (x === null || x === undefined) {
//             return 'NULL'; // ถ้า null หรือ undefined, return 'NULL'
//         }
//         let parsed = parseFloat(x.toString().replace(/,/g, ''));
//         console.log(parsed);
//         return isNaN(parsed) ? '0' : parsed; // ถ้าค่าไม่ใช่ตัวเลข, return '0', ถ้าเป็น 0 ก็ return 0
//     } else {
//         // เช็คค่าว่าง, null หรือ undefined และแทนที่ด้วย 'NULL'
//         return x !== '' && x !== null && x !== undefined ? 
//             `'${x.toString().replace(/'/g, "''").trim()}'` : 'NULL';
//     }
// }).filter(x => x !== null && x !== undefined).join(',');

// console.log(test);
