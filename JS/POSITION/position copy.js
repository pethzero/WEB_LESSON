class PositionCounter {
    constructor(data) {
        this.data = data;
    }

    matchPositionType(positionType, candidatePosition) {
        if (Array.isArray(positionType)) {
            return positionType.includes(candidatePosition);
        }

        if (positionType === "E7+") {
            const positionNumber = parseInt(candidatePosition.substring(1));
            return candidatePosition.startsWith("E") && positionNumber >= 7;
        }

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

        return positionType === candidatePosition;
    }

    updateCount(candidates) {
        candidates.forEach(candidate => {
            let matched = false;
            this.data.forEach(position => {
                if (this.matchPositionType(position.position_type, candidate.postion)) {
                    position.count++;
                    matched = true;
                }
            });
            if (!matched) {
                const errorPosition = this.data.find(p => p.position_type === 'ERROR');
                if (errorPosition) {
                    errorPosition.count++;
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
    { position_name: 'A', position_type: "E7+", count: 0 },
    { position_name: 'B', position_type: "E4-E6", count: 0 },
    { position_name: 'C', position_type: "N1-N4", count: 0 },
    { position_name: 'D', position_type: ['D1', 'B2'], count: 0 },
    { position_name: 'E', position_type: "A1-A10", count: 0 },
    { position_name: 'F', position_type: "B1-B5", count: 0 },
    { position_name: '0', position_type: 'ERROR', count: 0 }  // ตัวนับสำหรับข้อมูลที่ไม่เข้าเงื่อนไข
];

// ข้อมูลผู้สมัคร
const candidates = [
    { name: 'A', postion: 'E8' },    // ตรงกับ "E7+"
    { name: 'B', postion: 'E999' },  // ตรงกับ "E7+"
    { name: 'C', postion: 'E4' },
    { name: 'D', postion: 'D1' },
    { name: 'E', postion: 'N1' },
    { name: 'F', postion: 'E1300' }, // ตรงกับ "E7+"
    { name: 'G', postion: 'A5' },
    { name: 'H', postion: 'B3' },
    { name: 'I', postion: 'A' },   // Invalid
    { name: 'J', postion: '@' }    // Invalid
];

const counter = new PositionCounter(positions);
counter.updateCount(candidates);

console.log(counter.getData());
