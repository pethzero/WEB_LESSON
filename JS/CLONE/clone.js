// ใน JavaScript การสร้างสำเนาลึก (deep copy) มีหลายวิธีที่สามารถทำได้ ขึ้นอยู่กับความต้องการและลักษณะของข้อมูล นี่คือวิธีการที่นิยมใช้:
// 1. ใช้ JSON.stringify และ JSON.parse
// วิธีนี้เป็นวิธีที่ง่ายและตรงไปตรงมาในการสร้างสำเนาลึก แต่มันจะไม่ทำงานกับข้อมูลที่มีฟังก์ชัน, undefined, Infinity, หรือ Date:
const original = {
    name: 'Alice',
    age: 30,
    address: {
      city: 'Wonderland',
      zip: '12345'
    }
  };
  const deepCopy = JSON.parse(JSON.stringify(original));
  console.log(deepCopy);
  
//   2. ใช้ structuredClone (ES2021)
// structuredClone เป็นวิธีที่ใช้ในการสร้างสำเนาลึกและรองรับข้อมูลหลายประเภทที่ JSON.stringify ไม่รองรับ:
const original2 = {
    name: 'Bob',
    age: 25,
    address: {
      city: 'Atlantis',
      zip: '67890'
    }
  };
  
  const deepCopy2 = structuredClone(original2);
  
  console.log(deepCopy2);
  

//   3. ใช้ฟังก์ชัน Object.assign สำหรับอ็อบเจ็กต์ที่ไม่มีซับซ้อน
// Object.assign จะสร้างสำเนาลึกเพียงหนึ่งระดับเท่านั้น ดังนั้นไม่เหมาะสำหรับอ็อบเจ็กต์ที่มีการทำซ้ำ:
const original3 = {
    name: 'Charlie',
    age: 35,
    address: {
      city: 'Gotham',
      zip: '10101'
    }
  };
  
  const shallowCopy = Object.assign({}, original3);
  
  // ใช้ `Object.assign` จะลอกลึกเฉพาะระดับแรก
  shallowCopy.address.city = 'Metropolis';
  
  console.log(original3.address.city); // Gotham
  console.log(shallowCopy.address.city); // Metropolis
  


//   4. ใช้ไลบรารีภายนอก เช่น Lodash
// Lodash มีฟังก์ชัน cloneDeep ที่สามารถใช้สร้างสำเนาลึก:
const _ = require('lodash');
const original4 = {
    name: 'Dave',
    age: 40,
    address: {
      city: 'Smallville',
      zip: '20202'
    }
  };
  
  const deepCopy4 = _.cloneDeep(original4);
  
  console.log(deepCopy4);


//   5. สร้างฟังก์ชันสำเนาลึกด้วยตนเอง
// การสร้างฟังก์ชันสำหรับทำสำเนาลึกสามารถให้ความยืดหยุ่นและควบคุมได้ดี:
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    }
  
    const clone = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  }
  
  const original5 = {
    name: 'Eve',
    age: 28,
    address: {
      city: 'Sunnydale',
      zip: '30303'
    }
  };
  
  const deepCopy5 = deepClone(original5);
  
  console.log(deepCopy5);
  