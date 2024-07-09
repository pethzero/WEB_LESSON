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

function checkAtLeastOneGroupHasDetails(groups) {
    return groups.some(group => hasAtLeastOneDetail(group));
}

// ตัวอย่างการใช้งาน
let atLeastOneGroupHasDetails = checkAtLeastOneGroupHasDetails(data_group);
console.log("อย่างน้อยหนึ่งกลุ่มมีข้อมูลใน detail:");
console.log(atLeastOneGroupHasDetails);

if (!atLeastOneGroupHasDetails) {
    console.log("ไม่มีกลุ่มใดมีข้อมูลใน detail");
}
