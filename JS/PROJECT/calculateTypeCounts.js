// calculateTypeCounts.js

function calculateTypeCounts(temp_tb_data) {
    const typeCounts = temp_tb_data.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1;
        return acc;
    }, {});

    const uniqueTypes = Object.keys(typeCounts).map(type => ({
        type: type,
        number: typeCounts[type]
    }));

    return uniqueTypes;
}

// ตัวอย่างการใช้งานฟังก์ชัน
const temp_tb_data = [
    { type: 'A' },
    { type: 'B' },
    { type: 'A' },
    { type: 'C' },
    { type: 'B' },
    { type: 'A' }
];

const result = calculateTypeCounts(temp_tb_data);
console.log(result);
// Output:
// [
//     { type: 'A', number: 3 },
//     { type: 'B', number: 2 },
//     { type: 'C', number: 1 }
// ]
