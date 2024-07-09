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

// ฟังก์ชันตรวจสอบการซ้ำฟังก์ชันใน detail ของทุก group
function checkUniqueAllGroups() {
    let seen = new Set();
    for (let group of data_group) {
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
    for (let group of data_group) {
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
console.log("ฟังก์ชันไม่ซ้ำกันในทุก group:", isUniqueAllGroups); // false (พบฟังก์ชันที่ซ้ำกัน)

// ตัวอย่างการใช้งาน
let uniqueResults = checkUniqueAllGroupsByName();
console.log("ผลลัพธ์การตรวจสอบฟังก์ชันไม่ซ้ำกันแยกตาม name:");
console.log(uniqueResults);
