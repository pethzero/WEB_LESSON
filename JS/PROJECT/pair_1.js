// ข้อมูลจำลอง 13 ชุด
const employees = [
    { gender: 'M', type: 'A', EN: '00001' },
    { gender: 'F', type: 'A', EN: '00002' },
    { gender: 'M', type: 'B', EN: '00003' },
    { gender: 'F', type: 'B', EN: '00004' },
    { gender: 'M', type: 'C', EN: '00005' },
    { gender: 'F', type: 'C', EN: '00006' },
    { gender: 'M', type: 'A', EN: '00007' },
    { gender: 'F', type: 'A', EN: '00008' },
    { gender: 'M', type: 'B', EN: '00009' },
    { gender: 'F', type: 'B', EN: '00010' },
    { gender: 'M', type: 'C', EN: '00011' },
    { gender: 'F', type: 'C', EN: '00012' },
    { gender: 'M', type: 'A', EN: '00013' }
];

// ฟังก์ชั่นในการสุ่มข้อมูล
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ฟังก์ชั่นในการจับคู่
function getUniquePairs(employees, count) {
    const pairs = [];
    const seen = new Set();

    const shuffledEmployees = shuffle(employees.slice());

    for (const emp of shuffledEmployees) {
        const key = `${emp.gender}-${emp.type}`;
        if (!seen.has(key)) {
            pairs.push(emp);
            seen.add(key);
            if (pairs.length === count) break;
        }
    }

    return pairs.length === count ? pairs : null;
}

// ทดสอบฟังก์ชั่น
const result = getUniquePairs(employees, 3);
if (result) {
    console.log('จับคู่ได้:', result);
} else {
    console.log('ไม่สามารถจับคู่ได้');
}
