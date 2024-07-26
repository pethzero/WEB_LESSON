const items = [
  { id: 1, name: 'Item 1', status: 0 },
  { id: 2, name: 'Item 2', status: 1 },
  { id: 3, name: 'Item 3', status: 2 },
  { id: 4, name: 'Item 4', status: 3 },
  { id: 5, name: 'Item 5', status: 4 },
  { id: 6, name: 'Item 6', status: 5 }
];

// การค้นหารายการ
// ค้นหารายการที่มี id ตรงกับค่า
const selectedItemId = 2;
const selectedItem = items.find(item => item.id === selectedItemId);
console.log(selectedItem); // { id: 2, name: 'Item 2', status: 1 }
//กรองรายการที่มี status เท่ากับ 1
const filteredItems = items.filter(item => item.status === 1);
console.log(filteredItems); // [{ id: 2, name: 'Item 2', status: 1 }]
//กรองรายการที่มี status ตรงกับค่าในอาร์เรย์ [5, 1, 2]
const filteredSomeItems = items.filter(item => [5, 1, 2].includes(item.status));
console.log(filteredSomeItems); // [{ id: 2, name: 'Item 2', status: 1 }, { id: 3, name: 'Item 3', status: 2 }, { id: 6, name: 'Item 6', status: 5 }]


// การแปลงข้อมูล
// เปลี่ยนแปลงรายการทั้งหมดให้เป็นชื่อ
const itemNames = items.map(item => item.name);
console.log(itemNames); // ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
// เพิ่มข้อมูลใหม่ให้กับรายการทั้งหมด
const updatedItems = items.map(item => ({
  ...item,
  description: `This is ${item.name}`
}));
console.log(updatedItems);
/*
[
  { id: 1, name: 'Item 1', status: 0, description: 'This is Item 1' },
  { id: 2, name: 'Item 2', status: 1, description: 'This is Item 2' },
  ...
]
*/

// การตรวจสอบและการรวมข้อมูล
// ตรวจสอบว่ามีรายการที่มี status เท่ากับ 5 หรือไม่
const hasStatus5 = items.some(item => item.status === 5);
console.log(hasStatus5); // true

// ตรวจสอบว่าทุกรายการมี status น้อยกว่า 6 หรือไม่
const allStatusLessThan6 = items.every(item => item.status < 6);
console.log(allStatusLessThan6); // true

// รวมค่า status ของทุกรายการ
const totalStatus = items.reduce((total, item) => total + item.status, 0);
console.log(totalStatus); // 15

// การจัดเรียง
// จัดเรียงรายการตามชื่อ
const sortedItemsByName = [...items].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedItemsByName);
/*
[
  { id: 1, name: 'Item 1', status: 0 },
  { id: 2, name: 'Item 2', status: 1 },
  ...
]
*/
// จัดเรียงรายการตาม status จากมากไปน้อย
const sortedItemsByStatusDesc = [...items].sort((a, b) => b.status - a.status);
console.log(sortedItemsByStatusDesc);
/*
[
  { id: 6, name: 'Item 6', status: 5 },
  { id: 5, name: 'Item 5', status: 4 },
  ...
]
*/

// การจัดกลุ่ม
// จัดกลุ่มรายการตาม status
const groupedByStatus = items.reduce((acc, item) => {
  const key = item.status;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {});

console.log(groupedByStatus);
/*
{
  0: [{ id: 1, name: 'Item 1', status: 0 }],
  1: [{ id: 2, name: 'Item 2', status: 1 }],
  ...
}
*/
