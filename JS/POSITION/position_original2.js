class PositionCounter {
    constructor(data) {
        this.data = data;
    }

    matchPositionType(positionType, candidatePosition) {
        const extractNumber = (position) => parseInt(position.substring(1));
        const positionNumber = extractNumber(candidatePosition);

        switch (positionType) {
            case "E7+":
                return positionNumber >= 7;
            case "E4-E6":
                return positionNumber >= 4 && positionNumber <= 6;
            case "N1-N4":
                return /^N[1-4]$/.test(candidatePosition);
            default:
                return Array.isArray(positionType)
                    ? positionType.includes(candidatePosition)
                    : positionType === candidatePosition;
        }
    }

    updateCount(candidates) {
        candidates.forEach(candidate => {
            this.data.forEach(position => {
                if (this.matchPositionType(position.position_type, candidate.postion)) {
                    position.count++;
                }
            });
        });
    }

    getData() {
        return this.data;
    }
}

// ข้อมูลตำแหน่งเริ่มต้น
const positions = [
    {position_name: 'A', position_type: "E7+", count: 0},
    {position_name: 'B', position_type: "E4-E6", count: 0},
    {position_name: 'C', position_type: "N1-N4", count: 0},
    {position_name: 'C', position_type: ['D1', 'B2'], count: 0}
];

// ข้อมูลผู้สมัคร
const candidates = [
    {name: 'A', postion: 'E8'},
    {name: 'B', postion: 'E999'},
    {name: 'C', postion: 'E4'},
    {name: 'D', postion: 'D1'},
    {name: 'E', postion: 'N1'},
    {name: 'F', postion: 'E1300'}
];

const counter = new PositionCounter(positions);
counter.updateCount(candidates);

console.log(counter.getData());
