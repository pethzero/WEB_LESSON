class PositionCounter {
    constructor(data) {
        this.data = data;
    }

    matchPositionType(positionType, candidatePosition) {
        // Handle array of position types
        if (Array.isArray(positionType)) {
            return positionType.includes(candidatePosition);
        }

        // Handle position types with '+'
        const plusMatch = positionType.match(/^([A-Z])(\d+)\+$/);
        if (plusMatch) {
            const [_, letter, minNumber] = plusMatch;
            const candidateLetter = candidatePosition.charAt(0);
            const candidateNumber = parseInt(candidatePosition.substring(1));
            return candidateLetter === letter && candidateNumber >= parseInt(minNumber);
        }

        // Handle range position types like "E4-E6"
        const rangeMatch = positionType.match(/^([A-Z])(\d+)(?:-([A-Z]?\d+))?$/);
        if (rangeMatch) {
            const [_, prefix, start, end] = rangeMatch;
            const candidatePrefix = candidatePosition.charAt(0);
            const candidateNumber = parseInt(candidatePosition.substring(1));

            if (!end) {
                return candidatePrefix === prefix && candidateNumber >= parseInt(start);
            }

            const endNumber = parseInt(end.match(/\d+/)[0]);
            return candidatePrefix === prefix && candidateNumber >= parseInt(start) && candidateNumber <= endNumber;
        }

        // Handle exact match
        return positionType === candidatePosition;
    }

    updateCount(candidates) {
        candidates.forEach(candidate => {
            let matched = false;
            this.data.forEach(position => {
                if (this.matchPositionType(position.position_type, candidate.postion)) 
                {
                    if (candidate.status) {
                        position.count_main++;
                    } else {
                        position.count_detail++;
                    }
                    matched = true;
                }
            });
            
            if (!matched) {
                const errorPosition = this.data.find(p => p.position_type === 'ERROR');
                if (errorPosition) {
                    errorPosition.count_main++;
                    errorPosition.count_detail++;
                }
            }
        });
    }

    getData() {
        return this.data;
    }
}

// ข้อมูลตำแหน่งเริ่มต้น
const positions = [
    { position_name: 'A', position_type: "E7+", count_main: 0, count_detail: 0 },
    { position_name: 'B', position_type: "E4-E6", count_main: 0, count_detail: 0 },
    { position_name: 'C', position_type: "N1-N4", count_main: 0, count_detail: 0 },
    { position_name: 'D', position_type: ['D1', 'B2'], count_main: 0, count_detail: 0 },
    { position_name: 'E', position_type: "A1-A10", count_main: 0, count_detail: 0 },
    { position_name: 'F', position_type: "B1-B5", count_main: 0, count_detail: 0 },
    { position_name: 'G', position_type: "O6+", count_main: 0, count_detail: 0 },
    { position_name: 'H', position_type: "P9+", count_main: 0, count_detail: 0 },
    { position_name: '0', position_type: 'ERROR', count_main: 0, count_detail: 0 }  // ตัวนับสำหรับข้อมูลที่ไม่เข้าเงื่อนไข
];

// ข้อมูลผู้สมัคร
const candidates = [
    { name: 'A', postion: 'E8', status: true },    // ตรงกับ "E7+" และ status เป็น true
    { name: 'B', postion: 'E999', status: true },  // ตรงกับ "E7+" และ status เป็น true
    { name: 'C', postion: 'E4', status: false },
    { name: 'D', postion: 'D1', status: true },
    { name: 'E', postion: 'N1', status: false },
    { name: 'F', postion: 'E1300', status: true }, // ตรงกับ "E7+" และ status เป็น true
    { name: 'G', postion: 'O7', status: true },    // ตรงกับ "O6+" และ status เป็น true
    { name: 'H', postion: 'P10', status: true },   // ตรงกับ "P9+" และ status เป็น true
    { name: 'I', postion: 'A', status: false },
    { name: 'J', postion: '@', status: false }
];

const counter = new PositionCounter(positions);
counter.updateCount(candidates);

console.log(counter.getData());
