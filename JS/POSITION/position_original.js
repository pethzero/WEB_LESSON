class PositionCounter {
    constructor(data) {
        this.data = data;
    }

    matchPositionType(positionType, candidatePosition) {
        if (Array.isArray(positionType)) {
            return positionType.includes(candidatePosition);
        }
        if (positionType === "E7+") {
            // Extract the number part from the position string
            const positionNumber = parseInt(candidatePosition.substring(1));
            // Match if the number part is 7 or greater
            return positionNumber >= 7;
        }
        if (positionType === "E4-E6") {
            // Match positions like E4, E5, E6
            return /^E[4-6]$/.test(candidatePosition);
        }
        if (positionType === "N1-N4") {
            // Match positions like N1, N2, N3, N4
            return /^N[1-4]$/.test(candidatePosition);
        }
        return positionType === candidatePosition;
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
    {position_name: 'D', position_type: ['D1', 'B2'], count: 0}
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
