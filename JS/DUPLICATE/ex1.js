const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// หารายการที่ไม่ซ้ำ
const uniqueItems = [...new Set(array)];

// นับจำนวนการเกิดของแต่ละรายการ
const itemCount = array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log("รายการที่ไม่ซ้ำ:", uniqueItems); // ['apple', 'banana', 'orange']
console.log("การนับจำนวนแต่ละรายการ:", itemCount); // { apple: 3, banana: 2, orange: 1 }
