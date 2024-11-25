// function transformString(input) {
//     if (!input) {
//       // ถ้า input เป็น null หรือค่าว่าง ให้คืนค่าค่าว่าง
//       return '';
//     }
    
//     // ตัดคำที่มีเครื่องหมาย ? ตัวแรกออก
//     let result = input.split('?').slice(1).join(',');
    
//     return result;
//   }
  
//   let inputString = '?ZPKG?ZRM?ZSA';
//   let outputString = transformString(inputString);
//   console.log(outputString);  // ผลลัพธ์ที่ได้จะเป็น: 'ZPKG,ZRM,ZSA'
  
//   let nullString = null;
//   let outputNull = transformString(nullString);
//   console.log(outputNull);  // ผลลัพธ์ที่ได้จะเป็น: ''
  
//   let emptyString = '';
//   let outputEmpty = transformString(emptyString);
//   console.log(outputEmpty);  // ผลลัพธ์ที่ได้จะเป็น: ''
  

//////////////////////////
function transformString(input, priorityList) {
    if (!input) {
      // ถ้า input เป็น null หรือค่าว่าง ให้คืนค่าค่าว่าง
      return '';
    }
  
    // ตัดคำที่มีเครื่องหมาย ? ตัวแรกออก
    let parts = input.split('?').slice(1);  // ตัดคำหลังเครื่องหมาย ? ตัวแรก
    
    // ค้นหาค่าที่ตรงกับรายการ priorityList
    for (let priority of priorityList) {
      // หาใน parts ว่ามีค่าตรงกับ priority หรือไม่
      let found = parts.find(part => part === priority);
      if (found) {
        return found;  // คืนค่าตัวแรกที่พบ
      }
    }
  
    // ถ้าไม่พบค่าที่ตรงกับ priorityList ให้คืนค่าตัวแรกจาก parts
    return parts[0] || ''; // คืนค่าตัวแรก ถ้าไม่มีค่าก็คืนค่าว่าง
  }
  
  let inputString = '?ZPKG?ZRM?ZSA';
  let priorityList = ['ZRM', 'ZSM'];
  
  let outputString = transformString(inputString, priorityList);
  console.log(outputString);  // ผลลัพธ์ที่ได้จะเป็น: 'ZRM'
  
  let inputString2 = '?ZPKG?ZSA?ZSM';
  let outputString2 = transformString(inputString2, priorityList);
  console.log(outputString2);  // ผลลัพธ์ที่ได้จะเป็น: 'ZSM'
  
  let inputString3 = '?ZPKG?ZSA';
  let outputString3 = transformString(inputString3, priorityList);
  console.log(outputString3);  // ผลลัพธ์ที่ได้จะเป็น: 'ZPKG'
  