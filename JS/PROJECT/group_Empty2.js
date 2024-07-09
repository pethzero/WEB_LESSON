const data_group = [
    { name: "vp", detail: [{ en: "Value" }] },
    { name: "director", detail: [{ en: "" }] },
    { name: "manager", detail: [{ en: "Value" }] },
    { name: "leader", detail: [{ en: "Value" }] },
    { name: "staff", detail: [{ en: "Value" }] },
    { name: "daily", detail: [{ en: "Value" }] }
];

function checkNotEmptyInAllGroupsByGroup() {
    let result = {};
    for (let group of data_group) {
        let groupName = group.name;
        let isNotEmpty = true;
        let details = group.detail;

        for (let detail of details) {
            if (!detail || detail.en === null || detail.en === '') {
                isNotEmpty = false;
                break;
            }
        }

        result[groupName] = isNotEmpty;
    }
    return result;
}

function allGroupsHaveData(result) {
    return Object.values(result).every(value => value);
}

function getIncompleteGroups(result) {
    return Object.keys(result).filter(group => !result[group]).map(group => `${group} มีข้อมูลยังกรอกไม่ครบ`);
}

// ตัวอย่างการใช้งาน
let isNotEmptyByGroup = checkNotEmptyInAllGroupsByGroup();
console.log("detail ในทุกๆ group มีข้อมูลและ en ไม่ว่างตามแต่ละ group:");
console.log(isNotEmptyByGroup);

if (allGroupsHaveData(isNotEmptyByGroup)) {
    console.log("ทุกกลุ่มมีข้อมูลและ en ไม่ว่าง");
} else {
    console.log("บางกลุ่มมีข้อมูลยังกรอกไม่ครบ:");
    console.log(getIncompleteGroups(isNotEmptyByGroup));
}
