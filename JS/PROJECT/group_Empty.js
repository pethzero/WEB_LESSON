let data_group = [
    {
        "name": "vp",
        "detail": [
            {
                "id": null,
                "en": "11111",
                "leader": null,
                "cust_owner": null,
                "cust_report": null,
                "responsible": null,
                "group_position": null,
                "user_level": null
            },
            {
                "id": null,
                "en": "11112",
                "leader": null,
                "cust_owner": null,
                "cust_report": null,
                "responsible": null,
                "group_position": null,
                "user_level": null
            }
        ]
    },
    {
        "name": "director",
        "detail": [
            {
                "id": null,
                "en":null,
                "leader": null,
                "cust_owner": null,
                "cust_report": null,
                "responsible": null,
                "group_position": null,
                "user_level": null
            },
            {
                "id": null,
                "en": "11111",
                "leader": null,
                "cust_owner": null,
                "cust_report": null,
                "responsible": null,
                "group_position": null,
                "user_level": null
            }
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

// ฟังก์ชันตรวจสอบว่า detail ในทุกๆ group มีข้อมูลและ en ไม่ว่างหรือเป็น null หรือไม่
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


  let isNotEmptyInAllGroups = checkNotEmptyInAllGroups();
console.log("detail ในทุกๆ group มีข้อมูลและ en ไม่ว่าง:", isNotEmptyInAllGroups); // true (มีข้อมูลและ en ไม่ว่าง)


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
let isNotEmptyByGroup = checkNotEmptyInAllGroupsByGroup();
console.log("detail ในทุกๆ group มีข้อมูลและ en ไม่ว่างตามแต่ละ group:");
console.log(isNotEmptyByGroup);