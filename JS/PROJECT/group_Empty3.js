const data_group = [
    { name: "vp", detail: [] },
    { name: "director", detail: [] },
    { name: "manager", detail: [] },
    { name: "leader", detail: [] },
    { name: "staff", detail: [] },
    { name: "daily", detail: [{ en: "Value" }] }
];

function hasAtLeastOneDetailWithValue(group) {
    return group.detail.some(detail => detail.en && detail.en.trim() !== '');
}

function checkAtLeastOneGroupHasDetail(groups) {
    return groups.some(group => hasAtLeastOneDetailWithValue(group));
}

function getGroupsWithoutDetails(groups) {
    return groups.filter(group => !hasAtLeastOneDetailWithValue(group)).map(group => `${group.name} ไม่มีข้อมูลใน detail`);
}

// ตัวอย่างการใช้งาน
let hasDetailInAtLeastOneGroup = checkAtLeastOneGroupHasDetail(data_group);
console.log("มีอย่างน้อยหนึ่งกลุ่มที่มีข้อมูลใน detail:");
console.log(hasDetailInAtLeastOneGroup);

if (!hasDetailInAtLeastOneGroup) {
    console.log("ไม่มีข้อมูลใน detail ในทุกๆ group");
} else {
    console.log("กลุ่มที่ไม่มีข้อมูลใน detail:");
    console.log(getGroupsWithoutDetails(data_group));
}
