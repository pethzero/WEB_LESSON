// 1. การจัดกลุ่มข้อมูล
const data = [
    { id: 1, category: 'fruit', name: 'apple' },
    { id: 2, category: 'vegetable', name: 'carrot' },
    { id: 3, category: 'fruit', name: 'banana' },
    { id: 4, category: 'vegetable', name: 'spinach' },
    { id: 5, category: 'fruit', name: 'orange' }
];

const groupedData = data.reduce((acc, curr) => {
    const key = curr.category;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
}, {});

console.log(groupedData);
// Output: { fruit: [ { ... }, { ... }, { ... } ], vegetable: [ { ... }, { ... } ] }

// 2. การคำนวณค่าเฉลี่ย
const scores = [90, 85, 75, 88, 92, 79];

const average = scores.reduce((acc, score, _, arr) => acc + score / arr.length, 0);

console.log(average);
// Output: 84.83333333333333


// 3. การรวมข้อมูลจากหลายแหล่ง
const arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const mergedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(mergedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 4. การสร้าง Mapping ของข้อมูล
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});

console.log(userMap);
// Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }


// 5. การกรองและแปลงข้อมูล
const items = [
    { id: 1, name: 'apple', type: 'fruit' },
    { id: 2, name: 'carrot', type: 'vegetable' },
    { id: 3, name: 'banana', type: 'fruit' },
    { id: 4, name: 'spinach', type: 'vegetable' }
];

const fruitNames = items.reduce((acc, item) => {
    if (item.type === 'fruit') {
        acc.push(item.name);
    }
    return acc;
}, []);

console.log(fruitNames);
// Output: ['apple', 'banana']

// 6. การนับความถี่ของค่า
const votes = ['yes', 'no', 'yes', 'no', 'yes', 'yes', 'no'];

const voteCount = votes.reduce((acc, vote) => {
    if (!acc[vote]) {
        acc[vote] = 0;
    }
    acc[vote]++;
    return acc;
}, {});

console.log(voteCount);
// Output: { yes: 4, no: 3 }


// 7. การหาค่ามากที่สุดและน้อยที่สุด
const numbers = [10, 5, 8, 20, 3, 15];

const maxMin = numbers.reduce((acc, num) => {
    return {
        max: num > acc.max ? num : acc.max,
        min: num < acc.min ? num : acc.min
    };
}, { max: -Infinity, min: Infinity });

console.log(maxMin);
// Output: { max: 20, min: 3 }

