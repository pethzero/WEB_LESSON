// การค้นหาใน String
// ใช้ includes: ตรวจสอบว่าคำอยู่ในสตริงหรือไม่
// ใช้ indexOf: ค้นหาตำแหน่งของคำในสตริง
// ใช้ search: ค้นหาด้วย regex
// ใช้ match: ค้นหาด้วย regex และคืนค่าเป็นอาร์เรย์

const str = "xxaasafw";
// includes
console.log(str.includes('aas')); // true
// indexOf
console.log(str.indexOf('aas')); // 2 (ตำแหน่งที่เจอคำว่า 'aas')
console.log(str.indexOf('not_found')); // -1 (ไม่พบ)
// search (ใช้ regex)
console.log(str.search(/aas/)); // 2
// match (ใช้ regex)
console.log(str.match(/aas/)); // ["aas"]


// การค้นหาใน Array
// ใช้ includes: ตรวจสอบว่าคำอยู่ในอาร์เรย์หรือไม่
// ใช้ indexOf: ค้นหาตำแหน่งของคำในอาร์เรย์
// ใช้ find: ค้นหารายการที่ตรงตามเงื่อนไข
// ใช้ filter: กรองรายการที่ตรงตามเงื่อนไข
const arr = ['apple', 'banana', 'cherry', 'date', 'fig'];
// includes
console.log(arr.includes('banana')); // true
// indexOf
console.log(arr.indexOf('banana')); // 1
console.log(arr.indexOf('not_found')); // -1
// find
const foundItem = arr.find(item => item === 'banana');
console.log(foundItem); // 'banana'
// filter
const filteredItems = arr.filter(item => item.startsWith('b'));
console.log(filteredItems); // ['banana']

// การค้นหาใน Object
// ใช้ hasOwnProperty: ตรวจสอบว่าออบเจ็กต์มีคีย์หรือไม่
// ใช้ in: ตรวจสอบว่าคีย์อยู่ในออบเจ็กต์หรือไม่
// ใช้ Object.keys + includes: ตรวจสอบว่าคีย์อยู่ในออบเจ็กต์หรือไม่
const obj = {
  apple: 'fruit',
  banana: 'fruit',
  carrot: 'vegetable',
};

// hasOwnProperty
console.log(obj.hasOwnProperty('banana')); // true

// in
console.log('banana' in obj); // true

// Object.keys + includes
console.log(Object.keys(obj).includes('banana')); // true


// การค้นหาใน Set
// ใช้ has: ตรวจสอบว่าสิ่งนั้นอยู่ในเซ็ตหรือไม่
const set = new Set(['apple', 'banana', 'cherry']);

console.log(set.has('banana')); // true
console.log(set.has('not_found')); // false


// การค้นหาใน Map
// ใช้ has: ตรวจสอบว่าคีย์อยู่ในแมปหรือไม่
// ใช้ get: ดึงค่าที่สัมพันธ์กับคีย์
const map = new Map([
  ['apple', 'fruit'],
  ['banana', 'fruit'],
  ['carrot', 'vegetable']
]);

// has
console.log(map.has('banana')); // true

// get
console.log(map.get('banana')); // 'fruit'


// การค้นหาใน JSON (แบบ object)
// ใช้ hasOwnProperty: ตรวจสอบว่าคีย์อยู่ใน JSON หรือไม่
// ใช้ in: ตรวจสอบว่าคีย์อยู่ใน JSON หรือไม่
const jsonData = {
  "name": "John",
  "age": 30,
  "city": "New York"
};

// hasOwnProperty
console.log(jsonData.hasOwnProperty('age')); // true

// in
console.log('age' in jsonData); // true
