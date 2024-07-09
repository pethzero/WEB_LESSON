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
              "en": "5555",
              "leader": null,
              "cust_owner": null,
              "cust_report": null,
              "responsible": null,
              "group_position": null,
              "user_level": null
          },
          {
              "id": null,
              "en": "www",
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

// ฟังก์ชันตรวจสอบการซ้ำฟังก์ชันใน detail ของ group 'vp'
function checkUniqueInVP() {
  let vpDetails = data_group.find(group => group.name === 'vp').detail;
  let seen = new Set();
  for (let detail of vpDetails) {
      let en = detail.en;
      if (seen.has(en)) {
          return false; // พบฟังก์ชันที่ซ้ำกัน
      }
      seen.add(en);
  }
  return true; // ไม่พบฟังก์ชันที่ซ้ำกัน
}

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


// ตัวอย่างการใช้งาน
let isUniqueInVP = checkUniqueInVP();
console.log("ฟังก์ชันไม่ซ้ำกันใน detail ของ group 'vp':", isUniqueInVP); // false (พบฟังก์ชันที่ซ้ำกัน)

let isNotEmptyInAllGroups = checkNotEmptyInAllGroups();
console.log("detail ในทุกๆ group มีข้อมูลและ en ไม่ว่าง:", isNotEmptyInAllGroups); // true (มีข้อมูลและ en ไม่ว่าง)

// ลองเปลี่ยนค่าใน data_group เพื่อดูผลลัพธ์ที่ต่างกัน

// ตัวอย่างการใช้งาน
let isUniqueAllGroups = checkUniqueAllGroups();
console.log("ฟังก์ชันไม่ซ้ำกันในทุก group:", isUniqueAllGroups); // false (พบฟังก์ชันที่ซ้ำกัน)