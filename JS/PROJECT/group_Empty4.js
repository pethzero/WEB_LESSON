const data_group = [
    { name: "vp", detail: [] },
    { name: "director", detail: [] },
    { name: "manager", detail: [] },
    { name: "leader", detail: [] },
    { name: "staff", detail: [] },
    { name: "daily", detail: [{ en: "Value" }] }
];

function hasAtLeastOneDetail(group) {
    return group.detail.length > 0;
}

function checkAllGroupsHaveDetails(groups) {
    return groups.every(group => hasAtLeastOneDetail(group));
}

function getGroupsWithoutDetails(groups) {
    return groups.filter(group => !hasAtLeastOneDetail(group)).map(group => `${group.name} ไม่มีข้อมูลใน detail`);
}

// ตัวอย่างการใช้งาน
let allGroupsHaveDetails = checkAllGroupsHaveDetails(data_group);
console.log("มีข้อมูลใน detail ในทุกๆ group:");
console.log(allGroupsHaveDetails);

if (!allGroupsHaveDetails) {
    console.log("กลุ่มที่ไม่มีข้อมูลใน detail:");
    console.log(getGroupsWithoutDetails(data_group));
}
