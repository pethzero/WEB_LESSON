let data_group = [
    {
        "name": "vp",
        "detail": [
            { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null },
            { "id": null, "en": "11112", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null }
        ]
    },
    {
        "name": "director",
        "detail": [
            { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null },
            { "id": null, "en": null, "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null }
        ]
    },
    {
        "name": "manager",
        "detail": []
    },
    {
        "name": "leader",
        "detail": []
    },
    {
        "name": "staff",
        "detail": []
    },
    {
        "name": "daily",
        "detail": []
    }
];


////////////////////////////////////////////////////////////////// EP 1 //////////////////////////////////////////////////////////////////
function checkNotEmptyInAllGroups() {
    for (let group of data_group) {
        let details = group.detail;
        for (let detail of details) {
            if (!detail || detail.en === null || detail.en === '') {
                return false; // พบ detail ที่ en ว่างหรือเป็น null
            }
        }
    }
    return true; // ไม่พบ detail ที่ en ว่างหรือเป็น null
  }

  // ฟังก์ชันตรวจสอบว่า detail ในทุกๆ group มีข้อมูลและ en ไม่ว่างหรือเป็น null ตามแต่ละ group
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

// ตัวอย่างการใช้งาน
// let isNotEmptyInAllGroups = checkNotEmptyInAllGroups();
// console.log("detail ในทุกๆ group มีข้อมูลและ en ไม่ว่าง:", isNotEmptyInAllGroups); // true (มีข้อมูลและ en ไม่ว่าง)

// let isNotEmptyByGroup = checkNotEmptyInAllGroupsByGroup();
// console.log("detail ในทุกๆ group มีข้อมูลและ en ไม่ว่างตามแต่ละ group:");
// console.log(isNotEmptyByGroup);


////////////////////////////////////////////////////////////////// EP 2 //////////////////////////////////////////////////////////////////
function allGroupsHaveData(result) {
    return Object.values(result).every(value => value);
}

function getIncompleteGroups(result) {
    return Object.keys(result).filter(group => !result[group]).map(group => `${group} มีข้อมูลยังกรอกไม่ครบ`);
}

// if (allGroupsHaveData(isNotEmptyByGroup)) {
//     console.log("ทุกกลุ่มมีข้อมูลและ en ไม่ว่าง");
// } else {
//     console.log("บางกลุ่มมีข้อมูลยังกรอกไม่ครบ:");
//     console.log(getIncompleteGroups(isNotEmptyByGroup));
// }

////////////////////////////////////////////////////////////////// EP 3 //////////////////////////////////////////////////////////////////
const data_group_2 = [
    { name: "vp", detail: [] },
    { name: "director", detail: [] },
    { name: "manager", detail: [] },
    { name: "leader", detail: [] },
    { name: "staff", detail: [{ name: "name" }] },
    { name: "daily", detail: [{ en: "Value" }] }
];

console.log("EP3 4 5");
// ตรวจหา Detail ที่มีข้อมูล en
function hasAtLeastOneDetailWithValue(group) {
    return group.detail.some(detail => detail.en && detail.en.trim() !== '');
}

function hasAtLeastOneDetail(group) {
    return group.detail.length > 0;
}

// เช็คบ้างส่วน some
function checkAtLeastOneGroupHasDetail(groups) {
    return groups.some(group => hasAtLeastOneDetailWithValue(group));
}

// เช็คทุกส่วน every
function checkAllGroupsHaveDetails(groups) {
    return groups.every(group => hasAtLeastOneDetail(group));
}


// ตัวอย่างการใช้งาน
let allGroupsHaveDetails = checkAllGroupsHaveDetails(data_group_2);
console.log("มีข้อมูลใน detail ในทุกๆ group:",allGroupsHaveDetails);

let hasDetailInAtLeastOneGroup = checkAtLeastOneGroupHasDetail(data_group_2);
console.log("มีอย่างน้อยหนึ่งกลุ่มที่มีข้อมูลใน detail:",hasDetailInAtLeastOneGroup);


function getGroupsWithoutDetailsWithValue(groups) {
    return groups.filter(group => !hasAtLeastOneDetailWithValue(group)).map(group => `${group.name} ไม่มีข้อมูล en ใน detail`);
}


function getGroupsWithoutDetails(groups) {
    return groups.filter(group => !hasAtLeastOneDetail(group)).map(group => `${group.name} ไม่มีข้อมูลใน detail`);
}

function checkAtLeastOneGroupHasDetails(groups) {
    return groups.some(group => hasAtLeastOneDetail(group));
}

// ตัวอย่างการใช้งาน
// if (!hasDetailInAtLeastOneGroup) {
//     console.log("ไม่มีข้อมูลใน detail ในทุกๆ group");
// } else {
//     console.log("กลุ่มที่ไม่มีข้อมูลใน detail:");
//     console.log(getGroupsWithoutDetailsWithValue(data_group_2));
// }

// if (!allGroupsHaveDetails) {
//     console.log("กลุ่มที่ไม่มีข้อมูลใน detail:");
//     console.log(getGroupsWithoutDetails(data_group_2));
// }

// let atLeastOneGroupHasDetails = checkAtLeastOneGroupHasDetails(data_group);
// console.log("อย่างน้อยหนึ่งกลุ่มมีข้อมูลใน detail:");
// console.log(atLeastOneGroupHasDetails);

// if (!atLeastOneGroupHasDetails) {
//     console.log("ไม่มีกลุ่มใดมีข้อมูลใน detail");
// }


////////////////////////////////////////////////////////////////// EP 4 //////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////// EP 5 //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////// EP 6 //////////////////////////////////////////////////////////////////
// const ListByGroup = ['vp', 'director', 'manager', 'leader', 'staff', 'daily'];

// function getIncompleteGroups(groups) {
//     return groups.join(', ');
// }

// // ตัวอย่างการใช้งาน
// let incompleteGroups = this.getIncompleteGroups(ListByGroup);
// console.log("กลุ่มที่ไม่มีข้อมูลใน detail:");
// console.log(incompleteGroups);


////////////////////////////////////////////////////////////////// EP 7 //////////////////////////////////////////////////////////////////
let data_group3 = [
    {
        "name": "vp",
        "detail": [
            { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null },
            { "id": null, "en": "11112", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null }
        ]
    },
    {
        "name": "director",
        "detail": [
            { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null },
            { "id": null, "en": null, "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null }
        ]
    },
    {
        "name": "manager",
        "detail": [  
            { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null },
            { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null }
]
    },
    {
        "name": "leader",
        "detail": []
    },
    {
        "name": "staff",
        "detail": []
    },
    {
        "name": "daily",
        "detail": []
    }
];


// ฟังก์ชันตรวจสอบการซ้ำฟังก์ชันใน detail ของ group 'vp'
function checkUniqueInValue() {
    let details = data_group3.find(group => group.name === 'vp').detail;
    let seen = new Set();
    for (let detail of details) {
        let en = detail.en;
        if (seen.has(en)) {
            return false; // พบฟังก์ชันที่ซ้ำกัน
        }
        seen.add(en);
    }
    return true; // ไม่พบฟังก์ชันที่ซ้ำกัน
  }

  // ตัวอย่างการใช้งาน
let isUniqueInValue = checkUniqueInValue();
console.log("ฟังก์ชันไม่ซ้ำกันใน detail ของ group 'vp':", isUniqueInValue); // false (พบฟังก์ชันที่ซ้ำกัน)



// ฟังก์ชันตรวจสอบการซ้ำฟังก์ชันใน detail ของทุก group
function checkUniqueAllGroups() {
    let seen = new Set();
    for (let group of data_group3) {
        let details = group.detail;
        for (let detail of details) {
            if (detail && detail.en !== null && detail.en !== '') {
                if (seen.has(detail.en)) {
                    return false; // พบฟังก์ชันที่ซ้ำกัน
                }
                seen.add(detail.en);
            }
        }
    }
    return true; // ไม่พบฟังก์ชันที่ซ้ำกัน
  }

// ฟังก์ชันตรวจสอบการซ้ำฟังก์ชันใน detail ของทุก group แยกตาม name
function checkUniqueAllGroupsByName() {
    let result = {};
    for (let group of data_group3) {
        let groupName = group.name;
        let seen = new Set();
        let isUnique = true;

        for (let detail of group.detail) {
            if (detail && detail.en !== null && detail.en !== '') {
                if (seen.has(detail.en)) {
                    isUnique = false;
                    break;
                }
                seen.add(detail.en);
            }
        }

        result[groupName] = isUnique;
    }
    return result;
}


// ตัวอย่างการใช้งาน
let isUniqueAllGroups = checkUniqueAllGroups();
console.log("ฟังก์ชัน en ไม่ซ้ำกันในทุก group:", isUniqueAllGroups); // false (พบฟังก์ชันที่ซ้ำกัน)


let uniqueResults = checkUniqueAllGroupsByName();
console.log("ผลลัพธ์การตรวจสอบฟังก์ชัน en ไม่ซ้ำกันแยกตาม name:");
console.log(uniqueResults);







// XXXXXXXXXXXXXXX ตัวอย่างการใช้งานจริง  XXXXXXXXXXXXXXX
//  หาว่า detail ภายใน Group ว่ามี EN ว่างไหม (ไม่สนว่าซ้ำกัน)
const data = [
    { "name": "vp", "detail": [ { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null }, { "id": null, "en": "11112", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null } ] },
    { "name": "director", "detail": [ { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null }, { "id": null, "en": null, "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null } ] },
    { "name": "manager", "detail": [ { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null }, { "id": null, "en": "11111", "leader": null, "cust_owner": null, "cust_report": null, "responsible": null, "group_position": null, "user_level": null } ] },
    { "name": "leader", "detail": [] },
    { "name": "staff", "detail": [] },
    { "name": "daily", "detail": [] }
];


function checkNotEmptyInAllGroupsByGroup_NEW(data) {
    let result = {};
    for (let group of data) {
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

function getIncompleteGroups_NEW(result){
    return Object.keys(result)
    .filter(group => !result[group])
    .map(group => {
        if (group === 'ceo' || group === 'cfo' || group === 'vp'  ) {
             return `${group} มีข้อมูลยังกรอก EN/Name ไม่ครบ`;
        }
        else if (group === 'daily') {
            return `${group} มีข้อมูลยังกรอก Cost Center หรือ HeadCount ไม่ครบ`;
        } else {
            return `${group} มีข้อมูลยังกรอก EN/Name ไม่ครบ`;
        }
    })
    .join(', ');
}
// LIST
let isNotEmptyByGroup = checkNotEmptyInAllGroupsByGroup_NEW(data);
console.log(isNotEmptyByGroup)

console.log('ตวรจข้อมูลว่า EN หาก ไม่มีใน detail แต่ null หรือว่างเตือน ถ้ามีแสดงว่า ผิด = False',allGroupsHaveData(isNotEmptyByGroup))

let process_submit = allGroupsHaveData(isNotEmptyByGroup) 
if(process_submit){
    console.log('Save')
}else{
    console.log('ประกาศว่าลืมส่วนไหน',getIncompleteGroups_NEW(isNotEmptyByGroup));
}
