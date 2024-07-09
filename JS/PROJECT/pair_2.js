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

// ฟังก์ชั่นในการจัดกลุ่ม
function groupEmployees(employees, groupSize) {
    const groups = [];
    const shuffledEmployees = shuffle(employees.slice());

    while (shuffledEmployees.length >= groupSize) {
        const group = [];
        const seen = new Set();

        for (let i = 0; i < shuffledEmployees.length; i++) {
            const emp = shuffledEmployees[i];
            const key = `${emp.gender}-${emp.type}`;
            if (!seen.has(key)) {
                group.push(emp);
                seen.add(key);
                shuffledEmployees.splice(i, 1);
                i--; // ปรับ i เนื่องจากลบรายการออกจากอาร์เรย์
                if (group.length === groupSize) break;
            }
        }

        if (group.length === groupSize) {
            groups.push({ group });
        } else {
            break; // ไม่สามารถสร้างกลุ่มที่มีขนาดเท่ากับ groupSize ได้อีก
        }
    }

    return groups;
}

// ทดสอบฟังก์ชั่น
const groups = groupEmployees(employees, 3);
console.log(groups);
