// ตัวอย่างการใช้ concat

let array1 = [{ name: 'Alice' }, { name: 'Bob' }];
let array2 = [{ name: 'Charlie' }, { name: 'David' }];

let combinedArrayconcat = array1.concat(array2);

console.log(combinedArrayconcat);


// ตัวอย่างการใช้ Spread Operator
let combinedArraySpreadOperator = [...array1, ...array2];

console.log(combinedArraySpreadOperator);

// ตัวแปรเริ่มต้น
let data = [];
let main = { id: 1, name: 'Main Item' };
let detail = [{ detailId: 1, description: 'Detail 1' }, { detailId: 2, description: 'Detail 2' }];

// เพิ่ม main เข้าไปใน data
data.push(main);

// เพิ่ม detail เข้าไปใน data
data.push(...detail);

console.log(data);
