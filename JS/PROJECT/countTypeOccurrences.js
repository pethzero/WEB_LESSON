// countTypeOccurrences.js

function countTypeOccurrences(data_main, data_detail) {
    // นับจำนวน type ใน data_detail
    const typeCounts = data_detail.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1;
        return acc;
    }, {});

    console.log(typeCounts)
    // เตรียมผลลัพธ์โดยรวมข้อมูลจาก data_main และจำนวนที่นับได้จาก data_detail
    const result = data_main.map(mainItem => ({
        type: mainItem.type,
        numberInDetail: typeCounts[mainItem.type] || 0
    }));

    return result;
}

// ตัวอย่างการใช้งานฟังก์ชัน
const data_main = [
    { "type": "Mobile" },
    { "type": "Mobile1" },
    { "type": "Folklift"},
    { "type": "I-PAD" }
];

const data_detail = [
    {
        "id": 1,
        "type": "Mobile",
    },
    {
        "id": 11,
        "type": "I-PAD",
    },
    {
        "id": 10,
        "type": "I-PAD",
    },
    {
        "id": 9,
        "type": "I-PAD",
    },
    {
        "id": 8,
        "type": "I-PAD",
    },
    {
        "id": 7,
        "type": "I-PAD",
    },
    {
        "id": 6,
        "type": "I-PAD",
    },
    {
        "id": 5,
        "type": "Mobile",
    },
    {
        "id": 4,
        "type": "Mobile",
    },
    {
        "id": 3,
        "type": "Mobile",
    },
    {
        "id": 2,
        "type": "Mobile",
    }
]

console.log(countTypeOccurrences(data_main, data_detail))