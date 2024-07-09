const isNotEmptyByGroup = ['vp', 'director', 'manager', 'leader', 'staff', 'daily'];

function getIncompleteGroups(groups) {
    return groups.join(', ');
}

// ตัวอย่างการใช้งาน
let incompleteGroups = this.getIncompleteGroups(isNotEmptyByGroup);
console.log("กลุ่มที่ไม่มีข้อมูลใน detail:");
console.log(incompleteGroups);


// const isNotEmptyByGroup = ['vp', 'director', 'manager', 'leader', 'staff', 'daily'];

// function getIncompleteGroups(groups) {
//     return groups.map(group => `${group} ไม่มีข้อมูลใน detail`).join(', ');
// }

// // ตัวอย่างการใช้งาน
// let incompleteGroups = this.getIncompleteGroups(isNotEmptyByGroup);
// console.log("กลุ่มที่ไม่มีข้อมูลใน detail:");
// console.log(incompleteGroups);
